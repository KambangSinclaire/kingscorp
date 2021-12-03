/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { BrowserWindow } from "electron";
import { ResponsePayload } from "../interfaces/response.interface";

/**
* @param win 
* @param action 
* @param payload 
*/
const sendActionToRenderer = (win: BrowserWindow, action: string, payload?: any) => {
    win.webContents.send(action, payload);
}

/**
* @param payload
*/
export const responseHandler = (payload: ResponsePayload) => {
    const responseAction = payload.platform.actionEvent + "-response";
    // sendActionToRenderer(payload.platform.type, responseAction, payload.payload?.data);
}

