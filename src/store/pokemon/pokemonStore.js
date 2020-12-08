// import { GET_POKEMON_BY_ID } from "@/store/pokemon/types";
import mutations from "@/store/pokemon/mutations";
import actions from "@/store/pokemon/actions";

const RANGE_SIZE = 9;
const MAX_POKEMON = 898

const pokemonStore = {
    state() {
        return {
            startIndex: 1,
            rangeSize: RANGE_SIZE,
            loadingStatus: false,
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
        findPokemonByID: (state) => (id) => {
            return state.pokemonList.find(pokemon => pokemon.id === id)
        },
        hasFetchedAllPokemon: (state) => {
            return state.startIndex === MAX_POKEMON
        }
    }
}

export default pokemonStore;