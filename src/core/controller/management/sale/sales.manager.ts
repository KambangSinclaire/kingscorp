/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class SalesManager extends AbstractBaseManager {
 
     // add new Sales
     async addSales(event: Event, payload: any) {
         return SalesManager.addResource(payload)
     }
 
     //get all Saless
     async getAllSales() {
         return SalesManager.getAllResources();
     }
 
     // delete a Sales
     async deleteSales(event: Event, id: string | any) {
         return SalesManager.deleteResource(id)
     }
 
     // edit a Sales
     async editSales(event: Event, payload: any) {
         return SalesManager.updateResource(payload)
     }
 
     // get a single Sales
     async singleSale(event: Event, id: any) {
         return SalesManager.getSingleResource(id);
     }
 }