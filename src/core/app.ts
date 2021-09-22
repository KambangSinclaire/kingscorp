import { app, BrowserWindow, ipcMain, ipcRenderer } from "electron";
import * as path from "path";

class KingsCorp {

    private mainWindow: BrowserWindow | any;

    constructor() {
        this.startApplication();
    }

    startApplication() {
        const that = this;
        app.whenReady().then(() => {
            const win = that.createWindow({});
            this.sendActionToRenderer(this.getMainAppWindow, "alert", { name: "Helloooo" });
            this.setMainAppWindow = win;
            app.on('activate', () => {
                if (BrowserWindow.getAllWindows().length === 0) {
                    that.createWindow({})
                }
            })
        });

        ipcMain.on('login', (data: any) => {
           this.createWindow({});
        });

        this.closeApplication();
    }

    closeApplication() {
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
    }

    sendActionToRenderer(win: BrowserWindow, action: string, payload?: any) {
        win.webContents.send(action, payload);
    }

    createWindow(options: { width?: number, height?: number, viewPath?: string, preloadPath?: string }) {
        const win = new BrowserWindow({
            width: options.width ?? 800,
            height: options.height ?? 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                preload: path.join(__dirname, options.preloadPath ?? 'preload.js'),
            }
        });
        win.loadFile(path.join(__dirname, options.viewPath ?? "../src/frontend/dist/index.html"));
        return win;
    }

    get getMainAppWindow() {
        return this.mainWindow;
    }

    set setMainAppWindow(win: BrowserWindow) {
        this.mainWindow = win;
    }
}

export default new KingsCorp();