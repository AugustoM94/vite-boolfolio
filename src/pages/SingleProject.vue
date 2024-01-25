<template>
    <main class="container d-flex justify-content-center mt-2 ">
        <div v-if="project">
            <div class="card border-0 shadow" style="max-width: 30rem;">
                <div class="card-body">
                    <h1 class="card-title">{{ project.title }}</h1>
                    <p class="card-text">{{ project.body }}</p>
                    <p class="card-text"><small class="text-muted">Category: {{ project.category.name }}</small></p>
                    <ul class="list-unstyled">
                        <li class="ms-3" v-for="item in project.technologies" :key="item.id">
                            {{ item.name }} <i :class="item.icon"></i>
                        </li>
                    </ul>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <a :href="project.link" target="_blank" class="btn btn-primary">Visit Project</a>
                </div>
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
            project: {},
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
