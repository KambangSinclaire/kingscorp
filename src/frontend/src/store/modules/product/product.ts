import { AppActionEvents } from "@/events/app.events";
import IPC from "@/utils/ipc-renderer.util";

const state = {
    products: <any>[]
};
const mutations = {
    setProduct(state: any, payload: any) {
        return state.products.push(payload);
    },
    setProducts(state: any, payload: any) {
        return state.products = [...payload];
    },
    deleteProduct(state: any, payload: any) {
        return state.products.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addProduct(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.product.add, payload).then((data) => {
            ctx.commit('setProduct', data);
        });
    },
    getProducts(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.product.retrieve).then((data) => {
            ctx.commit('setProducts', data);
        });
    },
    editProduct(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.product.edit, payload).then((data) => {
            ctx.commit('setProduct', data);
        });
    },
    deleteProduct(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.product.delete, payload).then((data) => {
            ctx.commit('deleteProduct', data);
        });
    },
    getSingleProduct(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.product.retrieveSingle, payload).then((data) => {
            ctx.commit('setProduct', data);
        });
    }
};
const getters = {
    getProducts(state: any) {
        return state.products;
    }
};

export default { state, getters, mutations, actions };