/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */


export interface ResponsePayload {
    status: number;
    message: string;
    data: {} | [],
    platform: {
        type: string,
        actionEvent: string
    };
}