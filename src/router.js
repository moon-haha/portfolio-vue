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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
