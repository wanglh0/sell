<template>
    <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooderGuide"></FooterGuide>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'



  export default {
    components:{
      FooterGuide
    },
    mounted(){
      // this.$store.dispatch("getAddress")
      this.getAddress()
    },
    methods:{
      ...mapActions(['getAddress'])
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5


</style>
