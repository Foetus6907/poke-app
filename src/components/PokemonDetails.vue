<template>
  <div class="container">
    <div class="row d-flex justify-center align-center">
      <div class="col-md-6 col-xs-12">
        <span class="badge badge-primary" style="width:25%;">{{ pokemon.id }}</span>
      </div>
    </div>
    <div class="row d-flex align-center justify-center h-100">
      <div class="col-xl-4 col-md-6 col-xs-12">
        <div id="carousel">
          <div name="carouselitem"
               :key="key"
               v-for="(sprite, key) in sprites"
               :src="sprite"
          ></div>
        </div>
      </div>
    </div>
    <div class="row d-flex align-center justify-center">
      <div class="card">
        <div class="card-title">
          <div class="title">
            <h3>{{ capitalize(pokemonName) }}</h3>
          </div>
        </div>
        <div class="card-text">
          <div>
            <p>Types :{{ pokemonType }}</p>
          </div>

          <div v-for="(stats, key) in pokemon.stats" :key="key" class="elevation-1 data-table">
            <p>{{ stats }}</p>
            <p>{{}}</p>
            <!--<template slot="items" slot-scope="props">
              <td>{{ capitalize(props.item.stat.name) }}</td>
              <td class="text-xs-right">{{ props.item.base_stat  }}</td>

            </template>-->
          </div>
        </div>
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
      sprites: {},
      moves: [],
      pokemonName: "",
      pokemonType: "",
    };
  },
  methods: {
    getPokemon: function (pokemonId) {
      axios
          .get("https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/")
          .then(response => {
            //console.log(response.data);
            this.pokemon = response.data;
            //console.log(this.pokemon.sprites);
            this.src = this.pokemon.sprites.front_default;
            this.sprites = this.pokemon.sprites;
            this.moves = this.pokemon.moves;
            this.pokemonName = this.pokemon.name;
            this.setPokemonType(this.pokemon);
          })
          .catch(error => console.log(error));
    },
    capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    setPokemonType(pokemon) {
      console.log(pokemon);
      pokemon.types.forEach(element => {
        this.pokemonType += " " + this.capitalize(element.type.name);
      });
    }
  },
  beforeMount() {
    this.getPokemon(this.pokemonId);
  }
};
</script>

<style scoped>
.title {
  margin: auto;
}
</style>
