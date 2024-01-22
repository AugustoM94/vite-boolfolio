<template>
  <div>
    <h1>Ciao</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "./store";

export default {
  name: "App",
  data() {
    return {
      store,
      projects: [],
    };
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + "/projects", { params: { page: this.currentPage } })
        .then((res) => {
          this.projects = res.data.result.data;
          console.log(this.projects);
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    },
  },
  mounted() {
    this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped>
</style>
