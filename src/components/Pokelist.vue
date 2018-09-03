<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" :key="key" v-for="(pokemon,key) in list">
        <div class="card" style="width: 100%;">
          
          <div class="card-body">
            <span class="badge badge-pill badge-primary">{{pokemon.id}}</span><img class="card-img-left" :src="pokemon.sprites.front_default" alt="Card image cap">
          <h5 class="card-title">{{pokemon.name}}</h5>
          <p class="card-text">Version : {{pokemon.version_group.name}}</p>
          <a href="#" class="btn btn-primary">Detail</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
const axios = require("axios");
export default {
  name: "Pokelist",
  data() {
    return {
      pokemons: [],
      pokemon: {}
    };
  },
  computed: {
    list: {
      get: function() {
        return this.pokemons.sort(function(a, b) {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
      }
    }
  },
  methods: {
    getPokemon: function() {
      for (var i = 1; i < 151; i++) {
        axios
          .get("https://pokeapi.co/api/v2/pokemon-form/" + i + "/")
          .then(response => {
            console.log(response.data);
            this.pokemon = response.data;
            this.pokemons.push(this.pokemon);
          })
          .catch(error => console.log(error));
      }
    }
  },
  mounted() {
    this.getPokemon();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
