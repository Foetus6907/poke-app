<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item p-0" :key="key" v-for="(pokemon,key) in orderedPokemonList">
        <card-list :pokemon="pokemon"></card-list>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import Cardlist from "./Cardlist.vue";
import { useStore } from 'vuex'
import { GET_POKEMONS_BY_RANGE_OF_ID} from "@/store/pokemon/types";

export default {
  name: "Pokelist",
  components: {
    "card-list": Cardlist
  },
  setup() {
    const store = useStore()

    function dispatchGetPokemonByRange(store) {
      store.dispatch(GET_POKEMONS_BY_RANGE_OF_ID, {
        startIndex: store.state.pokemon.startIndex,
        endIndex: store.state.pokemon.startIndex + store.state.pokemon.rangeSize
      });
    }

    dispatchGetPokemonByRange(store)

    //Scroll management
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (store.getters.hasFetchedAllPokemon) {
          return
        }

        if (!store.state.pokemon.loadingStatus) {
          dispatchGetPokemonByRange(store)
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })


    return {
      // access a state in computed function
      orderedPokemonList: store.getters.orderedPokemonList,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
