<template>
  <div class="container">
    <div class="navbar">
      <ul>
        <li>
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/photo">Art</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueRouter from "./index";

export default {
  data: function() {
    return {
      routes: VueRouter.routes
    };
  },
  methods: {
    home() {
      this.$router.push("home");
    },
    projects() {
      this.$router.push("projects");
    },
    about() {
      this.$router.push("about");
    },
    photo() {
      this.$router.push("photo");
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  background: url("../assets/fade.jpg") no-repeat;
  width: 100vw;
  height: 10vh;
  justify-content: flex-end;
  align-content: center;
}

ul {
  display: flex;
  flex-direction: row;
  margin-right: 5em;
  list-style: none;
}

.nav-link {
  margin: 5px 10px;
  cursor: pointer;
  font-family: "Amatic SC", cursive;
  font-size: 32px;
  color: white;
  text-decoration: none;
}
.nav-link:hover {
  color: skyblue;
}
</style>
