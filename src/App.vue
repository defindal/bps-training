<template>
  <v-app v-if ="isLogin">
     <v-content>
        <v-container fluid>
         <router-view></router-view>
        </v-container>
      </v-content>
  </v-app>

  <v-app v-else >
      <Header/>
     <v-content>
        <v-container fluid>
         <router-view></router-view>
        </v-container>
      </v-content>
      <Footer/>
  </v-app>

</template>
<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name : "App",
  components : {
    Header,
    Footer
  },
  computed:{
    isLogin(){
      return this.$route.name === 'Login'
    }
  }
}
</script>