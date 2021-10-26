/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class InvoiceManager extends AbstractBaseManager {
 
     // add new Invoice
     async addInvoice(payload: any) {
         return InvoiceManager.addResource(payload)
     }
 
     //get all Invoices
     async getInvoices(payload: any) {
         return InvoiceManager.getAllResources();
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