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

export class ProductManager extends AbstractBaseManager {

    // add new product
    async addProduct(payload: any) {
        return ProductManager.addResource(payload)
    }

    //get all products
    async getProducts(payload: any) {
        return ProductManager.getAllResources(payload);
    }

    // delete a product
    async deleteProduct(id: string | any) {
        return ProductManager.deleteResource(id)
    }

    // edit a product
    async editProduct(payload: any) {
        return ProductManager.updateResource(payload)
    }

    // get a single product
    async getSingleProduct(id: any) {
        return ProductManager.getSingleResource(id);
    }

    async getProductsByCategory(payload:any){
        return ProductManager.queryResouces(payload);
    }
}