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
    sendActionToRenderer(payload.platform.window, responseAction, payload.payload?.data);
}

