import { BrowserWindow } from "electron";
import { Connection, Repository } from "typeorm";
import retrieveEntity from "../../utils/retrieve-entity.util";


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


    // add new resource
    static async addResource(payload: any) {
        let resource = AbstractBaseManager.entity;
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        resource = { ...payload };
        try {
            const newResource = await AbstractBaseManager.repository.save(resource);
            return newResource;
        } catch (error: any) {
            console.log("Error occured ", error);
            return error;
        }
    }

    //get all resources
    static async getAllResources() {
        let repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const resources = await repository.find();
            return resources;
        } catch (error: any) {
            return error;
        }
    }

    // delete a resource
    static async deleteResource(id: string | any) {
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const deletedResource = await AbstractBaseManager.repository.delete({ id });
            return deletedResource;
        } catch (error: any) {
            return error;
        }
    }

    // edit a resource
    static async updateResource(payload: any) {
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const id = payload?.id;
            const editedResource = await AbstractBaseManager.repository.update({ id }, payload.data);
            return editedResource;
        } catch (error: any) {
            return error;
        }
    }
    // get a single resource
    static async getSingleResource(id: string | any) {
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const singledresource = await AbstractBaseManager.repository.findOne({ ...id });
            return singledresource;
        } catch (error: any) {
            return error;
        }
    }

    static async queryResouces(query: Object | any) {

    }
}