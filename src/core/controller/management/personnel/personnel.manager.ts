/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class PersonnelManager extends AbstractBaseManager {
 
     // add new Personnel
     async addPersonnel(payload: any) {
         return PersonnelManager.addResource(payload)
     }
 
     //get all Personnels
     async getPersonnels(payload: any) {
         return PersonnelManager.getAllResources(payload);
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