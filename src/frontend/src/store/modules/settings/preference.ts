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
    preferences: <any>[]
};
const mutations = {
    setPreference(state: any, payload: any) {
        return state.preferences.push(payload);
    },
    setPreferences(state: any, payload: any) {
        return state.preferences = [...payload];
    },
    deletePreference(state: any, payload: any) {
        return state.preferences.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addPreference(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.add, payload).then((data) => {
            ctx.commit('setPreference', data);
        });
    },
    getPreferences(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.retrieve).then((data) => {
            ctx.commit('setPreferences', data);
        });
    },
    editPreference(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.edit, payload).then((data) => {
            ctx.commit('setPreference', data);
        });
    },
    deletePreference(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.delete, payload).then((data) => {
            ctx.commit('deletePreference', data);
        });
    },
    getSinglePreference(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.retrieveSingle, payload).then((data) => {
            ctx.commit('setPreference', data);
        });
    }
};
const getters = {
    getPreferences(state: any) {
        return state.preferences;
    }
};

export default { state, getters, mutations, actions };