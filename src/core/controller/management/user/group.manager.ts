/**
 * Author : @Sinclaire 2021
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