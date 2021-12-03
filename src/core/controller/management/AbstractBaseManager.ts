/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { BrowserWindow } from "electron";
import { Connection, Repository } from "typeorm";
import { ResponseStatus } from "../../constants/response-status.constants";
import { ResponsePayload } from "../../interfaces/response.interface";
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
    static async addResource(payload: any): Promise<ResponsePayload> {
        let resource = AbstractBaseManager.entity;
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        resource = { ...payload };
        try {
            const newResource = await AbstractBaseManager.repository.save(resource);
            return {
                status: ResponseStatus.OK,
                message: "Successful",
                data: newResource,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        } catch (error: any) {
            console.log("Error occured ", error);
            return {
                status: ResponseStatus.PROCESS_ERROR,
                message: error?.message,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        }
    }

    //get all resources
    static async getAllResources(payload?: any): Promise<ResponsePayload> {
        let repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            if (payload) {
                const data = await repository.find(payload);
                return {
                    status: ResponseStatus.OK,
                    message: "Successful",
                    data,
                    platform: {
                        type: 'native',
                        actionEvent: AbstractBaseManager.actionEvent
                    }
                }
            }
            const data = await repository.find();
            return {
                status: ResponseStatus.OK,
                message: "Successful",
                data,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            }
        } catch (error: any) {
            return {
                status: ResponseStatus.PROCESS_ERROR,
                message: error?.message,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        }
    }

    // delete a resource
    static async deleteResource(id: string | any): Promise<ResponsePayload> {
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const deletedResource = await AbstractBaseManager.repository.delete({ id });
            return {
                status: ResponseStatus.OK,
                message: "Successful",
                data: deletedResource,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        } catch (error: any) {
            return {
                status: ResponseStatus.PROCESS_ERROR,
                message: error?.message,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        }
    }

    // edit a resource
    static async updateResource(payload: any): Promise<ResponsePayload> {
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const id = payload?.id;
            const editedResource = await AbstractBaseManager.repository.update({ id }, payload.data);
            return {
                status: ResponseStatus.OK,
                message: "Successful",
                data: editedResource,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        } catch (error: any) {
            return {
                status: ResponseStatus.PROCESS_ERROR,
                message: error?.message,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        }
    }
    // get a single resource
    static async getSingleResource(id: string | any): Promise<ResponsePayload> {
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const singleResource = await AbstractBaseManager.repository.findOne({ ...id });
            return {
                status: ResponseStatus.OK,
                message: "Successful",
                data: singleResource,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        } catch (error: any) {
            return {
                status: ResponseStatus.PROCESS_ERROR,
                message: error?.message,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        }
    }

    static async queryResouces(query: any): Promise<ResponsePayload> {
        AbstractBaseManager.repository = retrieveEntity(AbstractBaseManager.entity, AbstractBaseManager.dbConnection);
        try {
            const result = await AbstractBaseManager.repository
                .find(query)
            return {
                status: ResponseStatus.OK,
                message: "Successful",
                data: result,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        } catch (error: any) {
            return {
                status: ResponseStatus.PROCESS_ERROR,
                message: error?.message,
                platform: {
                    type: 'native',
                    actionEvent: AbstractBaseManager.actionEvent
                }
            };
        }
    }
}