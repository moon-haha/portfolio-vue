<template lang="">
  <section class="container mt-3">
    <h3 class="float-md-start ml-5 mb-0">당신을 위한 추천</h3>
    <div class="nav nav-masthead justify-content-center float-end">
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
    <div></div>

    <swiper
      :slidesPerView="2.5"
      :spaceBetween="6"
      :modules="modules"
      style="height: 600px"
      class="mt-5"
    >
      <swiper-slide
        v-for="(a, i) in $store.state.products.rateDataset.data"
        :key="i"
      >
        <Transition name="Fade" v-if="show">
          <div class="card border-0">
            <router-link
              :to="{ path: '/products/' + a.id }"
              class="text-decoration-none text-dark"
            >
              <img
                :src="a.image"
                style="
                  height: 12rem;
                  width: 12rem;
                  object-fit: cover;
                  margin: auto;
                "
                alt="..."
                class="rounded"
              />
            </router-link>

            <div class="card-body">
              <h6 class="card-title">{{ a.title }}</h6>
              <p class="card-text">
                {{ a.category }}
              </p>
              <p class="card-text">{{ a.description }}</p>
              <p class="card-text">가격 : {{ a.price }} $</p>
              <p class="card-text">
                평점 : {{ a.rating.rate }} 구매수 : {{ a.rating.count }}
              </p>
              <span
                v-if="!a.editor || a.editor === this.$store.state.auth.ObjectId"
              >
                <span v-if="this.$store.state.auth.Tier > 0">
                  <p>Editor : {{ a.editor }}</p>
                  <p>User : {{ $store.state.auth.ObjectId }}</p>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="
                      $store.dispatch('deleteProducts', a.id), (show = !show)
                    "
                  >
                    DELETE
                  </button>
                </span>
              </span>
            </div>
          </div>
        </Transition>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
// 3.count
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  created() {
    this.$store.dispatch("getRating");
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style></style>
