<template>
  <div class="home">
    <v-container fluid>  
      <h2>WELCOME {{this.name}} - {{this.position_name}}</h2> <br>
      <v-btn v-for="item in languages" :key="item.title" 
      @click="changeLocale(item.language)">
        <flag :iso="item.flag"/> {{item.title}}
      </v-btn>
      <br>
      <p>{{$t('msg', { name : 'kuzo'})}}</p>
      <br>
      <p>{{$t('menuList.home')}}</p>
      <br>
      <p>{{$d(date,'digit')}}</p>
      <br>
      <p>
        {{$n(2000, 'currency')}}
      </p>
    </v-container>
  </div>
</template>
<script>
import i18n from '../plugins/i18n'
export default {
  data(){
    return {
      name : "",
      position_name : "",
      date : new Date(),
      languages :[{
        flag : "id",
        language : "id",
        title : "Indonesia"
      },
      {
        flag : "us",
        language : "en",
        title : "English"
      }
      ]
    }
  },
  created(){
    this.getSession();
  },
  methods:{
    changeLocale(language){
      i18n.locale = language
    },
    getSession(){
      console.log(sessionStorage.getItem("name"));
      this.name = sessionStorage.getItem("name");
      this.position_name = sessionStorage.getItem("position_name");
    },
  }

}
</script>