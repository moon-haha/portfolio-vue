<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-8">
        <EventHeader />
        <LogoHeader />
        <StickeyHeader />
        <router-view></router-view>

        <div class="container">
          <footer>
            <div class="px-4 py-5 my-5 text-center">
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                  입점문의
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  셀러어드민
                </button>
              </div>
            </div>
            <a
              href="/"
              class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                <use link:href="#bootstrap"></use>
              </svg>
            </a>
          </footer>
        </div>
        <FooterBar />
      </div>

      <FixedNavbar />
    </div>
  </div>
  <!-- modal -->
</template>

<script>
import EventHeader from "./components/EventHeader.vue";
import StickeyHeader from "./components/StickeyHeader.vue";
import LogoHeader from "./components/LogoHeader.vue";
import FooterBar from "./components/FooterBar.vue";
import FixedNavbar from "./components/FixedNavbar.vue";

export default {
  name: "App",
  components: {
    EventHeader: EventHeader,
    StickeyHeader: StickeyHeader,
    LogoHeader: LogoHeader,
    FooterBar: FooterBar,
    FixedNavbar: FixedNavbar,
  },
  data() {
    return {};
  },
  methods: {},
  beforeCreate() {
    this.$store.dispatch("checkAuth");
  },
};
</script>

<style>
.router-link-exact-active {
  color: rgb(201, 151, 77) !important;
  text-decoration: rgb(201, 151, 77);
  background: transparent !important;
  border-bottom: 2px solid rgb(201, 151, 77) !important;
  border-radius: 0px !important;
}
</style>
