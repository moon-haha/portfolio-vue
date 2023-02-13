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
        <label class="input-group-text" for="inputGroupFile01">Upload</label>
        <input
          type="file"
          @input="updateImage"
          class="form-control"
          id="image"
          disabled
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
  name: "WriteEditor",
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
        //Image: String,
        Category: "Electronics",
        Editor: this.$store.state.auth.ObjectId,
      },
    };
  },
  methods: {
    updateTitle(e) {
      this.Products.Title = e.target.value;
      console.log(this.Products.Title);
    },
    updateDescription(e) {
      this.Products.Description = e.target.value;
    },
    updatePrice(e) {
      this.Products.Price = e.target.value;
    },
    updateImage(e) {
      this.Products.Image = e.target.value;
    },
    updateCategory(e) {
      this.Products.Category = e.target.value;
    },
    Upload() {
      //API 서버에 글쓰기 요청
      axios
        .post("api/products", {
          title: this.Products.Title,
          description: this.Products.Description,
          price: this.Products.Price,
          category: this.Products.Category,
          editor: this.Products.Editor,
        })
        .then(() => {
          this.$router.push("/");
        });
      //this.products
    },
  },
  mounted() {},
};
</script>
<style></style>
