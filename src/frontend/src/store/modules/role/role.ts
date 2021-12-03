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
    Roles: <any>[]
};
const mutations = {
    setRole(state: any, payload: any) {
        return state.Roles.push(payload);
    },
    setRoles(state: any, payload: any) {
        return state.Roles = [...payload];
    },
    deleteRole(state: any, payload: any) {
        return state.Roles.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addRole(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.role.add, payload).then((data) => {
            ctx.commit('setRole', data);
        });
    },
    getRoles(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.role.retrieve).then((data) => {
            ctx.commit('setRoles', data);
        });
    },
    editRole(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.role.edit, payload).then((data) => {
            ctx.commit('setRole', data);
        });
    },
    deleteRole(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.role.delete, payload).then((data) => {
            ctx.commit('deleteRole', data);
        });
    },
    getSingleRole(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.role.retrieveSingle, payload).then((data) => {
            ctx.commit('setRole', data);
        });
    }
};
const getters = {
    getRoles(state: any) {
        return state.Roles;
    }
};

export default { state, getters, mutations, actions };