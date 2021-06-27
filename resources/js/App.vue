<template>
<div id="app">
    <router-view name="header"></router-view>
    <div>
        <router-view name="content"></router-view>
    </div>
    <router-view name="footer"></router-view>
    <app-cookies></app-cookies>
</div>
</template>

<script>
    import cookies from "./components/cookies/Cookies"
  export default {
    name: "App",
    components:{
      "app-cookies": cookies,
    },
    computed:{
      StateOfStore(){
        return this.$store.state
      }
    }
  }
</script>


