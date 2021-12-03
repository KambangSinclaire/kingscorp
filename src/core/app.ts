/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as IPC_MAIN from "./lib/ipc-manager.lib";
import { Connection } from "typeorm";
import config from "./config/app.config";
import "reflect-metadata";
class KingsCorp {

    private mainWindow: BrowserWindow | any;
    private DatabaseConnection!: Connection;

    constructor() {
        this.startApplication();
    }

    async startApplication() {
        this.DatabaseConnection = await config.database();

        app.whenReady().then(() => {
            const win = KingsCorp.createWindow({});
            this.setMainAppWindow = win;


            /**
             * EVENT LISTENER - (APPLICATION EVENT ROUTER)
             */
            IPC_MAIN.default(this.DatabaseConnection, win);



            app.on('activate', () => {
                if (BrowserWindow.getAllWindows().length === 0) {
                    KingsCorp.createWindow({width:2000,height:1500})
                }
            })
        });

        KingsCorp.closeApplication();
    }

    /**
     * Close an active window
     */
    public static closeApplication() {
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
    }



    /**
     * 
     * @param options 
     * @returns 
     */
    public static createWindow(options: { width?: number, height?: number, viewPath?: string, preloadPath?: string }) {
        const win = new BrowserWindow({
            width: options.width ?? 2000,
            height: options.height ?? 1500,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                preload: path.join(__dirname, options.preloadPath ?? 'preload.js'),
            }
        });
        // win.loadFile(path.join(__dirname, options.viewPath ?? "../src/frontend/dist/index.html"));
        win.loadURL("http://localhost:8080/");
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