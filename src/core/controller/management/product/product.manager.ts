/**
 * Author : @Sinclaire 2021
 */
import AbstractBaseManager from "../AbstractBaseManager";

export class ProductManager extends AbstractBaseManager {

    // add new product
    async addProduct(event: Event, payload: any) {
        return ProductManager.addResource(payload)
    }

    //get all products
    async getAllProducts() {
        return ProductManager.getAllResources();
    }

    // delete a product
    async deleteProduct(event: Event, id: string | any) {
        return ProductManager.deleteResource(id)
    }

    // edit a product
    async editProduct(event: Event, payload: any) {
        return ProductManager.updateResource(payload)
    }

    // get a single product
    async singleProduct(event: Event, id: any) {
        return ProductManager.getSingleResource(id);
    }
}