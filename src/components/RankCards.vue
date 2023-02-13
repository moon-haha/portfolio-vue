<template>
  <div
    class="row row-cols-2 row-cols-md-2 g-4 mt-3"
    v-if="RankingDropdownState == 1"
  >
    <div v-for="(a, i) in dataset" :key="i" class="col-6">
      <Transition name="Fade" v-if="show">
        <div class="card h-100">
          <router-link
            :to="{ path: '/products/' + a.id }"
            class="text-decoration-none text-dark"
          >
            <img
              :src="a.image"
              class="card-img-top"
              style="height: 20rem; object-fit: cover"
              alt="..."
            />
          </router-link>

          <div class="card-body">
            <p class="card-text">{{ a.category }}</p>
            <h3 class="card-title">{{ a.title }}</h3>
            <p class="card-text">{{ a.description }}</p>
            <h3 class="card-text">{{ a.price }} $</h3>
            <p class="card-text">{{ a.rating.count }}</p>
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
    </div>
  </div>
  <div
    class="row row-cols-2 row-cols-md-2 g-4 mt-3"
    v-if="RankingDropdownState == 2"
  >
    <div v-for="(a, i) in dataset" :key="i" class="col-6">
      <router-link
        :to="{ path: '/products/' + a.id }"
        class="text-decoration-none text-dark"
      >
        <div class="card h-100">
          <img
            :src="a.image"
            class="card-img-top"
            style="height: 20rem; object-fit: cover"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">{{ a.category }}</p>
            <h3 class="card-title">{{ a.title }}</h3>
            <p class="card-text">{{ a.description }}</p>
            <h3 class="card-text">{{ a.price }} $</h3>
            <p class="card-text">{{ a.rating.count }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div></div>
  <div
    class="row row-cols-2 row-cols-md-2 g-4 mt-3"
    v-if="RankingDropdownState == 3"
  >
    <div v-for="(a, i) in dataset" :key="i" class="col-6">
      <router-link
        :to="{ path: '/products/' + a.id }"
        class="text-decoration-none text-dark"
      >
        <div class="card h-100">
          <img
            :src="a.image"
            class="card-img-top"
            style="height: 20rem; object-fit: cover"
            alt="..."
          />
          <div class="card-body">
            <p>{{ a.rating.rate }}</p>
            <p class="card-text">{{ a.category }}</p>
            <h3 class="card-title">{{ a.title }}</h3>
            <p class="card-text">{{ a.description }}</p>
            <h3 class="card-text">{{ a.price }} $</h3>
            <p class="card-text">{{ a.rating.count }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "RankCards",
  props: {
    RankingDropdownState: Number,
    dataset: Array,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style>
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
