<template lang="">
  <section class="container mt-3">
    <h3 class="float-md-start ml-5 mb-0">MD's PICK</h3>
    <div class="nav nav-masthead justify-content-center float-end">
      <router-link to="/ranking">
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
    <div class="mt-3"></div>

    <div
      v-for="(a, i) in $store.state.products.mdDataset.data"
      class="card mt-3 mb-3"
      :key="i"
      style="width: 100%"
    >
      <Transition name="Fade" v-if="show">
        <div>
          <div class="row g-0">
            <div class="col-md-4">
              <router-link
                :to="{ path: '/products/' + a.id }"
                class="text-decoration-none text-dark"
              >
                <img
                  :src="a.image"
                  class="img-fluid mx-auto d-block"
                  alt="..."
                  style="height: 8rem; object-fit: cover; margin: auto"
                />
              </router-link>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1>평점 : {{ a.rating.rate }}</h1>
                <h5 class="card-title">{{ a.title }},</h5>
                <p class="card-text">
                  {{ a.description }}
                </p>
                <p class="card-text">{{ a.price }}$</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  created() {
    this.$store.dispatch("getMD");
  },
};
</script>
<style></style>
