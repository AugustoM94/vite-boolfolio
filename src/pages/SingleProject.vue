<template>
    <section class="container">
        <div v-if="project">
            <div class="card">
                <h1>{{ project.title }}</h1>
                <p>{{ project.body }}</p>
                <p>Category: {{ project.category.name }}</p>
                <p>Technologies: {{ project.technologies.name}} <span>{{ project.technologies.icon }}</span></p>
                <a :href="project.link" target="_blank">Visit Project</a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';



export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getPostData() {
            console.log(this.$route);
            axios.get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                //console.log(res.data)
             this.technologies = res.data.technologies

                if (res.data.result) {
                    this.project = res.data.result
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    },
    created() {
        this.getPostData()
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