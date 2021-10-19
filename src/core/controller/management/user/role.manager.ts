/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class RoleManager extends AbstractBaseManager {
 
     // add new Role
     async addRole(event: Event, payload: any) {
         return RoleManager.addResource(payload)
     }
 
     //get all Roles
     async getAllRoles() {
         return RoleManager.getAllResources();
     }
 
     // delete a Role
     async deleteRole(event: Event, id: string | any) {
         return RoleManager.deleteResource(id)
     }
 
     // edit a Role
     async editRole(event: Event, payload: any) {
         return RoleManager.updateResource(payload)
     }
 
     // get a single Role
     async singleRole(event: Event, id: any) {
         return RoleManager.getSingleResource(id);
     }
 }