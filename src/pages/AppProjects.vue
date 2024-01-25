<template>
    <main class="bg-project ">
        <section class="container ">
            <h1>Project List</h1>
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-4 p-2 " v-for="project in store.projects" :key="project.id">
                        <AppCard :project="project" />
                    </div>
                </div> 
        </section>
    </main>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import AppCard from '../components/AppCard.vue';


export default {
    name: 'AppProjects',
    components: {
        AppCard
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getAllProjects() {
            axios.get(`${this.store.apiUrl}/projects`).then((res) => {
                this.store.projects = res.data.result;
                console.log(this.store.projects);
            }).catch((err) => {
                console.log(err);
            });
        },
    },
    created() {
        this.getAllProjects();
    }
}
</script>

<style lang="scss" scoped>

body, html {
    height: 100%;
    margin: 0;
    padding: 0;
}
.bg-project{
   background-color: #FAF3E6;
   height: 100%;
}

</style>