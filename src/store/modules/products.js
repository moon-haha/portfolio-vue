import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_SERVER;

const products = {
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
      if (this.state.products.currentCategory) {
        axios
          .get(
            `api/products/sort/${this.state.products.currentSort}/category/${this.state.products.currentCategory}`
          )
          .then((data) => {
            if (this.state.products.currentSort == "recent") {
              //id 내림차순 정렬
              data.data.sort(function (a, b) {
                return b.id - a.id;
              });
              context.commit("setRankingDataset", data);
            } else {
              context.commit("setRankingDataset", data);
            }
          });
      } else if (this.state.products.currentCategory == "") {
        axios
          .get(`api/products/sort/${this.state.products.currentSort}/`)
          .then((data) => {
            if (this.state.products.currentSort == "recent") {
              //id 내림차순 정렬
              data.data.sort(function (a, b) {
                return b.id - a.id;
              });
              context.commit("setRankingDataset", data);
            } else {
              context.commit("setRankingDataset", data);
            }
          });
      }
    },
    rankingDatasetInit(context, state) {
      axios.get(`api/products/sort/${state}`).then((data) => {
        context.commit("setRankingDatasetInit", data);
      });
    },
    getDetailData(context, state) {
      axios
        .get(`api/products/${state.id}`)
        .then((data) => {
          context.commit("setDetailData", data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getSearchResult(context, state) {
      axios.get(`api/products/search?value=${state}`).then((data) => {
        context.commit("setSearchValue", data);
      });
    },
    deleteProducts(context, state) {
      axios
        .delete(`api/products/${state}`)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
export default products;
