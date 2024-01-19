<template>
  <div>
    <h1>Ciao</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
    <button @click="nextPage">Avanti</button>
    <button @click="goToLastPage">Indietro</button>
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
      currentPage: 1,
      lastPage: 0,
    };
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + "/projects", { params: { page: this.currentPage } })
        .then((res) => {
          this.projects = res.data.result.data;
          console.log(this.projects);
          this.currentPage = res.data.current_page;
          this.lastPage = res.data.last_page;
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
        this.getAllProjects();
      }
    },
    goToLastPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getAllProjects();
      }
    },
  },
  mounted() {
    this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped>
</style>
