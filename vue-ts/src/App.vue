<template>
  <ul class="header">
    <li><router-link to="/">toHome</router-link></li>
    <li><router-link to="/users">toUser</router-link></li>
    <li><router-link to="/news">toNews</router-link></li>
  </ul>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header {
    height: 50px;
    background: #2c3e50;
    display: flex;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    li {
      margin-right: 20px;
      a {
        color: #fff;
      }
    }
  }
}
</style>
