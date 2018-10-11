<template>
    <div>
      <p>{{ pokemonId }}</p>

      <div :key="key" v-for="(sprite, key) in sprites" class="container">
        <div  class="container" style="display:flex; justify-content:center; align-items: center;" >
          <img v-if="sprite != null" class="card-img-top d-block w100" :src="sprite" alt="Card image cap">
          <p v-if="sprite != null">{{key}}</p>
        </div>
      </div>
    </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "PokemonDetail",
  props: {
    pokemonId: {
      Number,
      required: true
    }
  },
  data() {
    return {
      pokemon: {},
      sprites: {}
    };
  },
  methods: {
    getPokemon: function(pokemonId) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/")
        .then(response => {
          //console.log(response.data);
          this.pokemon = response.data;
          //console.log(this.pokemon.sprites);
          this.src = this.pokemon.sprites.front_default;
          this.sprites = this.pokemon.sprites;
        })
        .catch(error => console.log(error));
    }
  },
  beforeMount() {
    this.getPokemon(this.pokemonId);
  }
};
</script>

<style scoped>
img {
  width: 25%;
  height: 25%;
}
</style>
