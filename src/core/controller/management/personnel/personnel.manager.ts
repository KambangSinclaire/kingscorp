/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class PersonnelManager extends AbstractBaseManager {
 
     // add new Personnel
     async addPersonnel(event: Event, payload: any) {
         return PersonnelManager.addResource(payload)
     }
 
     //get all Personnels
     async getAllPersonnels() {
         return PersonnelManager.getAllResources();
     }
 
     // delete a Personnel
     async deletePersonnel(event: Event, id: string | any) {
         return PersonnelManager.deleteResource(id)
     }
 
     // edit a Personnel
     async editPersonnel(event: Event, payload: any) {
         return PersonnelManager.updateResource(payload)
     }
 
     // get a single Personnel
     async singlePersonnel(event: Event, id: any) {
         return PersonnelManager.getSingleResource(id);
     }
 }