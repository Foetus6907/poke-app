<template>
  <div class="container">
    <ul class="list-group" mb-2>
      <li class="list-group-item p-0" :key="key" v-for="(pokemon,key) in list">
        <card-list :pokemon="pokemon"></card-list>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onBeforeMount, onMounted, onUnmounted } from 'vue';
import Cardlist from "./Cardlist.vue";

const axios = require("axios");
export default {
  name: "Pokelist",
  components: {
    "card-list": Cardlist
  },
  setup() {
    const pokemons = ref([]);
    const orderedPokemons = computed(() => {
      return pokemons.value.sort(function(a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
    });

    async function fetchPokemon(pokemonId) {
      try {
        const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon-form/" + pokemonId + "/")
        return pokemon.data
      } catch (e) {
        console.log('Error fetching pokemon', e);
      }
    }

    const counter = ref(1)
    // const totalPages = ref()
    const limit = 10
    const maxPokemon = 898
    const isLoading = ref(true)

    async function getFirstPokemons(startIndex, limit) {
      isLoading.value = true
      const fetchPoks = []
      for (let i = startIndex; i < startIndex + limit; i++) {
        try {
          const fetchPok = await fetchPokemon(i)
          counter.value = i;
          fetchPoks.push(fetchPok)
        } catch (e) {
          console.log('Error fetching pokemons', e);
        }
      }
      isLoading.value = false
      pokemons.value = [
        ...pokemons.value,
        ...fetchPoks
      ]
    }

    onBeforeMount(async () => {
      getFirstPokemons(counter.value, limit)
      isLoading.value = false
    })

    const hasFetchedAllData = computed(() => {
      return counter.value === maxPokemon
    })

    //Scroll management
    const handleScroll = async () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log(hasFetchedAllData.value, !isLoading.value)
        if (hasFetchedAllData.value) {
          return
        }

        if (!isLoading.value) {
          await getFirstPokemons(counter.value + 1, limit)
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
      list: orderedPokemons
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
