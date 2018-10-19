<template>
    <div>
      <v-container grid-list-md text-xs-center>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex lg4 md6 xs12>
            <span class="badge badge-primary" style="width:25%;">{{ pokemon.id }}</span>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex lg4 md6 xs12>
            <v-carousel name="carousel">
              <v-carousel-item name="carouselitem"
                :key="key" v-for="(sprite, key) in sprites"
                :src="sprite"
                v-if="sprite != null"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row wrap>
          <v-flex lg4 md6 xs12>
            <v-card>
              <v-card-title>
                <div class="title">
                  <h3>{{capitalize(pokemonName)}}</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <div>
                  <p>Types :{{pokemonType}}</p>
                </div>
                <div>
                  <v-data-table
                  disable-initial-sort
                  :headers="headers"
                  :items="pokemon.stats"
                  hide-actions
                  class="elevation-1"
                  >
                    <template slot="items" slot-scope="props">
                      <td>{{ capitalize(props.item.stat.name) }}</td>
                      <td class="text-xs-right">{{ props.item.base_stat  }}</td>
                      
                    </template>
                  </v-data-table>

                </div>
               
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
      headers: [
        {
          text: "Base Statistics",
          align: "right",
          sortable: false,
          value: "name"
        },
        { text: "", value: "", sortable: false }
      ]
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
