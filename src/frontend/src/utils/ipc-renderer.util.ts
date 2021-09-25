import ElectronUI from "./electron.util";
const ipcResponseHandler = (actionEvent: string, handler: any) => {
    ElectronUI.ipcRenderer.on(actionEvent + "-response", handler);
}

const ipcRequestTrigger = (actionEvent: string, payload?: any) => {
    ElectronUI.ipcRenderer.send(actionEvent, payload);
}

const IPC = { ipcRequestTrigger, ipcResponseHandler }

export default IPC;