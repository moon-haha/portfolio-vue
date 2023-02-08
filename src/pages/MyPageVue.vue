<template>
  <div>
    MyPageVue
    <h1>Hello {{ $store.state.Id }}</h1>
    <h2>{{ $store.state.ObjectId }}</h2>
    <div>
      <h1 v-if="$store.state.Tier == 0">
        {{ $store.state.Tier }} 일반유저입니다.
      </h1>
      <h1 v-else-if="$store.state.Tier == 1">
        {{ $store.state.Tier }} 셀러유저입니다..
      </h1>
      <h1 v-else-if="$store.state.Tier == 2">
        {{ $store.state.Tier }} 관리자입니다..
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
        <!-- state로 TierValue 보내기 -->
        <li>
          <a
            class="dropdown-item"
            @click="
              (TierValue = 0),
                this.$store
                  .dispatch('changeAuthTier', { TierValue: this.TierValue })
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
              (TierValue = 1),
                this.$store
                  .dispatch('changeAuthTier', { TierValue: this.TierValue })
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
              (TierValue = 2),
                this.$store
                  .dispatch('changeAuthTier', { TierValue: this.TierValue })
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
  mounted() {
    this.$store.dispatch("getAuthData");
  },
};
</script>
<style lang=""></style>
