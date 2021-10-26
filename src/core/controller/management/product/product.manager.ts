/**
 * Author : @Sinclaire 2021
 */
import AbstractBaseManager from "../AbstractBaseManager";

export class ProductManager extends AbstractBaseManager {

    // add new product
    async addProduct(payload: any) {
        return ProductManager.addResource(payload)
    }

    //get all products
    async getProducts(payload: any) {
        return ProductManager.getAllResources();
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
}