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
 
 export class GroupManager extends AbstractBaseManager {
 
     // add new Group
     async addGroup(payload: any) {
         return GroupManager.addResource(payload)
     }
 
     //get all Groups
     async getGroups(payload: any) {
         return GroupManager.getAllResources(payload);
     }
 
     // delete a Group
     async deleteGroup(id: string | any) {
         return GroupManager.deleteResource(id)
     }
 
     // edit a Group
     async editGroup(payload: any) {
         return GroupManager.updateResource(payload)
     }
 
     // get a single Group
     async getSingleGroup(id: any) {
         return GroupManager.getSingleResource(id);
     }
 }