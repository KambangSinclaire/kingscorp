/**
 * Author : @Sinclaire 2021
 */
import AbstractBaseManager from "../AbstractBaseManager";

export class CategoryManager extends AbstractBaseManager {

    // add new Category
    async addCategory(payload: any) {
        return CategoryManager.addResource(payload)
    }

    //get all Categories
    async getCategories(payload: any) {
        return CategoryManager.getAllResources(payload);
    }

    // delete a Category
    async deleteCategory(id: string | any) {
        return CategoryManager.deleteResource(id)
    }

    // edit a Category
    async editCategory(payload: any) {
        return CategoryManager.updateResource(payload)
    }

    // get a single Category
    async getSingleCategory(id: any) {
        return CategoryManager.getSingleResource(id);
    }
}