<template>
    <div>
        <p>{{ pokemonId }}</p>
    </div>
</template>

<script>
    export default {
        name: "PokemonDetail",
        props:{            
            pokemonId: {
                Number,
                required:true
            }
        },
        data(){
            return {

            }
        },
        methods:{},
        


    }
</script>

<style scoped>

</style>
