<template>
  <div id="app">
    <!-- <Navbar /> -->
    <Home />
    <Projects />
    <About />
    <Photo />
    <Footer />
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
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: white;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Amatic SC", cursive;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  body,
  #app {
    width: 768px;
    height: auto;
  }
}
@media (max-width: 375px) {
  body,
  #app {
    width: 375px;
    height: auto;
  }
}
</style>
