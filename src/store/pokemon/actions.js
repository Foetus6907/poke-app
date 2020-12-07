import { GET_POKEMON_BY_ID } from "@/store/pokemon/types";
import axios from "axios";

const actions = {
    [GET_POKEMON_BY_ID]: ({commit}, payload) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-form/${payload.pokemonId}`)
            .then((response) => {
                const fetchPokemon = response.data;
                commit(GET_POKEMON_BY_ID, fetchPokemon);
            })
            .catch((error) => console.log('Error fetching pokemon', error));
    }
}

export default actions;