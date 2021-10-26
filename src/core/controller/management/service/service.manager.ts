/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class ServiceManager extends AbstractBaseManager {
 
     // add new Service
     async addService(payload: any) {
         return ServiceManager.addResource(payload)
     }
 
     //get all Services
     async getServices(payload: any) {
         return ServiceManager.getAllResources();
     }
 
     // delete a Service
     async deleteService(id: string | any) {
         return ServiceManager.deleteResource(id)
     }
 
     // edit a Service
     async editService(payload: any) {
         return ServiceManager.updateResource(payload)
     }
 
     // get a single Service
     async getSingleService(id: any) {
         return ServiceManager.getSingleResource(id);
     }
 }