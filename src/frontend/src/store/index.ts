import { createStore } from "vuex";
import IPC from "@/utils/ipc-renderer.util";
import { AppActionEvents } from "@/events/app.events";

export default createStore({
  state: {
    preferences: {
      Stock: false,
      Products: true,
      Notifications: false,
      Sales: false,
      inventory: false,
      credits: false,
      invoices: false
    },
    dropdownItems: [],
    // REFERENCE FOR PRODUCTS IN STORE
    products: <any>[],
    // REFERENCE FOR PERSONNELS IN STORE
    personnels: []

  },
  getters: {
    getPreferences(state) {
      return state.preferences;
    },
    getDropDowns(state) {
      return state.dropdownItems;
    },

    // getters for products
    getProducts(state) {
      return state.products;
    }
  },
  mutations: {
    setDropdownActions(state, payload) {
      return state.dropdownItems = { ...state.dropdownItems, ...payload };
    },

    setupPreferences(state, payload) {
      return state.preferences = { ...state.preferences, ...payload };
    },
    setProduct(state, payload) {
      return state.products.push(payload);
    },
    setProducts(state, payload) {
      return state.products = [...payload];
    },
    deleteProduct(state, payload) {
      return state.products.filter((data: any) => data.id !== payload.id);
    },
  },
  actions: {
    updatePreferences(ctx, payload) {
      ctx.commit('setupPreferences', payload)
    },
    upDropdownActions(ctx, payload) {
      ctx.commit('setDropdownActions', payload);
    },
    addProduct(ctx, payload) {
      IPC.ipcRequestTrigger(AppActionEvents.product.add, payload).then((data) => {
        ctx.commit('setProduct', data);
      });
    },
    getProducts(ctx) {
      IPC.ipcRequestTrigger(AppActionEvents.product.retrieve).then((data) => {
        ctx.commit('setProducts', data);
      });
    },
    editProduct(ctx,payload) {
      IPC.ipcRequestTrigger(AppActionEvents.product.edit,payload).then((data) => {
        ctx.commit('setProduct', data);
      });
    },
    deleteProduct(ctx,payload) {
      IPC.ipcRequestTrigger(AppActionEvents.product.delete,payload).then((data) => {
        ctx.commit('deleteProduct', data);
      });
    },
    getSingleProduct(ctx,payload) {
      IPC.ipcRequestTrigger(AppActionEvents.product.retrieveSingle,payload).then((data) => {
        ctx.commit('setProduct', data);
      });
    }
  },
  modules: {},
});
