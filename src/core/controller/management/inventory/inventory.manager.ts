/**
 * Author : @Sinclaire 2021
 */
import AbstractBaseManager from "../AbstractBaseManager";

export class InventoryManager extends AbstractBaseManager {

    // add new Inventory
    async addInventory(payload: any) {
        return InventoryManager.addResource(payload)
    }

    //get all Inventorys
    async getInventories(payload: any) {
        return InventoryManager.getAllResources();
    }

    // delete a Inventory
    async deleteInventory(id: string | any) {
        return InventoryManager.deleteResource(id)
    }

    // edit a Inventory
    async editInventory(payload: any) {
        return InventoryManager.updateResource(payload)
    }

    // get a single Inventory
    async getSingleInventory(id: any) {
        return InventoryManager.getSingleResource(id);
    }
}