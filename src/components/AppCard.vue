<template>
    <main>
        <div class="card h-100" style="width: 21rem;">
            <div class="card-body">
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="text-black text-decoration-none ">
                    <h5 class="card-title">{{ project.title }}</h5>
                </router-link>
                    <ul class="list-unstyled">
                            <li class="ms-3" v-for="item in this.project.technologies" :key="item.id">{{ item.name }} <i :class="item.icon"></i></li>
                    </ul>
            </div>
        </div>
    </main>
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