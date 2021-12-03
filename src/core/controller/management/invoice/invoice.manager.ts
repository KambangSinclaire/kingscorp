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
 
 export class InvoiceManager extends AbstractBaseManager {
 
     // add new Invoice
     async addInvoice(payload: any) {
         return InvoiceManager.addResource(payload)
     }
 
     //get all Invoices
     async getInvoices(payload: any) {
         return InvoiceManager.getAllResources(payload);
     }
 
     // delete a Invoice
     async deleteInvoice(id: string | any) {
         return InvoiceManager.deleteResource(id)
     }
 
     // edit a Invoice
     async editInvoice(payload: any) {
         return InvoiceManager.updateResource(payload)
     }
 
     // get a single Invoice
     async getSingleInvoice(id: any) {
         return InvoiceManager.getSingleResource(id);
     }
 }