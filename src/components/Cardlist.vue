<template>

  <div class="card">
    <div class="card-horizontal">
      <div class="img-square-wrapper m-auto">
        <img v-if="pokemon.sprites.front_default != null" :src="pokemon.sprites.front_default" alt="Card image cap">
        <img v-else-if="pokemon.sprites.front_female != null" :src="pokemon.sprites.front_female" alt="Card image cap">
        <img v-else-if="pokemon.sprites.front_shiny != null" :src="pokemon.sprites.front_shiny" alt="Card image cap">
        <img v-else-if="pokemon.sprites.front_shiny_female != null" :src="pokemon.sprites.front_shiny_female" alt="Card image cap">
        <p v-else>No image found</p>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-center align-content-center">
          <h5 class="card-title mb-1">{{ capitalizePokeName() }} </h5>
          <h6 class="ml-2 mb-1"><span class="badge small rounded-pill bg-info">{{ pokemon.id }}</span></h6>
        </div>
        <p class="card-text mb-1">{{pokemon.version_group.name}} {{pokemon.form_name}}</p>
        <router-link tag="button" class="btn btn-primary btn-sm" :to="{ name : 'pokemondetail', params:{ pokemonId : this.pokemon.id}}">Fiche complete</router-link>
      </div>
      <div class="img-square-wrapper m-auto">
        <img v-if="pokemon.sprites.back_default != null" :src="pokemon.sprites.back_default" alt="Card image cap">
        <img v-else-if="pokemon.sprites.back_female != null" :src="pokemon.sprites.back_female" alt="Card image cap">
        <img v-else-if="pokemon.sprites.back_shiny != null" :src="pokemon.sprites.back_shiny" alt="Card image cap">
        <img v-else-if="pokemon.sprites.back_shiny_female != null" :src="pokemon.sprites.back_shiny_female" alt="Card image cap">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["pokemon"],
  methods: {
    capitalizePokeName() {
      return (
        this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
      );
    }
  }
};
</script>

<style scoped>
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
</style>
