export const AppActionEvents = {

    user: {
        login: "login"
    },

    product: {
        add: "add-product",
        edit: "edit-product",
        retrieveSinle: "get-single-product",
        retrieve: "get-products",
        delete: "delete-product",
    },
    stock: {
        add: "new-stock",
        edit: "edit-stock",
        retrieveSinle: "get-single-stock",
        retrieve: "get-stock",
        delete: "delete-stock",
    },
    invoice: {
        add: "create-invoice",
        edit: "edit-invoice",
        retrieveSinle: "get-single-invoice",
        retrieve: "get-invoices",
        delete: "delete-invoice",
    },
    personnel: {
        add: "create-personnel",
        edit: "edit-personnel-info",
        retrieve: "get-personnels",
        retrieveSinle: "get-single-personnel",
        delete: "delete-personnel",
    },
    notification: {
        sendSMS: "send-sms-notification",
        sendEmail: "send-email-notification",
        sendPush: "send-push-notification"
    }
}