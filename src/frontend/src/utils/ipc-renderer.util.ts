import ElectronUI from "./electron.util";
const ipcResponseHandler = (actionEvent: string, handler: any) => {
    ElectronUI.ipcRenderer.on(actionEvent + "-response", handler);
    console.log("fetching...");
    return;
}

const ipcRequestTrigger = async (actionEvent: string, payload?: any) => {
    console.log("action running...", actionEvent);
    const response = await ElectronUI.ipcRenderer.invoke(actionEvent, payload);
    return response;
}

const IPC = { ipcRequestTrigger, ipcResponseHandler }

export default IPC;