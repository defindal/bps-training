<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Approval System</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" 
        active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t('menuList.home')}}</v-list-item-title>
          </v-list-item>
        <v-list-item to="disposisi">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Disposisi</v-list-item-title>
          </v-list-item>
           <v-list-item to="disposisi-create">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Create New Disposisi</v-list-item-title>
          </v-list-item>
          <v-list-item to="about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()"> 
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    

  </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    methods:{
      logout(){
              localStorage.removeItem("id_user")
              localStorage.removeItem("name")
              localStorage.removeItem("position_name")
              localStorage.removeItem("email")
              this.$router.push({
                name : 'Login'
              })
      }
    }
  }
</script>