<template>
  <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="로딩 중..." />
  <div v-else>
    <swiper
      :slidesPerView="2"
      :grid="{
        rows: '2',
        fill: 'column',
      }"
      :modules="modules"
      class="GridSwiper"
    >
      <SwiperSlide v-for="(a, i) in dataset" :key="i">
        <div class="card border">
          <router-link
            :to="{ path: '/products/' + a.id }"
            class="text-decoration-none text-dark"
          >
            <img
              :src="a.image"
              style="height: 18rem; width:18rem object-fit: cover"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                {{ a.category }}
              </p>
              <h6 class="card-title">{{ a.title }}</h6>
              <p class="card-text">{{ a.description }}</p>
              <p class="card-text">가격 : {{ a.price }} $</p>
              <p class="card-text">
                {{ a.rating.rate }} 구매수 : {{ a.rating.count }}
              </p>
            </div>
          </router-link>
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js componentss
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    dataset: Array,
    loading: Boolean,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    hidden() {
      this.show = true;
    },
  },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>
<style scope>
a {
  text-decoration: none;
}

.GridSwiper {
  height: 1000px;
}
.swiper-slide {
  height: calc((100% - 30px) / 2) !important;
}
.card-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.card-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
