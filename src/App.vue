<template>
  <div id="app">
    <navbar/>
    <pokelist/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Pokelist from "./components/Pokelist.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Pokelist
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
