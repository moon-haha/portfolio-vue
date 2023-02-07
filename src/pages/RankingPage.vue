<template>
  <div class="container">
    <section class="mt-3">
      <Swiper :slides-per-view="3" :space-between="6" role="tablist">
        <!-- 카테고리 슬라이드 -->
        <SwiperSlide
          class="SwiperSlide"
          v-for="(a, i) in categoryItems"
          @click="
            $store.commit('setCurrentCategory', a),
              $store.dispatch('rankingDataset', a)
          "
          :key="i"
        >
          {{ a }}
        </SwiperSlide>
      </Swiper>
    </section>
    <div class="dropdown">
      <button
        class="mt-3 float-end btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span v-if="RankingDropdownState == 1">판매순</span>
        <span v-if="RankingDropdownState == 2">최신순</span>
        <span v-if="RankingDropdownState == 3">평점 높은 순</span>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a
            class="dropdown-item"
            @click="
              (RankingDropdownState = 1),
                $store.commit('setCurrentSort', 'count');
              $store.dispatch('rankingDataset');
            "
            href="#"
          >
            판매순
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            @click="
              (RankingDropdownState = 2),
                $store.commit('setCurrentSort', 'recent');
              $store.dispatch('rankingDataset');
            "
            href="#"
            >최신순</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            @click="
              (RankingDropdownState = 3),
                $store.commit('setCurrentSort', 'rating');
              $store.dispatch('rankingDataset');
            "
            href="#"
            >평점 높은 순</a
          >
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <RankCards
      :dataset="this.$store.state.rankingDataset.data"
      :RankingDropdownState="RankingDropdownState"
    />
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

const categoryItems = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
import "swiper/css";

export default {
  components: {
    RankCards: RankCards,
    Swiper,
    SwiperSlide,
  },
  props: {},
  data() {
    return {
      categoryItems: categoryItems,
      RankingDropdownState: 1,
    };
  },
  method: {},
  created() {
    this.$store
      .dispatch("rankingDatasetInit", "count")
      .then(() => (this.loading = false))
      .catch((e) => {
        e;
      });
  },
};
import RankCards from "../components/RankCards.vue";
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
