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
          ></textarea>
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Category</label
          >
          <select @input="updateCategory" class="form-select" id="Category">
            <option>Electronics</option>
            <option>Jewelry</option>
            <option>Men's Clothing</option>
            <option>Women's Clothing</option>
          </select>
        </div>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01"
          >Image Upload</label
        >
        <input
          type="file"
          @input="updateImage"
          class="form-control"
          name="image"
          id="image"
        />
      </div>
      <div class="col-12">
        <button type="button" @click="Upload" class="btn btn-primary btn-lg">
          Upload
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
  name: "WritePage",

  watch: {
    "$store.auth.state.Tier": function () {
      if (this.$store.auth.state.Tier == 0) {
        console.log("글작성불가능");
        this.$router.push("/");
      } else if (this.$store.auth.state.Tier > 0) {
        console.log("글작성가능");
      }
    },
  },
  data() {
    return {
      Products: {
        Title: "",
        Description: "",
        Price: Number,
        Category: "Electronics",
        Editor: this.$store.state.auth.ObjectId,
        Image,
      },
    };
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
        console.log(uploadFile);
      }
    },
    updateCategory(e) {
      this.Products.Category = e.target.value;
    },
    Upload() {
      const ProductformData = new FormData();

      ProductformData.append("image", this.Products.Image);
      ProductformData.append("title", this.Products.Title);
      ProductformData.append("description", this.Products.Description);
      ProductformData.append("price", this.Products.Price);
      ProductformData.append("category", this.Products.Category);

      //API 서버에 글쓰기 요청
      axios
        .post("api/products", ProductformData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          this.$router.push("/mypage");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style></style>
