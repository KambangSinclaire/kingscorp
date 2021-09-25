import { BrowserWindow } from "electron";
import { Connection, Repository } from "typeorm";

export default abstract class AbstractBaseManager {
    /**
     * Reference to an instance of the entity that is to be used by the child manager 
     */
    static entity: any;

    /**
    * Reference to the global DB connection instance
    */
    static dbConnection: Connection;

    /**
    * Reference to the repository instance of the entity above
    */
    static repository: Repository<any>;

    /**
     * Reference to an instance of the browser window that triggered the action
     * This is useful as it will grant the possibility to send or trigger actions in the renderer process 
     */
    static window: BrowserWindow;

    /**
    * Reference to the current action that has been triggered 
    * This is useful to send or trigger a response action in the renderer process 
    */
    static actionEvent: string;

}