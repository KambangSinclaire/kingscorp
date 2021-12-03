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