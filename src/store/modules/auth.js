import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_SERVER;

const auth = {
  state() {
    return {
      AuthStatus: 0,
      Id: "",
      ObjectId: "",
      Tier: 0,
    };
  },
  mutations: {
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
      if (data.data.id) {
        state.AuthStatus = 1;
      } else {
        state.AuthStatus = 0;
      }
    },
  },
  actions: {
    authLogin(context, state) {
      axios
        .post("api/auth/login", { id: state.Id, pw: state.Pw })
        .then((data) => {
          context.commit("setUserData", data);
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
        context.commit("setUserData", data);
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
        context.commit("setUserData", data);
      });
    },
  },
};
export default auth;
