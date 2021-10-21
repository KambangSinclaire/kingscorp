import { createStore } from "vuex";
import product from "./modules/product/product";
import stock from "./modules/stock/stock";
import sale from "./modules/sale/sale";
import inventory from "./modules/inventory/inventory";
import invoice from "./modules/invoice/invoice";
import role from "./modules/role/role";
import group from "./modules/group/group";
import service from "./modules/services/service";
import credit from "./modules/credit/credit";
import personnel from "./modules/personnel/personnel";

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
    dropdownItems: <any>[],
  },
  getters: {
    getPreferences(state) {
      return state.preferences;
    },
    getDropDowns(state) {
      return state.dropdownItems;
    },
  },
  mutations: {
    setDropdownActions(state, payload) {
      return state.dropdownItems = { ...state.dropdownItems, ...payload };
    },

    setupPreferences(state, payload) {
      return state.preferences = { ...state.preferences, ...payload };
    },

  },
  actions: {
    updatePreferences(ctx, payload) {
      ctx.commit('setupPreferences', payload)
    },
    upDropdownActions(ctx, payload) {
      ctx.commit('setDropdownActions', payload);
    },
  },
  modules: { product, stock, sale, personnel, invoice, inventory, service, role, group, credit },
});
