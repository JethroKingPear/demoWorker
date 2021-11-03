<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="postMessage">Run</button>
    <br />
    <prism-editor
      class="my-editor height-300"
      v-model="code"
      :highlight="highlighter"
      :line-numbers="lineNumbers"
    ></prism-editor>
    <br />
    <textarea class="myResponse" v-model="resultAPI"></textarea>
  </div>
</template>

<script>
import { excuteScript } from "./apis.js";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "App",
  components: {
    PrismEditor,
  },
  data() {
    return {
      code: `const rs1 = getValidUsers();
const rs2 = getPositions();
return rs1.validate`,
      lineNumbers: true,
      resultAPI: "",
    };
  },
  methods: {
    postMessage() {
      const result = excuteScript(this.code);
      this.resultAPI = JSON.stringify(result);
    },
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.my-editor {
  background: #2d2d2d;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  width: 500px;
}

.myResponse{
  height: 300px;
  width: 300px;
}

.prism-editor__textarea:focus {
  outline: none;
}

.height-300 {
  height: 300px;
}
</style>
