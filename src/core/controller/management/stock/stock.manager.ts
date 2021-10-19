/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class StockManager extends AbstractBaseManager {
 
     // add new Stock
     async addStock(event: Event, payload: any) {
         return StockManager.addResource(payload)
     }
 
     //get all Stocks
     async getAllStocks() {
         return StockManager.getAllResources();
     }
 
     // delete a Stock
     async deleteStock(event: Event, id: string | any) {
         return StockManager.deleteResource(id)
     }
 
     // edit a Stock
     async editStock(event: Event, payload: any) {
         return StockManager.updateResource(payload)
     }
 
     // get a single Stock
     async singleStock(event: Event, id: any) {
         return StockManager.getSingleResource(id);
     }
 }