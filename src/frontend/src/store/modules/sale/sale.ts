/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { AppActionEvents } from "@/events/app.events";
import IPC from "@/utils/ipc-renderer.util";

const state = {
    Sales: <any>[]
};
const mutations = {
    setSale(state: any, payload: any) {
        return state.Sales.push(payload);
    },
    setSales(state: any, payload: any) {
        return state.Sales = [...payload];
    },
    deleteSale(state: any, payload: any) {
        return state.Sales.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addSale(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.sale.add, payload).then((data) => {
            ctx.commit('setSale', data);
        });
    },
    getSales(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.sale.retrieve).then((data) => {
            ctx.commit('setSales', data);
        });
    },
    editSale(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.sale.edit, payload).then((data) => {
            ctx.commit('setSale', data);
        });
    },
    deleteSale(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.sale.delete, payload).then((data) => {
            ctx.commit('deleteSale', data);
        });
    },
    getSingleSale(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.sale.retrieveSingle, payload).then((data) => {
            ctx.commit('setSale', data);
        });
    }
};
const getters = {
    getSales(state: any) {
        return state.Sales;
    }
};

export default { state, getters, mutations, actions };