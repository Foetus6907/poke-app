<template>
<div id="app">
    <div>
      <img src="../../public/assets/photoprofile.jpg" height="500"/></div>
    <div>
        <h1>I'm Mohamed Ghoubali, i build this app.</h1>
    </div>
    <div>
        <p>
        You can find the project repository of this app in my 
        <a href="https://github.com/Foetus6907/poke-app">GitHub profil</a>. This PWA is made with Firebase Hosting, VueJs, Bootstrap4 and consume data provided by the <a href="http://pokeapi.co">PokeApi</a>.
        You can follow me on LinkedIn and GitHub, where i regularly post about Firebase and VueJs.
        </p>
    </div>

    <div>
        <a href="https://www.linkedin.com/in/mohamed-ghoubali-9a698187/">
          <img src="../../public/assets/linkedin.svg.png" width="500"/>
        </a>
        <a href="https://github.com/Foetus6907">
          <img src="../../public/assets/github.png" width="500"/>
        </a>
    </div>
</div>
    
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: auto;
}
p {
  margin-right: 10%;
  margin-left: 10%;
}
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}
a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
#githubImg {
  width: 15%;
  height: 15%;
}
#linkedinImg {
  width: 15%;
  height: 15%;
}
</style>
