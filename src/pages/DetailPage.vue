<template>
  <div v-if="$store.state.products.DetailData.data">
    <div class="container">
      <Swiper :pagination="true" :modules="modules" class="mySwiper">
        <SwiperSlide>
          <img
            :src="$store.state.products.DetailData.data.productsData.image"
            class="d-block w-100"
            alt="..."
          /> </SwiperSlide
        ><SwiperSlide>
          <img
            :src="$store.state.products.DetailData.data.productsData.image"
            class="d-block w-100"
            alt="..."
          /> </SwiperSlide
        ><SwiperSlide>
          <img
            :src="$store.state.products.DetailData.data.productsData.image"
            class="d-block w-100"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
      <div class="card">
        <div class="card-body">
          <div>
            <h5 class="card-title">
              상품명 :
              {{ $store.state.products.DetailData.data.productsData.title }}
            </h5>
            <h4>
              카테고리 :
              {{ $store.state.products.DetailData.data.productsData.category }}
            </h4>
          </div>
          <div class="clearfix"></div>
          <p class="card-text">
            상세설명 :
            {{ $store.state.products.DetailData.data.productsData.description }}
          </p>

          <h3>
            가격 :
            {{ $store.state.products.DetailData.data.productsData.price }} 원
          </h3>
          <h4>
            평점 :
            {{
              $store.state.products.DetailData.data.productsData.rating.rate
            }}점
          </h4>
          <h4>
            판매량 :
            {{
              $store.state.products.DetailData.data.productsData.rating.count
            }}
            <div class="float-end">
              <button
                type="button"
                class="btn btn-danger"
                id="liveToastBtn"
                @click="toast"
              >
                찜하기
              </button>

              <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                  id="liveToast"
                  class="toast"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div class="toast-header">
                    <strong class="me-auto">Bootstrap</strong>
                  </div>
                  <div class="toast-body">{{ toastMessage }}</div>
                </div>
              </div>

              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                카트담기
              </button>

              <!-- 1. 현재 유저의 Auth.tier를 체크한다.
            2. 데이터 에디터가 없다면 패스
            3. 데이터 에디터가 있다면 체크 -->
              <span
                v-if="
                  !$store.state.products.DetailData.data.productsData.editor ||
                  $store.state.auth.ObjectId ==
                    $store.state.products.DetailData.data.productsData.editor
                "
              >
                <span v-if="$store.state.auth.Tier > 0">
                  <router-link
                    :to="{
                      path:
                        '/products/edit/' +
                        this.$store.state.products.DetailData.data.productsData
                          .id,
                    }"
                    class="text-decoration-none text-dark"
                  >
                    <button type="button" class="btn btn-success">
                      수정가능
                    </button>
                  </router-link>
                </span>
              </span>
              <span
                v-if="
                  !$store.state.products.DetailData.data.productsData.editor ||
                  $store.state.auth.ObjectId ==
                    $store.state.products.DetailData.data.productsData.editor
                "
              >
                <span v-if="this.$store.state.auth.Tier > 0">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="
                      $store
                        .dispatch(
                          'deleteProducts',
                          $store.state.products.DetailData.data.productsData.id
                        )
                        .then(() => {
                          $router.push('/mypage');
                        })
                    "
                  >
                    글삭제
                  </button>
                </span>
              </span>
              <p>
                Editor :
                {{ $store.state.products.DetailData.data.productsData.editor }}
              </p>
              <p>User : {{ $store.state.auth.ObjectId }}</p>

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
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h4>
        </div>
        <div class="clearfix" />
      </div>
      <ul class="mt-3 nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            상품정보
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            리뷰
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            문의
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            type="button"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
          >
            추가정보
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          {{ $store.state.products.DetailData.data.productsData.description }}
          <div class="mt-3">
            <h4>태그</h4>
            <hr />
            <span class="badge rounded-pill text-bg-primary">상의</span>
            <span class="badge rounded-pill text-bg-secondary">해외직구</span>
            <span class="badge rounded-pill text-bg-success">할인 중</span>
            <span class="badge rounded-pill text-bg-danger">캐주얼</span>
            <span class="badge rounded-pill text-bg-warning">20대</span>
            <span class="badge rounded-pill text-bg-info">봄바람</span>
            <span class="badge rounded-pill text-bg-light">남친룩</span>
            <span class="badge rounded-pill text-bg-dark">블루</span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          리뷰
        </div>
        <div
          class="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          문의
        </div>
        <div
          class="tab-pane fade"
          id="disabled-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabindex="0"
        >
          추가정보
        </div>
      </div>
      <div class="rows comments">
        <div v-if="$store.state.auth.ObjectId" class="commentsForm">
          <h3>댓글 리스트</h3>
          <hr />
          댓글 작성 : {{ $store.state.auth.ObjectId }}
          <input
            type="text"
            @input="updateComment"
            id="commentBody"
            class="form-control"
            :value="commentBody"
          />
          <button type="button" @click="uploadComment" class="btn btn-primary">
            댓글작성
          </button>
        </div>
        <h4>댓글 리스트</h4>
        <div
          v-for="(a, i) in $store.state.products.DetailData.data.comments"
          :key="i"
        >
          <div class="card">
            <p>댓글 고유 id : {{ a._id }},작성자 : {{ a.editorId }}</p>
            <h5>{{ a.commentBody }}</h5>
            <div v-if="a.editorId == $store.state.auth.ObjectId">
              <button
                type="button"
                @click="deleteComment(a._id)"
                class="btn btn-danger"
              >
                댓글삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import * as bootstrap from "bootstrap";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_SERVER;

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      toastMessage: "찜에 추가되었어요.",
      commentBody: "",
    };
  },
  beforeCreate() {
    this.$store.dispatch("getDetailData", this.$route.params);
  },
  methods: {
    toast() {
      //Toast setting
      //Toast logic

      const toastLiveExample = document.getElementById("liveToast");
      const toast = new bootstrap.Toast(toastLiveExample);

      //localStorage logic , string 상태

      let currentLikeList = localStorage.getItem("likeList");
      console.log("리스트 가져옴");

      if (currentLikeList === null) {
        console.log("비어있다면");
        // 1. 만약에 로컬스토리지가 비었으면 - JSON stringify해서 데이터를 넣는다
        localStorage.setItem(
          "likeList",
          JSON.stringify(
            this.$store.state.products.DetailData.data.productsData
          )
        );
        localStorage.setItem("Count", 1); // 카운트는 1
        console.log("저장하고 메시지 뱉어기");
        this.toastMessage = "찜 상품 추가됐어요.";
        toast.show();
      } else {
        console.log("비어있지 않다면");
        let count = localStorage.getItem("Count"); // 갯수 카운터 가져오기

        // 2. 만약에 로컬스토리지가 있으면 - local + JSON stringify
        //let nowList = JSON.parse(localStorage.getItem("likeList"));
        let beforeData = JSON.parse(localStorage.getItem("likeList"));
        console.log("리스트 가져오고");
        let afterList = JSON.parse(
          JSON.stringify(
            this.$store.state.products.DetailData.data.productsData
          )
        );
        console.log("지금 데이터 가져오고");
        //이전 데이터 배열에서 id값을 가져와서 일치하는 id가 있으면 setItem 하지 않는다.
        if (beforeData) {
          console.log("데이터가 있다면");

          if (count == 1) {
            console.log("그중 데이터가 오브젝트(한개만 있는경우)면");
            if (beforeData.id === afterList.id) {
              console.log("아이디를 비교해서 동일한 상품임을 확인");
              // 1개용 코드 id 비교
              this.toastMessage = "동일한 상품이예요";
              toast.show();
              console.log("메시지 나옴");
              return;
            } else {
              console.log("리스트에 추가한다");
              // 1개용 코드 id 비교
              console.log("데이터 합치기");
              let combine = [];
              let arrBeforeData = beforeData;
              let arrAfterList = [afterList];
              combine = combine.concat(arrBeforeData, arrAfterList);
              localStorage.setItem("likeList", JSON.stringify(combine));
              let getScore = localStorage.getItem("Count");
              console.log(getScore);
              localStorage.setItem("Count", parseInt(getScore) + 1); // 카운트는 +1된다
              this.toastMessage = "찜 상품 추가됐어요.";
              toast.show();
              return;
            }
            //배열 비교
          } else {
            console.log("1개가 아닌 데이터(배열이라면)");
            const check = beforeData.some(
              (element) => element.id == afterList.id
            );
            console.log("체크해보고");
            if (check) {
              this.toastMessage = "동일한 상품이예요";
              toast.show();
              console.log("동일한 상품이면 토스트 메시지+ return");
              return;
            } else {
              console.log("중복없음");
              console.log("데이터 합치기");
              let combine = [];
              let arrBeforeData = beforeData;
              let arrAfterList = [afterList];
              combine = combine.concat(arrBeforeData, arrAfterList);
              localStorage.setItem("likeList", JSON.stringify(combine));
              let getScore = localStorage.getItem("Count");
              console.log(getScore);
              localStorage.setItem("Count", parseInt(getScore) + 1); // 카운트는 +1된다
              this.toastMessage = "찜 상품 추가됐어요.";
              toast.show();
            }
          }
        }
      }
    },
    updateComment(e) {
      this.commentBody = e.target.value;
    },
    deleteComment(id) {
      ///:id/comment/:commentId 삭제요청
      axios
        .delete("api/products/comments/" + id, {
          commentId: id,
        })
        .then(() => {
          this.$store.dispatch("getDetailData", this.$route.params);
        });
    },
    uploadComment() {
      axios
        .post("api/products/" + this.$route.params.id + "/comments", {
          commentBody: this.commentBody,
        })
        .then(() => {
          this.$store
            .dispatch("getDetailData", this.$route.params)
            .then(() => {
              this.commentBody = "";
            })
            .catch(() => {});
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<style></style>
