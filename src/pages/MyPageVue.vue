<template>
  <div>
    MyPageVue
    <h1>Hello {{ $store.state.auth.Id }}</h1>
    <h2>{{ $store.state.auth.ObjectId }}</h2>
    <div>
      <div v-if="$store.state.auth.Tier == 0">
        {{ $store.state.auth.Tier }} 일반유저입니다.
        <h4>내가 작성한 댓글</h4>
        <div
          class="card"
          v-for="(a, i) in $store.state.auth.commentsData"
          :key="i"
        >
          <p>원문 글 : {{ a.parentsId }}</p>
          <p>댓글 : {{ a.commentBody }}</p>
          <p>댓글 id : {{ a._id }}</p>
          <button
            type="button"
            @click="deleteCommentMethod(a._id)"
            class="btn btn-danger"
          >
            댓글삭제
          </button>
        </div>
      </div>
      <div v-else-if="$store.state.auth.Tier == 1">
        {{ $store.state.auth.Tier }} 셀러유저입니다..
        <h4>내가 작성한 댓글</h4>
        <div
          class="card"
          v-for="(a, i) in $store.state.auth.commentsData"
          :key="i"
        >
          <p>원문 글 : {{ a.parentsId }}</p>
          <p>댓글 : {{ a.commentBody }}</p>
          <p>댓글 id : {{ a._id }}</p>
          <button
            type="button"
            @click="deleteCommentMethod(a._id)"
            class="btn btn-danger"
          >
            댓글삭제
          </button>
        </div>
        <h4>내가 작성한 글</h4>
        <div
          class="card"
          v-for="(a, i) in $store.state.auth.productsData"
          :key="i"
        >
          글 id : {{ a.id }} 글 제목 : {{ a.title }} 글 설명 :
          {{ a.description }} 가격 : {{ a.price }}
          <div>
            <button
              type="button"
              class="btn btn-danger"
              @click="$store.dispatch('deleteProducts', a.id)"
            >
              글삭제
            </button>
            <router-link
              :to="{
                path: '/products/edit/' + a.id,
              }"
              class="text-decoration-none text-dark"
            >
              <button type="button" class="btn btn-success">수정하기</button>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else-if="$store.state.auth.Tier == 2">
        {{ $store.state.auth.Tier }} 관리자입니다..
        <h4>모든 댓글</h4>
        <div
          class="card"
          v-for="(a, i) in $store.state.auth.commentsData"
          :key="i"
        >
          <p>원문 글 : {{ a.parentsId }}</p>
          <p>댓글 : {{ a.commentBody }}</p>
          <button
            type="button"
            @click="deleteCommentMethod(a._id)"
            class="btn btn-danger"
          >
            댓글삭제
          </button>
        </div>
        <h4>모든 글</h4>
        <div
          class="card"
          v-for="(a, i) in $store.state.auth.productsData"
          :key="i"
        >
          글 id : {{ a.id }} 글 제목 : {{ a.title }} 글 설명 :
          {{ a.description }} 가격 : {{ a.price }}
          <div>
            <button
              type="button"
              class="btn btn-danger"
              @click="$store.dispatch('deleteProducts', a.id)"
            >
              글삭제
            </button>
            <router-link
              :to="{
                path: '/products/edit/' + a.id,
              }"
              class="text-decoration-none text-dark"
            >
              <button type="button" class="btn btn-success">수정하기</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        회원등급 변경
      </button>
      <ul class="dropdown-menu mt-3">
        <li>
          <a
            class="dropdown-item"
            @click="
              this.$store.dispatch('changeAuthTier', {
                TierValue: 0,
              })
            "
            href="#"
            >User</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            @click="
              this.$store.dispatch('changeAuthTier', {
                TierValue: 1,
              })
            "
            href="#"
            >Seller</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            @click="
              this.$store.dispatch('changeAuthTier', {
                TierValue: 2,
              })
            "
            href="#"
            >Admin</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TierValue: 0,
    };
  },
  mounted() {
    this.$store.dispatch("getAuthData");
  },
  methods: {
    deleteCommentMethod(data) {
      this.$store.dispatch("deleteComment", data).then(() => {});
    },
  },
};
</script>
<style></style>
