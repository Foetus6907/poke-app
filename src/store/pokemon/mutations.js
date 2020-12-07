import { GET_POKEMON_BY_ID } from "@/store/pokemon/types";

const mutations = {
    [GET_POKEMON_BY_ID]: (state, pokemon) => {
        state.pokemonList.push(pokemon);
    }
};

export default mutations;