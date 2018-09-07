<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <a class="navbar-brand" href="#">
            <img id="logo" alt="Vue logo" src="../assets/logo.png">
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" style="color:black;" to="/">Home</router-link>
                <router-link class="nav-item nav-link" style="color:black;" to="/followme">Follow Me</router-link>
                <router-link class="nav-item nav-link" style="color:black;" to="/contactme">Contact</router-link>
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
