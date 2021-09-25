import { ipcMain } from "electron";
import { Connection } from "typeorm";
import { UserManager } from "../controller/management/user management/user.manager";
import { UserEntity } from "../database/entities/user.entity";
import { ActionEvents } from "../events/app.events";


const ipcIncommingMessageHandler = (dbConnection: Connection) => {

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
    channelHandler(ActionEvents.user.login, userManager.addUser)






}







export default ipcIncommingMessageHandler;