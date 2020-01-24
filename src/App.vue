<template>
  <div id="app">
    <div class="container">
      <!-- <Navbar /> -->
      <Home />
      <Projects />
      <About />
      <Photo />
      <Footer />
    </div>
  </div>
</template>

<script>
// import Navbar from "./router/Navbar.vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Photo from "./components/Photo.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    // Navbar,
    Home,
    Projects,
    About,
    Photo,
    Footer
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  color: white;
  background: black;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Amatic SC", cursive;
  overflow-x: hidden;
}
</style>
