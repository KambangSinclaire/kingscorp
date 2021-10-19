/**
 * Author : @Sinclaire 2021
 */
import AbstractBaseManager from "../AbstractBaseManager";

export class InventoryManager extends AbstractBaseManager {

    // add new Inventory
    async addInventory(event: Event, payload: any) {
        return InventoryManager.addResource(payload)
    }

    //get all Inventorys
    async getAllInventorys() {
        return InventoryManager.getAllResources();
    }

    // delete a Inventory
    async deleteInventory(event: Event, id: string | any) {
        return InventoryManager.deleteResource(id)
    }

    // edit a Inventory
    async editInventory(event: Event, payload: any) {
        return InventoryManager.updateResource(payload)
    }

    // get a single Inventory
    async singleInventory(event: Event, id: any) {
        return InventoryManager.getSingleResource(id);
    }
}