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
 
 export class StockManager extends AbstractBaseManager {
 
     // add new Stock
     async addStock(payload: any) {
         return StockManager.addResource(payload)
     }
 
     //get all Stocks
     async getStocks(payload: any) {
         return StockManager.getAllResources(payload);
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