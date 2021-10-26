/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class PersonnelManager extends AbstractBaseManager {
 
     // add new Personnel
     async addPersonnel(payload: any) {
         return PersonnelManager.addResource(payload)
     }
 
     //get all Personnels
     async getPersonnels(payload: any) {
         return PersonnelManager.getAllResources();
     }
 
     // delete a Personnel
     async deletePersonnel(id: string | any) {
         return PersonnelManager.deleteResource(id)
     }
 
     // edit a Personnel
     async editPersonnel(payload: any) {
         return PersonnelManager.updateResource(payload)
     }
 
     // get a single Personnel
     async getSinglePersonnel(id: any) {
         return PersonnelManager.getSingleResource(id);
     }
 }