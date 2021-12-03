/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

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
import category from "./modules/category/category";

export default createStore({
  state: {
    isLoggedIn: false,
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
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
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
  modules: {
    product,
    stock,
    sale,
    personnel,
    invoice,
    inventory,
    service,
    role,
    group,
    credit,
    category
  },
});
