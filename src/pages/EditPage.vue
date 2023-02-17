<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <input
          id="title"
          class="form-control"
          type="text"
          placeholder="Title"
          @input="updateTitle"
          :value="$store.state.products.DetailData.data.productsData.title"
          aria-label="default input example"
        />
      </div>
      <div class="col-6">
        <input
          id="price"
          class="form-control"
          type="number"
          placeholder="price"
          @input="updatePrice"
          :value="$store.state.products.DetailData.data.productsData.price"
          aria-label="default input example"
        />
      </div>
      <div class="col-12 mt-2">
        <div class="input-group">
          <textarea
            class="form-control"
            id="description"
            aria-label="With textarea"
            placeholder="description"
            @input="updateDescription"
            :value="
              $store.state.products.DetailData.data.productsData.description
            "
          ></textarea>
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Category</label
          >
          <select
            @input="updateCategory"
            :select="
              $store.state.products.DetailData.data.productsData.category
            "
            class="form-select"
            id="Category"
          >
            <option>Electronics</option>
            <option>Jewelry</option>
            <option>Men's Clothing</option>
            <option>Women's Clothing</option>
          </select>
        </div>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">{{
          $store.state.products.DetailData.data.productsData.image
        }}</label>
        <input
          type="file"
          @input="updateImage"
          class="form-control"
          id="image"
        />
      </div>
      <div class="col-12">
        <button type="button" @click="Update" class="btn btn-primary btn-lg">
          Update
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_SERVER;

export default {
  watch: {
    "$store.auth.state.Tier": function () {
      if (this.$store.auth.state.Tier == 0) {
        console.log("수정불가");
        this.$router.push("/");
      } else if (this.$store.auth.state.Tier > 0) {
        console.log("수정가능");
      }
    },
  },

  data() {
    return {
      Products: {
        Title: "",
        Description: "",
        Price: Number,
        Category: "",
        Editor: "",
        Image: "",
      },
    };
  },
  beforeCreate() {
    this.$store
      .dispatch("getDetailData", this.$route.params)
      .then(() => {
        this.Products.Title =
          this.$store.state.products.DetailData.data.productsData.title;
        this.Products.Description =
          this.$store.state.products.DetailData.data.productsData.description;
        this.Products.Price =
          this.$store.state.products.DetailData.data.productsData.price;
        this.Products.Category =
          this.$store.state.products.DetailData.data.productsData.category;
        this.Products.Editor =
          this.$store.state.products.DetailData.data.productsData.editor;
        this.Products.Image =
          this.$store.state.products.DetailData.data.productsData.image;
      })
      .catch(() => {});
  },
  methods: {
    updateTitle(e) {
      this.Products.Title = e.target.value;
    },
    updateDescription(e) {
      this.Products.Description = e.target.value;
    },
    updatePrice(e) {
      this.Products.Price = e.target.value;
    },
    updateImage(e) {
      if (e.target.files !== undefined) {
        const uploadFile = e.target.files[0];
        this.Products.Image = uploadFile;
      }
    },
    updateCategory(e) {
      this.Products.Category = e.target.value;
    },
    Update() {
      const ProductformData = new FormData();

      ProductformData.append("title", this.Products.Title);
      ProductformData.append("description", this.Products.Description);
      ProductformData.append("image", this.Products.Image);
      ProductformData.append("price", this.Products.Price);
      ProductformData.append("category", this.Products.Category);

      //API 서버에 글쓰기 요청
      axios
        .put("api/products/" + this.$route.params.id, ProductformData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          this.$router.push("/products/" + this.$route.params.id);
        });
      //this.products
    },
  },
};
</script>
<style></style>
