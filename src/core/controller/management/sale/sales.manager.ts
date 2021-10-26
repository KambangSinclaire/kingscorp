/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class SalesManager extends AbstractBaseManager {
 
     // add new Sales
     async addSale(payload: any) {
         return SalesManager.addResource(payload)
     }
 
     //get all Saless
     async getSales(payload: any) {
         return SalesManager.getAllResources();
     }
 
     // delete a Sales
     async deleteSale(id: string | any) {
         return SalesManager.deleteResource(id)
     }
 
     // edit a Sales
     async editSale(payload: any) {
         return SalesManager.updateResource(payload)
     }
 
     // get a single Sales
     async getSingleSale(id: any) {
         return SalesManager.getSingleResource(id);
     }
 }