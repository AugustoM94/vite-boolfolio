<template>
    <div class="container p-3 ">
        <h1>Contact Us</h1>
        <ContactForm />
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import axios from 'axios';
import { store } from "../store";

    export default {
        name: 'AppContact',
        components: {
            ContactForm
        },
    }
</script>

<style lang="scss" scoped>

</style>