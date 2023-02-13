<template>
  <div>
    MyPageVue
    <h1>Hello {{ $store.state.auth.Id }}</h1>
    <h2>{{ $store.state.auth.ObjectId }}</h2>
    <div>
      <h1 v-if="$store.state.auth.Tier == 0">
        {{ $store.state.auth.Tier }} 일반유저입니다.
        <h1>- 댓글 관리 가능</h1>
      </h1>
      <h1 v-else-if="$store.state.auth.Tier == 1">
        {{ $store.state.auth.Tier }} 셀러유저입니다..
        <h1>- 댓글 관리 가능</h1>
        <h1>- 게시글 관리 가능</h1>
      </h1>
      <h1 v-else-if="$store.state.auth.Tier == 2">
        {{ $store.state.auth.Tier }} 관리자입니다..
        <h1>- 모든 댓글 관리 가능</h1>
        <h1>- 모든 게시글 관리 가능</h1>
      </h1>
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
              this.$store
                .dispatch('changeAuthTier', {
                  TierValue: 0,
                })
                .then((data) => {
                  $router.push('mypage');
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
              this.$store
                .dispatch('changeAuthTier', {
                  TierValue: 1,
                })
                .then((data) => {
                  $router.push('mypage');
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
              this.$store
                .dispatch('changeAuthTier', {
                  TierValue: 2,
                })
                .then((data) => {
                  $router.push('mypage');
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
  created() {
    this.$store.dispatch("checkAuth");
  },
};
</script>
<style lang=""></style>
