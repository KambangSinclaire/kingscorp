/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class GroupManager extends AbstractBaseManager {
 
     // add new Group
     async addGroup(event: Event, payload: any) {
         return GroupManager.addResource(payload)
     }
 
     //get all Groups
     async getAllGroups() {
         return GroupManager.getAllResources();
     }
 
     // delete a Group
     async deleteGroup(event: Event, id: string | any) {
         return GroupManager.deleteResource(id)
     }
 
     // edit a Group
     async editGroup(event: Event, payload: any) {
         return GroupManager.updateResource(payload)
     }
 
     // get a single Group
     async singleGroup(event: Event, id: any) {
         return GroupManager.getSingleResource(id);
     }
 }