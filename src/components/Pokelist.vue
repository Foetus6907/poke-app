<template>
<div>
  <ul class="list-group">
    <li class="list-group-item container card" :key="key" v-for="(pokemon,key) in list">
      <div class="row" style="display: flex ">
        <div class="col-xs-2 col-md-2 co-lg-2" style="float:left;display: flex;justify-content: center;align-items: center;justify-items: center;">
          <span class="badge badge-primary" style="width:25%;">{{ pokemon.id }}</span>
        </div>
        <div class="col-xs-2 col-md-3 co-lg-3" style="float:left;display: flex;justify-content: center;align-items: center;justify-items: center;">
        <img class="card-img-top" :src="pokemon.sprites.front_default" alt="Card image cap">
        </div>
        <div class="card-body col-xs-8 row" style="display:  flex;justify-content:  center;align-items:  center;">
          <div class="col-xs-5 col-md-6 co-lg-6">
            <h5 class="card-title">{{ pokemon.name }}</h5>
            <label id="label1">{{pokemon.version_group.name}}</label>    
            <br/>
            <label id="label2">{{pokemon.form_name}}</label>
          </div>
          <div class="col-xs-5" style="display: flex;justify-items: center;align-items: center; margin: auto;">
            <a href="#" class="btn btn-primary">Fiche complete</a>
          </div>
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
      pokemon: {},
      counter: 0,
      startPoint: 0
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
      for (var i = 1; i < 10; i++) {
        this.counter++;
        axios
          .get("https://pokeapi.co/api/v2/pokemon-form/" + i + "/")
          .then(response => {
            console.log(response.data);
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
        console.log(this.counter);
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
    this.scroll(this.pokemons);
  },
  beforeMount() {
    this.getPokemon();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-primary {
  color: #1d2124;
  background-color: #007bff8c;
  border-color: #007bff8c;
}
</style>
