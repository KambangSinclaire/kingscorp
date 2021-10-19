/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class InvoiceManager extends AbstractBaseManager {
 
     // add new Invoice
     async addInvoice(event: Event, payload: any) {
         return InvoiceManager.addResource(payload)
     }
 
     //get all Invoices
     async getAllInvoices() {
         return InvoiceManager.getAllResources();
     }
 
     // delete a Invoice
     async deleteInvoice(event: Event, id: string | any) {
         return InvoiceManager.deleteResource(id)
     }
 
     // edit a Invoice
     async editInvoice(event: Event, payload: any) {
         return InvoiceManager.updateResource(payload)
     }
 
     // get a single Invoice
     async singleInvoice(event: Event, id: any) {
         return InvoiceManager.getSingleResource(id);
     }
 }