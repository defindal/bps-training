<template>
  <div class="home">
    <v-container fluid>  
      <h1>This is an home page</h1>
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
  methods:{
    changeLocale(language){
      i18n.locale = language
    }
  }

}
</script>