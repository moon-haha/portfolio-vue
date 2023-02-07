<template>
  <section class="container mt-3">
    <h3 class="float-md-start ml-5 mb-0">신상 모아보기</h3>
    <div class="nav nav-masthead justify-content-center float-end">
      <router-link to="/ranking/recent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-right-square-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"
          />
        </svg>
      </router-link>
    </div>
    <div class="clearfix"></div>
    <section class="mt-3">
      <Swiper :slides-per-view="3" :space-between="6" role="tablist">
        <SwiperSlide
          class="SwiperSlide"
          v-for="(a, i) in categoryItems"
          :key="i"
          @click="
            $store.commit('setCatRecent', a), $store.dispatch('getCatRecent', a)
          "
        >
          {{ a }}
          >
        </SwiperSlide>
      </Swiper>
    </section>

    <GridSwiper :dataset="$store.state.recentDataset.data" class="mt-3" />
  </section>
</template>
<script>
// 2. id
import GridSwiper from "../components/GridSwiper.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

const categoryItems = ["electronics", "jewelery", "mens", "womens"];

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    GridSwiper: GridSwiper,
  },
  data() {
    return {
      categoryItems: categoryItems,
    };
  },
  created() {
    this.$store
      .dispatch("getRecents")
      .then(() => (this.loading = false))
      .catch((e) => {
        e;
      });
  },
};
</script>
<style scoped>
/* a {
  text-decoration: none;
  color: white;
} */

.SwiperSlide {
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: white;
  border: 0;
  border-radius: 18px;
  background: #c9974d;
  font-weight: 500;
  appearance: none;
  cursor: pointer;
}
</style>
