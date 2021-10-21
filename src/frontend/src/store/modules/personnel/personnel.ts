import { AppActionEvents } from "@/events/app.events";
import IPC from "@/utils/ipc-renderer.util";

const state = {
    personnels: <any>[]
}
const mutations = {
    setPersonnel(payload: any) {
        return state.personnels.push(payload);
    },
    setPersonnels(payload: any) {
        return state.personnels = [...payload];
    },
    deletePersonnel(payload: any) {
        return state.personnels.filter((personnel: any) => personnel.id !== payload.id);
    }
}
const getters = {
    getPersonnels(state: any) {
        return state.personnels;
    }
}
const actions = {
    editPersonnel(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.edit, payload).then((result) => {
            ctx.commit('setPersonnel', result);
        })
    },
    addPersonnel(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.add, payload).then((result) => {
            ctx.commit('setPersonnel', result);
        })
    },
    getPersonnels(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.retrieve, payload).then((result) => {
            ctx.commit('setPersonnels', result);
        })
    },
    deletePersonnel(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.delete, payload).then((result) => {
            ctx.commit('setPersonnel', result);
        })
    },
}

export default { state, getters, mutations, actions };