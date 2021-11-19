<template>
    <v-card class="mx-auto my-6" max-width="400">
        <v-card-title class="d-flex align-center 
        justify-center py-7">
            <h1>Login</h1>
        </v-card-title>

        <v-card-text>
            <v-form @submit.prevent="loginPost">
                <v-text-field label="Email" outlined 
                v-model="userData.email">

                </v-text-field>

                <v-text-field outlined
                :type="'password'"
                label="Password"
                v-model="userData.password"
                >

                </v-text-field>

                <v-btn block color="primary" type="submit">
                    Login
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import {loginPost} from '../services/login.js';
export default {
    data() {
        return{
            userData:{
                email: '',
                password: ''
            }
        }
    },

    methods:{
        async loginPost(){
            (async() => {
                let cekLogin = null;
                try{
                    cekLogin = await loginPost(this.userData);
                    sessionStorage.setItem("id_user",cekLogin.data.user_id)
                    sessionStorage.setItem("name",cekLogin.data.name)
                    sessionStorage.setItem("position_name",cekLogin.data.position.position_name)

                    alert("Berhasil Login")
                    this.$router.push('/');
                }catch (err){
                    alert("Email dan Password salah");
                }
            })();
        }
    }
}
</script>