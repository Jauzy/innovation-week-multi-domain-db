<template>
  <div>
    <h1>REQUEST RESULT</h1>
    {{req_res}}
    <template v-for="(data,idx) in req_res" :key="idx">
      <h2>UID {{data.USER_ID}} : {{data.NAME}} - {{data.NIK}}</h2>
    </template>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "App",
  data(){
    return {
      req_res : null
    }
  },
  mounted() {
    axios.get("http://localhost:8001/user/all").then((res) => {
      console.log(res.data);
      this.req_res = res.data
    });
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
