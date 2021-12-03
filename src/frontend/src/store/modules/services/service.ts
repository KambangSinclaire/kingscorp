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
    Services: <any>[]
};
const mutations = {
    setService(state: any, payload: any) {
        return state.Services.push(payload);
    },
    setServices(state: any, payload: any) {
        return state.Services = [...payload];
    },
    deleteService(state: any, payload: any) {
        return state.Services.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addService(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.service.add, payload).then((data) => {
            ctx.commit('setService', data);
        });
    },
    getServices(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.service.retrieve).then((data) => {
            ctx.commit('setServices', data);
        });
    },
    editService(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.service.edit, payload).then((data) => {
            ctx.commit('setService', data);
        });
    },
    deleteService(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.service.delete, payload).then((data) => {
            ctx.commit('deleteService', data);
        });
    },
    getSingleService(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.service.retrieveSingle, payload).then((data) => {
            ctx.commit('setService', data);
        });
    }
};
const getters = {
    getServices(state: any) {
        return state.Services;
    }
};

export default { state, getters, mutations, actions };