<template>
  <div class="container">
    <section id="projects" class="projects">
      <h1>{{ title }}</h1>
      <div class="proj-images">
        <a
          v-for="project in projects"
          :key="project"
          :href="project[0]"
          target="_blank"
        >
          <img :src="project[1]" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import github from "../assets/GitHub.jpg";
import piano from "../assets/piano.jpg";
import venue from "../assets/venue.jpg";
import not from "../assets/not.jpg";
import IP from "../assets/IP.jpg";

export default {
  data: function() {
    return {
      title: "Projects",
      projects: [
        ["https://github.com/NickLargey", github],
        ["https://venue-location.herokuapp.com", venue],
        ["https://github.com/NickLargey/ipGeolocation", IP],
        ["https://twitter.com/notDarnielle", not],
        ["http://browserpiano.netlify.com", piano],
         ]
    };
  }
};
</script>

<style scoped>
.projects {
  display: grid;
  width: 100vw;
  height: auto;
  color: white;
  background: url("../assets/fade.jpg") no-repeat;
  background-size: cover;
  padding-bottom: 4em;
}
h1 {
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-family: "Amatic SC", cursive;
}

img {
  display: inline-block;
  margin: 0 2em 2em 0;
  max-width: 25em;
  height: auto;
  transition: 0.2s;
  vertical-align: middle;
}
img:hover {
  transform: scale(1.15);
}
</style>
