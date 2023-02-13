<template>
  <div class="container">
    <div class="mt-3 mb-3 d-block text-center">
      <h3 class="mt-3 mb-3">카테고리 / 검색</h3>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            /></svg
        ></span>
        <input
          class="form-control"
          placeholder="하이버는 모든 상품 무료배송!"
          @keyup.enter="searchEvent($event.target.value)"
        />
      </div>
    </div>
    <div class="list-group">
      <h4>카테고리</h4>
      <router-link
        to="/result?id=Electronics"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Electronics</h5>
        </div>
      </router-link>
      <router-link
        to="/result?id=Jewelery"
        class="list-group-item list-group-item-action"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Jewelery</h5>
        </div>
      </router-link>
      <router-link
        to="/result?id=Men's Clothing"
        class="list-group-item list-group-item-action"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Men's Clothing</h5>
        </div>
      </router-link>
      <router-link
        to="/result?id=Women's Clothing"
        class="list-group-item list-group-item-action"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Women's Clothing</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchPage",
  methods: {
    searchEvent(data) {
      this.$router.push({
        path: "result",
        query: { id: data },
      });
    },
  },
};
</script>
<style></style>
