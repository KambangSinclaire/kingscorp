/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class ServiceManager extends AbstractBaseManager {
 
     // add new Service
     async addService(event: Event, payload: any) {
         return ServiceManager.addResource(payload)
     }
 
     //get all Services
     async getAllServices() {
         return ServiceManager.getAllResources();
     }
 
     // delete a Service
     async deleteService(event: Event, id: string | any) {
         return ServiceManager.deleteResource(id)
     }
 
     // edit a Service
     async editService(event: Event, payload: any) {
         return ServiceManager.updateResource(payload)
     }
 
     // get a single Service
     async singleService(event: Event, id: any) {
         return ServiceManager.getSingleResource(id);
     }
 }