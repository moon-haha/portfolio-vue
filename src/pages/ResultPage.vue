<template>
  <div class="container">
    <h4>검색결과 : {{ $route.query.id }}</h4>
    <div class="row">
      <div
        v-for="(a, i) in $store.state.products.SearchValue.data"
        :key="i"
        class="col-6"
      >
        <div class="card w-100">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RankCards",
  data() {
    return {
      RankingDropdownState: 1,
      dataset: [],
    };
  },
  created() {
    this.$store.dispatch("getSearchResult", this.$route.query.id);
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
