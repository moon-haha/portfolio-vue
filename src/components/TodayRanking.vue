<template>
  <section>
    <div class="container mt-3">
      <h3 class="float-md-start ml-5 mb-0">Today 랭킹</h3>
      <div class="nav nav-masthead justify-content-center float-md-end">
        <router-link to="/ranking/count">
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
          <!-- 카테고리 슬라이드 -->
          <SwiperSlide
            class="SwiperSlide"
            v-for="(a, i) in categoryItems"
            @click="
              $store.commit('setCurrentCategory', a),
                $store.dispatch('getCatCount', a)
            "
            :key="i"
          >
            {{ a }}
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <GridSwiper
          :loading="loading"
          :dataset="$store.state.countDataset.data"
          class="mt-3"
        />
      </section>
      <hr />
    </div>
    <br />
  </section>
</template>
<script>
import GridSwiper from "../components/GridSwiper.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
const categoryItems = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    GridSwiper,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      categoryItems: categoryItems,
      loading: true,
    };
  },
  created() {
    this.$store
      .dispatch("getCountDataset")
      .then(() => (this.loading = false))
      .catch((e) => {
        e;
      });
  },
};
</script>
<style scoped>
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
