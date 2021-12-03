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
 
 export class NotificationManager extends AbstractBaseManager {
 
     // add new Notification
     async addNotification(payload: any) {
         return NotificationManager.addResource(payload)
     }
 
     //get all Notifications
     async getNotifications(payload: any) {
         return NotificationManager.getAllResources(payload);
     }
 
     // delete a Notification
     async deleteNotification(id: string | any) {
         return NotificationManager.deleteResource(id)
     }
 
     // edit a Notification
     async editNotification(payload: any) {
         return NotificationManager.updateResource(payload)
     }
 
     // get a single Notification
     async getSingleNotification(id: any) {
         return NotificationManager.getSingleResource(id);
     }
 }