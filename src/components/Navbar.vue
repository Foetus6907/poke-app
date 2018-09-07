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
            <a class="nav-item nav-link active" style="color:black;" href="#">Home</a>
            <a class="nav-item nav-link" style="color:black;" href="#">Follow Me</a>
            <a class="nav-item nav-link" style="color:black;" href="#">Contact</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#logo {
  width: 50%;
  height: 50%;
}
.nav-link {
  color: black;
}
</style>
