import { BrowserWindow } from "electron";

/**
 * EXPECTING MORE FIELDS IN THE LONG RUN
 */
export interface ResponsePayload {
    status: number;
    message: string;
    payload?: {
        data: [],
    };
    platform:{
        window:BrowserWindow,
        actionEvent:string
    };
}