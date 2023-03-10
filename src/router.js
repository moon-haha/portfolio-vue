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
import EditPage from "./pages/EditPage.vue";
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
        next();
      } else if (store.state.auth.AuthStatus === 0) {
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
    path: "/products/edit/:id",
    component: EditPage,
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
  scrollBehavior() {
    // 항상 맨 위로 스크롤
    return { top: 0 };
  },
});

export default router;
