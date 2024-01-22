<template>
  <main >
     <AppHeader></AppHeader> 
    <router-view></router-view>
    </main>
  
</template>

<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";


export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    },
  
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
html {
  font-size: 62.5%;
}
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
}
h1 {
  margin-bottom: 0.5em;
  font-size: 3.6rem;
}
p {
  margin-bottom: 0.5em;
  font-size: 1.6rem;
  line-height: 1.6;
}
#app{
    background-color: #5bc0de;
}
</style>
