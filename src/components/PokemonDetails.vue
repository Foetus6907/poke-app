<template>
  <div class="container">
    <div class="card mb-2">
      <div class="card-body">
        <!-- Carousel wrapper -->
        <div id="carouselBasicExample" class="w-50 bg-light carousel slide carousel-fade carousel-dark w-100"
             data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li :key="key"
                v-for="(sprite, key) in sprites"
                :data-target="'#carouselBasic'+key"
                :data-slide-to="key"
                class="active">
            </li>
          </ol>

          <!-- Inner -->
          <div class="carousel-inner">
            <!-- Single item -->
            <div :key="key"
                 v-for="(sprite, key) in sprites"
                 :class="{ 'active': key === 0 }"
                 class="carousel-item">
              <img
                  :src="sprite"
                  class="d-block min-vw-75 m-auto"
                  alt="alt"
                  height="250"
              />
            </div>

          </div>
          <!-- Inner -->

          <!-- Controls -->
          <a
              class="carousel-control-prev"
              href="#carouselBasicExample"
              role="button"
              data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
              class="carousel-control-next"
              href="#carouselBasicExample"
              role="button"
              data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <!-- Carousel wrapper -->
      </div>
    </div>


    <div class="card">
      <div class="card-body pb-0">
        <div class="d-flex justify-content-center align-content-center">
          <h3 class="card-title">{{ capitalize(pokemonName) }}</h3>
          <h4 class="ml-2 mb-1"><span class="badge small rounded-pill bg-info">{{ pokemon.id }}</span></h4>
        </div>

        <p class="card-text">Types :{{ pokemonType }}</p>
      </div>
      <div class="card">
        <div class="card-body">
          <p class="card-text">Base Statistic</p>

          <ul class="list-group shadow-lg p-3 mb-3 bg-white rounded">
            <li v-for="(stat, key) in pokemon.stats" :key="key" class="list-group-item">
              <div class="row">
                <span class="col-6">{{ capitalize(stat.stat.name) }}</span>
                <span class="text-xs-right col-6">{{ stat.base_stat  }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- <div class="row d-flex justify-center align-center">
       <div class="col-md-6 col-xs-12">
         <span class="badge badge-primary" style="width:25%;">{{ pokemon.id }}</span>
       </div>
     </div>-->


    <!--<div class="row d-flex align-center justify-center h-100">
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
            &lt;!&ndash;<template slot="items" slot-scope="props">
              <td>{{ capitalize(props.item.stat.name) }}</td>
              <td class="text-xs-right">{{ props.item.base_stat  }}</td>

            </template>&ndash;&gt;
          </div>
        </div>
      </div>
    </div>-->
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
      sprites: [],
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
            for (const [key, value] of Object.entries(this.pokemon.sprites)) {
              console.log(`${key}: ${value}`);
              if (typeof value === "string") {
                this.sprites.push(value);
              }
            }

            /*this.sprites = this.pokemon.sprites.map((el) => {
              console.log(typeof el)
              if(typeof el === "string") {
                return el
              }
            });*/
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

</style>
