<template>
  <div>
    <input
      id="title"
      class="form-control"
      type="text"
      placeholder="title"
      aria-label="default input example"
    />
    <input
      id="price"
      class="form-control"
      type="number"
      placeholder="price"
      aria-label="default input example"
    />
    <input
      id="description"
      class="form-control"
      type="text"
      placeholder="description"
      aria-label="default input example"
    />
    <input
      id="category"
      class="form-control"
      type="text"
      placeholder="category"
      aria-label="default input example"
    />

    <div class="mb-3">
      <label for="formFile" class="form-label">image upload</label>
      <input class="form-control" type="file" id="formFile" />
    </div>

    <div id="editor"></div>
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
      el: document.querySelector("#e  ditor"),
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
