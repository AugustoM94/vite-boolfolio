<template>
    <div class="card h-100" style="width: 21rem;">
        <div class="card-body">
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">
                <h5 class="card-title">{{ project.title }}</h5>
            </router-link>
            <p class="card-text">{{ project.body }}</p>
            <div class="card-meta">
                <a class="card-date">{{ project.link }}</a>
                <span class="card-category">{{ project.category }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store";

export default {
    name: 'AppCard',
    props: ['project'],
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" >





</style>