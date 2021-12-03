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
    Credits: <any>[]
};
const mutations = {
    setCredit(state: any, payload: any) {
        return state.Credits.push(payload);
    },
    setCredits(state: any, payload: any) {
        return state.Credits = [...payload];
    },
    deleteCredit(state: any, payload: any) {
        return state.Credits.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addCredit(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.credit.add, payload).then((data) => {
            ctx.commit('setCredit', data);
        });
    },
    getCredits(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.credit.retrieve).then((data) => {
            ctx.commit('setCredits', data);
        });
    },
    editCredit(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.credit.edit, payload).then((data) => {
            ctx.commit('setCredit', data);
        });
    },
    deleteCredit(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.credit.delete, payload).then((data) => {
            ctx.commit('deleteCredit', data);
        });
    },
    getSingleCredit(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.credit.retrieveSingle, payload).then((data) => {
            ctx.commit('setCredit', data);
        });
    }
};
const getters = {
    getCredits(state: any) {
        return state.Credits;
    }
};

export default { state, getters, mutations, actions };