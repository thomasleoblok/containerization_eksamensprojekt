<template>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
          <Navbar />
          <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
          <router-view></router-view>
           </div>
          <FooterSection />
       </div>
      </div>
    </div>
</template>

<script>
import FooterSection from './components/MenuItems/Footer.vue'
import Navbar from './components/MenuItems/Navbar.vue'


export default {
  name: 'App',
  setup(){
     
  },
  components: {
    FooterSection,
    Navbar
  },
  computed: {
        alert () {
            return this.$store.state.alert
        }
    },
    watch:{
        $route (to, from){
            // clear alert on location change
            this.$store.dispatch('alert/clear');
        }
    } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>