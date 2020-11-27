<template>

    <navbar/>
    <router-view></router-view>

</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>

@import '~mdb-ui-kit/css/mdb.min.css';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
  background-color: rgba(211, 211, 211, 0.25);
}
</style>
