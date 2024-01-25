<template >
    <section>
       <form @submit.prevent="submitForm" class="p-3">
          <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" v-model="name">
                <div id="name" class="form-text">Insert your name</div>
              </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">Insert your mail</div>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Your Address</label>
            <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
            <div id="addressHelp" class="form-text">Insert your address</div>
          </div>
          <div class="mb-3 form-check">
            <textarea name="message" id="message" cols="150" rows="10" aria-describedby="messageHelp" v-model="message"></textarea>  
          </div>
          <button type="submit" class="btn btn-primary p-2 me-2 ">Submit</button>
          <button type="reset" class="btn btn-danger p-2">Reset</button>
        </form>
    </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";

    export default {
        name: 'ContactForm',
        data() {
            return {
                store,
                name: '',
                email: '',
                address: '',
                message: ''

            }
        },
        methods: {
            submitForm(){
                const data = {
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    message: this.message
                }
                axios.post(`${this.store.apiUrl}/contacts`,data).then((res)=>{
                    console.log(res);
                    this.name ='';
                    this.email ='';
                    this.address ='';
                    this.message =''                   
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>