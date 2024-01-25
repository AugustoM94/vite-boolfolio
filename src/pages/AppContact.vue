<template>
    <section class="contact-form">
        <div class="container p-3 ">
            <h1>Contact Us</h1>
            <ContactForm />
        </div>

    </section>
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
.contact-form{
     background-color: rgba($color: #655844, $alpha: 0.6);
}
</style>