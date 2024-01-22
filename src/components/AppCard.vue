<template>
    <div class="card h-100" style="width: 21rem;">
        <div class="card-body">
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="text-black text-decoration-none ">
                <h5 class="card-title">{{ project.title }}</h5>
            </router-link>
            <div class="card-meta">
                <a class="card-date text-decoration-none">{{ project.link }}</a>
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