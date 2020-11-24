<template>
<div style="height: border-box">
  <ul style="height: 95%" class="list-group">
    <li class="list-group-item container card" :key="key" v-for="(pokemon,key) in list">
        <card-list :pokemon="pokemon"></card-list>
    </li>
  </ul>
</div>

</template>

<script>
import Cardlist from "./Cardlist.vue";

const axios = require("axios");
export default {
  name: "Pokelist",
  components: {
    "card-list": Cardlist
  },
  data() {
    return {
      pokemons: [],
      pokemon: {},
      counter: 0,
      startPoint: 0
    };
  },
  computed: {
    list: {
      get: function() {
        return this.pokemons
        /*.sort(function(a, b) {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });*/
      }
    }
  },
  methods: {
    getPokemon: function() {
      for (var i = 1; i < 10; i++) {
        this.counter++;
        axios
          .get("https://pokeapi.co/api/v2/pokemon-form/" + i + "/")
          .then(response => {
            //console.log(response.data);
            this.pokemon = response.data;
            this.pokemons.push(this.pokemon);
          })
          .catch(error => console.log(error));
      }
    },
    scroll(pokemons) {
      this.startPoint = this.counter;
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        //console.log(this.counter);
        for (var i = 0; i < this.startPoint + 10; i++) {
          if (bottomOfWindow) {
            this.counter++;
            axios
              .get(
                "https://pokeapi.co/api/v2/pokemon-form/" + this.counter + "/"
              )
              .then(response => {
                pokemons.push(response.data);
              });
          }
        }
      };
    }
  },
  mounted() {
    this.getPokemon();

    this.scroll(this.pokemons);
  },
  beforeMount() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
