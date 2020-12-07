<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item p-0" :key="key" v-for="(pokemon,key) in list">
            <card-list :pokemon="pokemon"></card-list>
          </li>
        </ul>
      </div>
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item p-0" :key="key" v-for="(pokemon,key) in orderedPokemonList">
            <card-list :pokemon="pokemon"></card-list>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, computed, onActivated, onMounted, onUnmounted } from 'vue';
import Cardlist from "./Cardlist.vue";
import { useStore } from 'vuex'
import {GET_POKEMON_BY_ID} from "@/store/pokemon/types";

const axios = require("axios");
export default {
  name: "Pokelist",
  components: {
    "card-list": Cardlist
  },
  setup() {
    const store = useStore()

    const pokemons = ref([]);
    const orderedPokemons = computed(() => {
      return pokemons.value.sort(function(a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
    });

    function getPokemonById(pokemonId) {
      axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemonId}`)
        .then((response) => {
          pokemons.value = [
            ...pokemons.value,
            response.data
          ]
        })
        .catch((error) => console.log('Error fetching pokemon', error));
    }

    function getPokemons (startIndex, limit) {
      isLoading.value = true
      for (let i = startIndex; i < startIndex + limit; i++) {
        getPokemonById(i);
        counter.value = i;
      }
      isLoading.value = false
    }

    const counter = ref(1)
    const limit = 10
    const maxPokemon = 898
    const isLoading = ref(true)

    for (let i = 1; i < 10; i++) {
      store.dispatch(GET_POKEMON_BY_ID, {pokemonId: i})
    }

    getPokemons(counter.value, limit)

    onActivated(async () => {
      getPokemons(counter.value, limit)
    })

    const hasFetchedAllData = computed(() => {
      return counter.value === maxPokemon
    })

    //Scroll management
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (hasFetchedAllData.value) {
          return
        }

        if (!isLoading.value) {
          getPokemons(counter.value + 1, limit)
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })


    console.log(store.getters.orderedPokemonList)

    return {
      list: orderedPokemons,
      // access a state in computed function
      orderedPokemonList: store.getters.orderedPokemonList,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
