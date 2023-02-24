<template>
  <nav>
    <section class="avtar"> </section>
    <section class="router">
    <router-link to="/blogs">Blog</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/demos">Demos</router-link>
    <router-link to="/notes">Notes</router-link>
    <router-link to="/recommend">Recommend</router-link>
    <a href="https://twitter.com/florence_lmj"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://github.com/Lmj19960729"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.zhihu.com/people/florencelmj"><i class="fa-brands fa-zhihu"></i></a>
  </section>
  </nav>
    <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b5b7b9;
  background-color: #fff;
  min-height: 100vh;
}

nav .router{
  padding:25px;
  display: flex;
  justify-content: end;
  margin:0 30px;
  background:rgb(225, 219, 219);
}

nav a {
  text-decoration: none;
  margin: 10px;
  font-weight: 500;
  font-size: large;
  color: #2c3e50;
}

nav a:hover {
  color: #42b983;
}

</style>
