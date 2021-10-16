import { createStore } from "vuex";

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
      return state.dropdownItems = {...state.dropdownItems,...payload};
    },

    setupPreferences(state, payload) {
      return state.preferences = { ...state.preferences, ...payload };
    }
  },
  actions: {
    updatePreferences(ctx, payload) {
      ctx.commit('setupPreferences', payload)
    },
    upDropdownActions(ctx, payload) {
      ctx.commit('setDropdownActions', payload);
    }
  },
  modules: {},
});
