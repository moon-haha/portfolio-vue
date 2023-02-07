<template>
  <div class="container">
    <div v-if="$store.state.AuthStatus === 0">
      <h1 class="h3 mb-3 fw-normal">로그인 페이지</h1>
      <form>
        <div class="form-floating">
          <input
            class="form-control"
            id="id"
            placeholder="test12345"
            :value="loginId"
            @input="updateLoginInputId"
          />
          <label for="floatingInput">Id</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="pw"
            placeholder="Password"
            autocomplete=""
            :value="loginPw"
            @input="updateLoginInputPw"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </form>
      <div class="mt-3">
        <button
          type="submit"
          class="btn btn-lg btn-primary"
          @click="this.$store.dispatch('authLogin', this.login)"
        >
          로그인
        </button>

        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-lg btn-danger btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          회원가입 하기
        </button>
      </div>

      <div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <form>
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    회원가입
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h1 class="h3 mb-3 fw-normal">회원가입 페이지</h1>

                  <div class="form-floating">
                    <input
                      class="form-control"
                      id="registerId"
                      placeholder="test12345"
                    />
                    <label for="floatingInput">Id</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="registerPw"
                      placeholder="Password"
                      autocomplete=""
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    닫기
                  </button>
                  <button type="button" class="btn btn-primary">
                    회원가입 하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="$store.state.AuthStatus === 1">
      <button
        class="w-100 btn btn-lg btn-primary"
        @click="this.$store.dispatch('authLogout')"
      >
        로그아웃
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        Id: "",
        Pw: "",
      },
    };
  },
  methods: {
    updateLoginInputId(e) {
      this.login.Id = e.target.value;
    },
    updateLoginInputPw(e) {
      this.login.Pw = e.target.value;
    },
  },
};
//1. 로그인 버튼을 누르면 데이터를 서버에 전달하며 POST 요청
//2. 로그인 버튼을 누르면 데이터를 서버에 전달하며 POST 요청
//3. 로그인 버튼을 누르면 데이터를 서버에 전달하며 POST 요청
</script>
<style></style>
