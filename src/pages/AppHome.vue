<template>
    <div class=" image">
        <h2 class="text-white">Benvenuti nel mio BoolFolio</h2>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: 'AppHome',
  data() {
    return {

    }
  },
  component: {

  },
  methods: {
  },
  created() {

  },
  mounted() {


}
}
</script>

<style lang="scss" scoped>
.image{
    background-image: url(../assets/images/sfondo.jpg);
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    background-color: #1A1C1E;
    border: none;
}
</style>