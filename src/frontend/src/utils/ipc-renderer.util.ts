import ElectronUI from "./electron.util";
const ipcResponseHandler = (actionEvent: string, handler: any) => {
    ElectronUI.ipcRenderer.on(actionEvent + "-response", handler);
    return;
}

const ipcRequestTrigger = (actionEvent: string, payload?: any) => {
    ElectronUI.ipcRenderer.send(actionEvent, payload);
    return;
}

const IPC = { ipcRequestTrigger, ipcResponseHandler }

export default IPC;