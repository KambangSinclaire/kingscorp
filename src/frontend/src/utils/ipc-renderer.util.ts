/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { ResponseStatus } from "@/constants/response-codes";
import { AppActionEvents } from "@/events/app.events";
import { ResponsePayload } from "@/interfaces/response.interface";
import ElectronUI from "./electron.util";
// const ipcResponseHandler = (actionEvent: string, handler: any) => {
//     ElectronUI.ipcRenderer.on(actionEvent + "-response", handler);
//     console.log("fetching...");
//     return;
// }

const ipcRequestTrigger = async (actionEvent: string, payload?: any) => {

    const isOnline = navigator.onLine;

    if (!navigator.onLine) {
        console.log("offOnline running...", isOnline);
        const response: ResponsePayload = await ElectronUI.ipcRenderer.invoke(actionEvent, payload);
        console.log("response data...", response);
        if (response.status === ResponseStatus.OK) {
            return response.data;
        }
        return []
    }

    let method = "GET";
    const endpoint = `${AppActionEvents.API_BASE_URL}/${actionEvent}`;
    if (actionEvent.toLocaleLowerCase().includes("edit")) method = "PUT";
    if (actionEvent.toLocaleLowerCase().includes("add")) method = "POST";
    if (actionEvent.toLocaleLowerCase().includes("delete")) method = "DELETE";

    try {
        return await webAPICaller(endpoint, method, payload)
    } catch (error) {
        console.log(error);
        return []
    }
}

const webAPICaller = async (endpoint: string, method: string, payload: any) => {
    const apiResponse = await fetch(endpoint, {
        method,
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: payload && method !== "GET" ? JSON.stringify(payload) : null
    });

    console.log(apiResponse);
    const expectedResponse: ResponsePayload = await apiResponse.json();

    return expectedResponse.data;
}

const IPC = { ipcRequestTrigger }

export default IPC;