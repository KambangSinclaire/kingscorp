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
    credit: {
        add: "createCredit",
        edit: "editCreditInfo",
        retrieve: "getCredits",
        retrieveSingle: "getSingleCredit",
        delete: "deleteCredit",
    },
    inventory: {
        add: "createInventory",
        edit: "editInventoryInfo",
        retrieve: "getInventorys",
        retrieveSingle: "getSingleInventory",
        delete: "deleteInventory",
    },
    service: {
        add: "createService",
        edit: "editServiceInfo",
        retrieve: "getServices",
        retrieveSingle: "getSingleService",
        delete: "deleteService",
    },
    sale: {
        add: "createSale",
        edit: "editSaleInfo",
        retrieve: "getSales",
        retrieveSingle: "getSingleSale",
        delete: "deleteSale",
    },
    role: {
        add: "createRole",
        edit: "editRoleInfo",
        retrieve: "getRoles",
        retrieveSingle: "getSingleRole",
        delete: "deleteRole",
    },
    group: {
        add: "createGroup",
        edit: "editGroupInfo",
        retrieve: "getGroups",
        retrieveSingle: "getSingleGroup",
        delete: "deleteGroup",
    },
    notification: {
        sendSMS: "sendSmsNotification",
        sendEmail: "sendEmailNotification",
        sendPush: "sendPushNotification"
    }
}