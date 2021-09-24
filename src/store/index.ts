import { Item } from "@/Shared";
import Vue from "vue";
import Vuex from "vuex";
import { GET_ITEMS } from "./Mutations";

Vue.use(Vuex);
const state = {
  headers: [
    { text: "Item Id", value: "id" },
    { text: "Item", value: "name" },
    { text: "Price", value: "price" },
    { text: "Availability", value: "InStock" },
    { text: "Remarks", value: "remarks" },
  ],
  // Items: [
  //   {
  //     id: 1000,
  //     name: "Apples",
  //     price: "100",
  //     InStock: "In Stock",
  //     remarks: "",
  //   },
  //   {
  //     id: 1001,
  //     name: "Ice cream Feast",
  //     price: "98.44",
  //     InStock: "Not In Stock",
  //     remarks: "",
  //   },
  //   {
  //     id: 1002,
  //     name: "Candy",
  //     price: "5",
  //     InStock: "In Stock",
  //     remarks: "",
  //   },
  // ],
};
const mutations = {
  [GET_ITEMS](state: any, Items: any) {
    state.Items = Items;
  },
};
const actions = {
  GetItemsAction({ commit }) {
    const Items = Item.getItems();
    console.error(Items);
    commit(GET_ITEMS, Items);
  },
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
