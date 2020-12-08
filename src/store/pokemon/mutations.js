import {GET_POKEMON_BY_ID, UPDATE_LOADING_STATUS, UPDATE_START_INDEX} from "@/store/pokemon/types";

const mutations = {
    [GET_POKEMON_BY_ID]: (state, pokemon) => {
        state.pokemonList.push(pokemon);
    },
    [UPDATE_START_INDEX]: (state, newStartIndexValue) => {
        state.startIndex = newStartIndexValue
    },
    [UPDATE_LOADING_STATUS]: (state, loadingStatus) => {
        state.loadingStatus = loadingStatus;
    }
};

export default mutations;