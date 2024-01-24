<template>
    <main class="container">
        <div v-if="project">
            <div class="card">
                <h1>{{ project.title }}</h1>
                <p>{{ project.body }}</p>
                <p>Category: {{ project.category.name }}</p>
                <p>Technology: {{ project.technologies[0].name }} </p>
                <a :href="project.link" target="_blank">Visit Project</a>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null,
        }
    },
    methods: {
        getProjectData() {
            console.log(this.$route);
            axios.get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                if (res.data.result) {
                    this.project = res.data.result
                    console.log(this.project);
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    },
    created() {
        this.getProjectData()
    }
}
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
}
</style>
