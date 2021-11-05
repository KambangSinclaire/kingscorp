import { AppActionEvents } from "@/events/app.events";
import IPC from "@/utils/ipc-renderer.util";

const state = {
    Categories: <any>[]
};
const mutations = {
    setCategory(state: any, payload: any) {
        return state.Categories.push(payload);
    },
    setCategories(state: any, payload: any) {
        return state.Categories = [...payload];
    },
    deleteCategory(state: any, payload: any) {
        return state.Categories.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addCategory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.category.add, payload).then((data) => {
            ctx.commit('setCategory', data);
        });
    },
    getCategories(ctx: any,payload:any) {
        IPC.ipcRequestTrigger(AppActionEvents.category.retrieve,payload).then((data) => {
            ctx.commit('setCategories', data);
        });
    },
    editCategory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.category.edit, payload).then((data) => {
            ctx.commit('setCategory', data);
        });
    },
    deleteCategory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.category.delete, payload).then((data) => {
            ctx.commit('deleteCategory', data);
        });
    },
    getSingleCategory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.category.retrieveSingle, payload).then((data) => {
            ctx.commit('setCategory', data);
        });
    }
};
const getters = {
    getCategories(state: any) {
        return state.Categories;
    }
};

export default { state, getters, mutations, actions };