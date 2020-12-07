// import { GET_POKEMON_BY_ID } from "@/store/pokemon/types";
import mutations from "@/store/pokemon/mutations";
import actions from "@/store/pokemon/actions";

const pokemonStore = {
    state() {
        return {
            count: 5,
            currentPokemon: {},
            pokemonList: []
        }
    },
    actions: actions,
    mutations: mutations,
    getters: {
        orderedPokemonList: (state) => {
            return state.pokemonList.sort(function(a, b) {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            });
        },
        getPokemonByID: (state) => (id) => {
            return state.pokemonList.find(pokemon => pokemon.id === id)
        }
    }
}

export default pokemonStore;