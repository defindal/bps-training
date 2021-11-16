<template>
  <div>{{header}}</div>
</template>
<script>
import { bus } from '../main';
export default {
  name: 'Receiver2',
  props: {
    msg: String,
    header: String
  },
  created (){
    bus.$on('channel02', (data) => {
      this.header = data;
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>