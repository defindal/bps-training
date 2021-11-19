<template>
    <v-card class="mx-auto my-6" max-width="400">
        <v-card-title class="d-flex align-center justify-center py-7">
            <h1>Login</h1>
        </v-card-title>
        
        <v-card-text>
            <v-form @submit.prevent="loginPost">
                <v-text-field label="Email" v-model="userData.email" outlined>

                </v-text-field>
                <v-text-field v-model="userData.password"
                    outlined
                    :type="'password'"
                    label="Password"
                    placeholder="············"
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
// import loginPost 
//     from '../services/login.js'  
// import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
// import { ref } from '@vue/composition-api'
import { loginPost } from '../services/login.js';

export default{

    data(){
        return{
            userData: {
                email : '',
                password : ''
            }
        }
    },
    methods:{
        async loginPost(){
            (async() => {
                let cekLogin = null;
                try {
                    cekLogin = await loginPost(this.userData);
                    localStorage.setItem("id_user",cekLogin.data.user_id)
                    localStorage.setItem("name",cekLogin.data.name)
                    localStorage.setItem("position_name",cekLogin.data.position.position_name)
                    localStorage.setItem("email",cekLogin.data.email)
                   
                    alert('Berhasil Login');
                    this.$router.push('/');
                } catch (err) {
                    alert('Email dan Password Salah');
                }
            })();   
        }
    }
}


</script>