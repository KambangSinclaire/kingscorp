/**
 * Author : @Sinclaire 2021
 */
 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class NotificationManager extends AbstractBaseManager {
 
     // add new Notification
     async addNotification(event: Event, payload: any) {
         return NotificationManager.addResource(payload)
     }
 
     //get all Notifications
     async getAllNotifications() {
         return NotificationManager.getAllResources();
     }
 
     // delete a Notification
     async deleteNotification(event: Event, id: string | any) {
         return NotificationManager.deleteResource(id)
     }
 
     // edit a Notification
     async editNotification(event: Event, payload: any) {
         return NotificationManager.updateResource(payload)
     }
 
     // get a single Notification
     async singleNotification(event: Event, id: any) {
         return NotificationManager.getSingleResource(id);
     }
 }