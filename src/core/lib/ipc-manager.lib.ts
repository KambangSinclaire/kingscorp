import { BrowserWindow, ipcMain } from "electron";
import { Connection } from "typeorm";
import { UserManager } from "../controller/management/user management/user.manager";
import { UserEntity } from "../database/entities/user.entity";
import { AppActionEvents } from "../events/app.events";


const ipcIncommingMessageHandler = (dbConnection: Connection, actionWindow: BrowserWindow) => {

    // CHANNEL HANDLER
    const channelHandler = (channel: string, handler: any) => {
        ipcMain.on(channel, handler)
    }

    /**
     * HANDLE USER RELATED EVENTS
     */
    let userManager = new UserManager();
    UserManager.entity = new UserEntity();
    UserManager.dbConnection = dbConnection;
    UserManager.window = actionWindow;


    UserManager.actionEvent = AppActionEvents.user.login;
    channelHandler(AppActionEvents.user.login, userManager.addUser)






}







export default ipcIncommingMessageHandler;