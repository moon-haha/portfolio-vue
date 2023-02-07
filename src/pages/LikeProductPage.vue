<template>
  <div class="container">
    <h3>찜한 상품</h3>
    <table class="table">
      <thead>
        <tr scope="row">
          <th scope="col">image</th>
          <th scope="col">번호</th>
          <th scope="col">상품명</th>
          <th scope="col">가격</th>
          <th scope="col">삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in likeList" :key="i">
          <td><img :src="a.image" style="width: 4rem" /></td>
          <td>
            <p>{{ a.id }}</p>
          </td>
          <td>
            <p>{{ a.title }}</p>
          </td>
          <td>
            <p>{{ a.price }}</p>
          </td>
          <td><h1 @click="deleteItem(i)">X</h1></td>
        </tr>
      </tbody>
    </table>
    <div class="float-end">
      <h4>{{ getTotalPrice }}원</h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      likeList: [],
    };
  },
  mounted() {
    this.likeList = JSON.parse(localStorage.getItem("likeList"));
  },
  methods: {
    deleteItem(i) {
      //클릭한 로컬스토리지의 아이템 배열을 삭제한다.
      this.likeList.splice(i, 1);
      localStorage.setItem("likeList", JSON.stringify(this.likeList));
      // localStorage.removeItem("likeList", i);
    },
  },
  computed: {
    getTotalPrice: function () {
      return this.likeList.reduce(function (prev, current) {
        return parseInt(prev) + parseInt(current.price);
      }, 0);
    },
  },
};
</script>
<style></style>
