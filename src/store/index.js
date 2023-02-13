import { createStore } from "vuex";
import axios from "axios";
import auth from "./modules/auth";
import products from "./modules/products";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_SERVER;

const store = createStore({
  modules: {
    auth,
    products,
  },
});

export default store;
