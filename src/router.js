import { createWebHistory, createRouter } from "vue-router";
import RankingPage from "./pages/RankingPage.vue";
import MainPage from "./pages/MainPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import LikeProductPage from "./pages/LikeProductPage.vue";
import MyPageVue from "./pages/MyPageVue.vue";
import CartPage from "./pages/CartPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import DetailPage from "./pages/DetailPage.vue";
import ResultPage from "./pages/ResultPage.vue";
import WritePage from "./pages/WritePage.vue";
import store from "./store";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/ranking",
    component: RankingPage,
  },
  {
    path: "/ranking/:sort",
    component: RankingPage,
  },
  {
    path: "/ranking/:sort/:category",
    component: RankingPage,
  },
  {
    path: "/likeProduct",
    component: LikeProductPage,
  },
  {
    path: "/mypage",
    component: MyPageVue,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.AuthStatus === 1) {
        //console.log(store.state.AuthStatus);
        next();
      } else if (store.state.auth.AuthStatus === 0) {
        //console.log(store.state.AuthStatus);
        next("/login");
      }
    },
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/products/:id",
    component: DetailPage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/result",
    component: ResultPage,
  },
  {
    path: "/write",
    component: WritePage,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.Tier == 0) {
        console.log("글작성불가능");
        next("/");
      } else if (store.state.auth.Tier >= 1) {
        console.log("글작성불가능");
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
