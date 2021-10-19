/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class CreditManager extends AbstractBaseManager {
 
     // add new Credit
     async addCredit(event: Event, payload: any) {
         return CreditManager.addResource(payload)
     }
 
     //get all Credits
     async getAllCredits() {
         return CreditManager.getAllResources();
     }
 
     // delete a Credit
     async deleteCredit(event: Event, id: string | any) {
         return CreditManager.deleteResource(id)
     }
 
     // edit a Credit
     async editCredit(event: Event, payload: any) {
         return CreditManager.updateResource(payload)
     }
 
     // get a single Credit
     async singleCredit(event: Event, id: any) {
         return CreditManager.getSingleResource(id);
     }
 }