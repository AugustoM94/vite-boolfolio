<template >
    <AppHeader></AppHeader>
    <main>
         <router-view></router-view>     
    </main>
    <footer></footer>
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
    // Your methods here
  },
  mounted() {
    // Your mounted logic here
  },
};
</script>

<style lang="scss" scoped>
@use './assets/style/main.scss' as *;


</style>
