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

export class CreditManager extends AbstractBaseManager {

    // add new Credit
    async addCredit(payload: any) {
        return CreditManager.addResource(payload)
    }

    //get all Credits
    async getCredits(payload: any) {
        return CreditManager.getAllResources(payload);
    }

    // delete a Credit
    async deleteCredit(id: string | any) {
        return CreditManager.deleteResource(id)
    }

    // edit a Credit
    async editCredit(payload: any) {
        return CreditManager.updateResource(payload)
    }

    // get a single Credit
    async getSingleCredit(id: any) {
        return CreditManager.getSingleResource(id);
    }
}