import {
    GET_POKEMON_BY_ID,
    GET_POKEMONS_BY_RANGE_OF_ID,
    UPDATE_LOADING_STATUS,
    UPDATE_START_INDEX
} from "@/store/pokemon/types";
import axios from "axios";

async function fetchPokemonByID(pokemonId) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemonId}`)
        if (response.status === 200) {
            return response.data;
        } else {
            return null
        }
    } catch (error) {
        console.log('Error fetching pokemon', error);
        return null
    }
}

const actions = {
    [GET_POKEMON_BY_ID]: async ({commit}, payload) => {
        const fetchPokemon = await fetchPokemonByID(payload.pokemonId)
        if (fetchPokemon !== null) {
            commit(GET_POKEMON_BY_ID, fetchPokemon);
        }
    },
    [GET_POKEMONS_BY_RANGE_OF_ID]: async ({commit, dispatch}, payload) => {
        dispatch(UPDATE_LOADING_STATUS, {loadingStatus: true})
        const startIndex = payload.startIndex;
        const endIndex = payload.endIndex;
        for (let i = startIndex; i <= endIndex; i++) {
            const fetchPokemon = await fetchPokemonByID(i)
            if (fetchPokemon !== null) {
                commit(GET_POKEMON_BY_ID, fetchPokemon)
            }
            dispatch(UPDATE_START_INDEX, {newStartIndexValue: i+1})
        }
        dispatch(UPDATE_LOADING_STATUS, {loadingStatus: false})
    },
    [UPDATE_START_INDEX]: ({commit}, payload) => {
        commit(UPDATE_START_INDEX, payload.newStartIndexValue)
    },
    [UPDATE_LOADING_STATUS]: ({commit}, payload) => {
        commit(UPDATE_LOADING_STATUS, payload.loadingStatus)
    }
}

export default actions;