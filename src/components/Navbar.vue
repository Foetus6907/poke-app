<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <router-link class="navbar-brand" to="/" tag="a">
        <img id="logo" alt="Vue logo" src="../assets/strawhatball.png">
      </router-link>

      <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <button type="button" class="btn btn-light mr-sm-0 mr-md-2 mb-xs-2 mb-sm-2 mb-md-2 mb-lg-0 mb-2 p-0" data-ripple-color="dark">
            <router-link active-class="active" class="nav-item nav-link pr-4 pl-4 pb-2 pt-2" to="/">Home</router-link>
          </button>
          <button type="button" class="btn btn-light mr-sm-0 mr-md-2 mb-xs-2 mb-sm-2 mb-md-2 mb-lg-0 mb-2 p-0" data-ripple-color="dark">
            <router-link active-class="active" tag="li" class="nav-item nav-link pr-4 pl-4 pb-2 pt-2" to="/followme">Follow Me</router-link>
          </button>
          <button type="button" class="btn btn-light mr-sm-0 mr-md-2 mb-xs-2 mb-sm-2 mb-md-2 mb-lg-0 mb-2 p-0" data-ripple-color="dark">
            <router-link active-class="active" tag="li" class="nav-item nav-link pr-4 pl-4 pb-2 pt-2" to="/contactme">Contact</router-link>
          </button>
          <!--<router-link custom active-class="active" class="nav-item nav-link" to="/">
            <button type="button" class="btn btn-light mr-2" data-ripple-color="dark">
              Home
            </button>
          </router-link>
          <router-link custom active-class="active" tag="li" class="nav-item nav-link" to="/followme">
            <button type="button" class="btn btn-light mr-2" data-ripple-color="dark">
              Follow Me
            </button>
          </router-link>
          <router-link custom active-class="active" tag="li" class="nav-item nav-link" to="/contactme">
            <button type="button" class="btn btn-light mr-2" data-ripple-color="dark">
              Contact
            </button>
          </router-link>-->

        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#logo {
  width: 25%;
  height: 25%;
}
</style>
