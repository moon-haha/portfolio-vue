import { createStore } from "vuex";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_SERVER;

const store = createStore({
  state() {
    return {
      countDataset: [],
      recentDataset: [],
      rateDataset: [],
      mdDataset: [],
      currentCategory: "",
      currentSort: "count",
      rankingDataset: [],
      DetailData: [],
      SearchValue: [],
      AuthStatus: 0,
      Id: "",
      ObjectId: "",
      Tier: 0,
    };
  },
  mutations: {
    setCountDataset(state, data) {
      state.countDataset = data;
    },
    setRecents(state, data) {
      state.recentDataset = data;
    },
    setRating(state, data) {
      state.rateDataset = data;
    },
    setMD(state, data) {
      state.mdDataset = data;
      state.mdDataset.data.length = 2;
    },
    setCurrentCategory(state, data) {
      state.currentCategory = data;
    },
    setCatCount(state, data) {
      state.countDataset = data;
    },
    setCatRecent(state, data) {
      state.recentDataset = data;
    },
    setRankingDataset(state, data) {
      state.rankingDataset = data;
    },
    setRankingDatasetInit(state, data) {
      state.rankingDataset = data;
      state.currentSort = "count";
    },
    setCurrentSort(state, data) {
      state.currentSort = data;
    },
    setDetailData(state, data) {
      state.DetailData = data;
    },
    setSearchValue(state, data) {
      state.SearchValue = data;
    },
    setAuthLogin(state) {
      state.AuthStatus = 1;
    },
    setAuthLogout(state) {
      state.AuthStatus = 0;
      state.Tier = 0;
    },
    setTierData(state, data) {
      state.Tier = data.data.user.tier;
    },
    setUserData(state, data) {
      state.Id = data.data.id;
      state.ObjectId = data.data._id;
      state.Tier = data.data.tier;
    },
  },
  actions: {
    getCountDataset(context) {
      axios.get("api/products/sort/count").then((data) => {
        context.commit("setCountDataset", data);
      });
    },
    getRecents(context) {
      axios.get("api/products/sort/recents").then((data) => {
        context.commit("setRecents", data);
      });
    },
    getRating(context) {
      axios.get("api/products/sort/rating").then((data) => {
        context.commit("setRating", data);
      });
    },
    getMD(context) {
      axios.get("api/products/sort/rating").then((data) => {
        context.commit("setMD", data);
      });
    },
    getCatCount(context, state) {
      axios.get(`api/products/sort/count/category/${state}`).then((data) => {
        context.commit("setCatCount", data);
      });
    },
    getCatRecent(context, state) {
      axios.get(`api/products/sort/recent/category/${state}`).then((data) => {
        context.commit("setCatRecent", data);
      });
    },
    rankingDataset(context) {
      axios
        .get(
          `api/products/sort/${this.state.currentSort}/category/${this.state.currentCategory}`
        )
        .then((data) => {
          context.commit("setRankingDataset", data);
        });
    },
    rankingDatasetInit(context, state) {
      axios.get(`api/products/sort/${state}`).then((data) => {
        context.commit("setRankingDatasetInit", data);
      });
    },
    getDetailData(context, state) {
      axios.get(`api/products/${state.id}`).then((data) => {
        context.commit("setDetailData", data);
      });
    },
    getSearchResult(context, state) {
      axios.get(`api/products/search?value=${state}`).then((data) => {
        context.commit("setSearchValue", data);
      });
    },
    authLogin(context, state) {
      axios
        .post("api/auth/login", { id: state.Id, pw: state.Pw })
        .then((data) => {
          context.commit("setAuthData", data);
          context.commit("setAuthLogin", data);
        });
    },
    authLogout(context) {
      axios.post("api/auth/logout").then((data) => {
        context.commit("setAuthLogout", data);
      });
    },
    getAuthData(context) {
      axios.get("api/auth/mypage").then((data) => {
        context.commit("setAuthData", data);
      });
    },
    changeAuthTier(context, state) {
      //state로 TierValue 가져오기
      axios
        .post("api/auth/tier", { TierValue: state.TierValue })
        .then((data) => {
          context.commit("setTierData", data);
        });
    },
    checkAuth(context) {
      axios.get("api/auth/check").then((data) => {
        //AuthStatus 1, 0 비교
        context.commit("setUserData", data);
        context.commit("setAuthLogin", 1);
        console.log(data);
      });
    },
  },
});

export default store;
