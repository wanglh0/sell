<template>
    <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooderGuide"></FooterGuide>
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  import {reqFoodCategorys} from './api'

  export default {
    components:{
      FooterGuide
    },
    async mounted(){
      const result = await reqFoodCategorys()
      console.log(result)
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5


</style>
