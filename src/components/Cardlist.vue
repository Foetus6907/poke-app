<template>
    <div class="row" style="display: flex ">
        <div class="col-xs-2 col-md-2 co-lg-2" style="float:left;display: flex;justify-content: center;align-items: center;justify-items: center;">
          <span class="badge badge-primary" style="width:25%;">{{ pokemon.id }}</span>
        </div>
        <div class="col-xs-2 col-md-3 co-lg-3" style="float:left;display: flex;justify-content: center;align-items: center;justify-items: center;">
        <img class="card-img-top" :src="pokemon.sprites.front_default" alt="Card image cap">
        </div>
        <div class="card-body col-xs-8 row" style="display:  flex;justify-content:  center;align-items:  center;">
          <div class="col-xs-5 col-md-6 co-lg-6">
            <h5 class="card-title">{{ capitalizePokeName() }}</h5>
            <label :id="'versionGroup' + pokemon.id">{{pokemon.version_group.name}}</label>    
            <br/>
            <label :id="'formName' + pokemon.id">{{pokemon.form_name}}</label>
          </div>
          <div class="col-xs-5" style="display: flex;justify-items: center;align-items: center; margin: auto;">
            <a href="#" class="btn btn-primary">Fiche complete</a>
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
.btn-primary {
  color: #1d2124;
  background-color: #007bff8c;
  border: none;
}

.badge-primary {
  color: #1d2124;
  background-color: #007bff8c;
  border-color: #007bff8c;
}
</style>
