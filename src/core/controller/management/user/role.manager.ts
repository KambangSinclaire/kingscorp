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
 
 export class RoleManager extends AbstractBaseManager {
 
     // add new Role
     async addRole(payload: any) {
         return RoleManager.addResource(payload)
     }
 
     //get all Roles
     async getRoles(payload: any) {
         return RoleManager.getAllResources(payload);
     }
 
     // delete a Role
     async deleteRole(id: string | any) {
         return RoleManager.deleteResource(id)
     }
 
     // edit a Role
     async editRole(payload: any) {
         return RoleManager.updateResource(payload)
     }
 
     // get a single Role
     async getSingleRole(id: any) {
         return RoleManager.getSingleResource(id);
     }
 }