// const ElectronUI = window.require("electron");
const ElectronUI = {
    ipcRenderer: {
        on: (a: any, b: any) => {
            return a+b;
         },
        invoke: (a: any, b: any) => { 
            return a+b;
        }
    }
};
export default ElectronUI;