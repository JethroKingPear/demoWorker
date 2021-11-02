<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <input type="text" v-model="message" />
    <button @click="postMessage">Run</button>
  </div>
</template>

<script>
import { sendMessage } from "./worker-api.js";

export default {
  name: "App",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    postMessage() {
      sendMessage(this.message);
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
</style>
