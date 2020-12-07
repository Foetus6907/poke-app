import { createStore } from 'vuex';
import pokemonStore from "@/store/pokemon/pokemonStore";

// Create a new store instance.
const store = createStore({modules: { pokemon: pokemonStore }});

export default store;
