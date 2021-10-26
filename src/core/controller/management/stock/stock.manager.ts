/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class StockManager extends AbstractBaseManager {
 
     // add new Stock
     async addStock(payload: any) {
         return StockManager.addResource(payload)
     }
 
     //get all Stocks
     async getStocks(payload: any) {
         return StockManager.getAllResources();
     }
 
     // delete a Stock
     async deleteStock(id: string | any) {
         return StockManager.deleteResource(id)
     }
 
     // edit a Stock
     async editStock(payload: any) {
         return StockManager.updateResource(payload)
     }
 
     // get a single Stock
     async getSingleStock(id: any) {
         return StockManager.getSingleResource(id);
     }
 }