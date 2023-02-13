<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <input
          id="title"
          class="form-control"
          type="text"
          placeholder="title"
          aria-label="default input example"
        />
      </div>
      <div class="col-6">
        <input
          id="price"
          class="form-control"
          type="number"
          placeholder="price"
          aria-label="default input example"
        />
      </div>
      <div class="col-3">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Category
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Electronics</a></li>
            <li><a class="dropdown-item" href="#">jewellery</a></li>
            <li><a class="dropdown-item" href="#">Mens</a></li>
            <li><a class="dropdown-item" href="#">Womens</a></li>
          </ul>
        </div>
      </div>
      <div class="col-9">
        <input
          id="category"
          class="form-control"
          type="text"
          placeholder="category"
          aria-label="default input example"
          disabled
        />
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Upload</label>
        <input type="file" class="form-control" id="inputGroupFile01" />
      </div>

      <div class="col-12"></div>
      <div id="editor" />
    </div>
  </div>
</template>
<script>
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
//import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
//import "@toast-ui/editor/dist/toastui-editor-viewer.css";

export default {
  name: "WriteEditor",
  watch: {
    "$store.state.Tier": function () {
      if (this.$store.state.Tier == 0) {
        console.log("글작성불가능");
        this.$router.push("/");
      } else if (this.$store.state.Tier > 0) {
        console.log("글작성가능");
      }
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      el: document.querySelector("#editor"),
      previewStyle: "vertical",
      initialEditType: "markdown",
      initialValue: "# 안녕",
      height: "700px",
      theme: "dark",
    });
  },
};
</script>
<style></style>
