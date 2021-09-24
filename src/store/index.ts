import { Add_Items, Delete_Items, Update_Items } from "./mutations";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  headers: [
    { text: "Item Id", value: "id" },
    { text: "Item", value: "name" },
    { text: "Price", value: "price" },
    { text: "Availability", value: "InStock" },
    { text: "Remarks", value: "remarks" },
  ],
  Items: [
    {
      id: 1000,
      name: "Apples",
      price: "100",
      InStock: "In Stock",
      remarks: "",
    },
    {
      id: 1001,
      name: "Ice cream Feast",
      price: "98.44",
      InStock: "Not In Stock",
      remarks: "",
    },
    {
      id: 1002,
      name: "Candy",
      price: "5",
      InStock: "In Stock",
      remarks: "",
    },
  ],
};
const mutations = {};
const actions = {
  [Add_Items](state, Item) {
    state.Item.push(Item);
  },
  [Update_Items](statet, item) {
    
  },
  [Delete_Items](state:any, Item:any) {
    state.Items = [...state.Item.filter(item:any=> item.id !===Items.id)]
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
