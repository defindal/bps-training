<template>
  <div class="penyimpanan">
    <v-container fluid fill-height>  
      <v-row>  
        <v-col cols="6">
            <v-text-field label="Nama Depan Local" v-model="userData.nama_depan" />
        </v-col>
        <v-col cols="6">
          <v-text-field label="Nama Belakang Local" v-model="userData.nama_belakang" />
        </v-col> 
      </v-row>
      <v-row>  
        <v-col cols="6">
            <v-text-field label="Nama Depan Session" v-model="userSession.nama_depan_session" />
        </v-col>
        <v-col cols="6">
          <v-text-field label="Nama Belakang Session" v-model="userSession.nama_belakang_session" />
        </v-col> 
      </v-row>
    </v-container>
  </div>
</template>
<script> 
export default {
    name: 'Penyimpanan',  
    data: () => ({
      userData : {
        nama_depan:null,
        nama_belakang:null
      },
      userSession : { 
        nama_depan_session:null,
        nama_belakang_session:null
      }
    }),  
    watch :{  
        'userData.nama_depan': function (val){
            this.userData.nama_depan = val;
            this.setData("user",JSON.stringify(this.userData))   
         },
        'userData.nama_belakang': function (val){
            this.userData.nama_belakang = val;
            this.setData("user",JSON.stringify(this.userData))  
         },
         'userSession.nama_depan_session': function (val){
            console.log(val);
            this.userSession.nama_depan_session = val; 
            this.setDataSession("userSession",JSON.stringify(this.userSession))  
         },
        'userSession.nama_belakang_session': function (val){
            console.log(val);
            this.userSession.nama_belakang_session = val; 
            this.setDataSession("userSession",JSON.stringify(this.userSession))   
         }
    },
    mounted () {
        this.getData("user")
        this.getDataSession("userSession")
    },
    methods:{

        setData(key,value) { 
            localStorage.setItem(key, value) 
        },
        getData(key) {
            console.log(JSON.parse(localStorage.getItem(key)));
            if (localStorage.getItem(key)) {
              try {
                this.userData = JSON.parse(localStorage.getItem(key));
              } catch(e) {
                localStorage.removeItem(key);
              }
            }
        },
        setDataSession(key,value) { 
            sessionStorage.setItem(key, value) 
        },

        getDataSession(key) {
            console.log("Session : ",JSON.parse(sessionStorage.getItem(key)));
            if (sessionStorage.getItem(key)) {
              try {
                this.userSession = JSON.parse(sessionStorage.getItem(key));
              } catch(e) {
                sessionStorage.removeItem(key);
              }
            }
        }
    }
    
}
</script>