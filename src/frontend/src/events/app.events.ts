export const AppActionEvents = {

    user: {
        login: "login"
    },

    product: {
        add: "addProduct",
        edit: "editProduct",
        retrieveSingle: "getSingleProduct",
        retrieve: "getProducts",
        delete: "deleteProduct",
    },
    stock: {
        add: "newStock",
        edit: "editStock",
        retrieveSingle: "getSingleStock",
        retrieve: "getStock",
        delete: "deleteStock",
    },
    invoice: {
        add: "createInvoice",
        edit: "editInvoice",
        retrieveSingle: "getSingleInvoice",
        retrieve: "getInvoices",
        delete: "deleteInvoice",
    },
    personnel: {
        add: "createPersonnel",
        edit: "editPersonnelInfo",
        retrieve: "getPersonnels",
        retrieveSingle: "getSinglePersonnel",
        delete: "deletePersonnel",
    },
    notification: {
        sendSMS: "sendSmsNotification",
        sendEmail: "sendEmailNotification",
        sendPush: "sendPushNotification"
    }
}