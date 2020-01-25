<template>
  <div id="home" class="home">
    <div class="images">
      <img :src="logo" />
      <img :src="man" />
    </div>
    <h1>{{ name }}</h1>
    <p>{{ pitch }}</p>
  </div>
</template>

<script>
import logo from "../assets/server-client.svg";
import man from "../assets/waiter.svg";

export default {
  data: function() {
    return {
      name: "Nick Largey",
      logo: logo,
      man: man,
      pitch:
        "Aspiring Full-stack developer seeking  employment in the front-end development world"
    };
  }
};
</script>

<style scoped>
.home {
  display: grid;
  width: 100%;
  height: auto;
  margin: 0;
  background: url("../assets/UNDERWATER.jpg") no-repeat;
  background-size: cover;
}
.images {
  display: inline-block;
  margin: 6em auto 0 auto;
}
h1 {
  margin: 0.5em auto 0 auto;
  font-size: 72px;
  font-family: "Amatic SC", cursive;
}
p {
  margin: 0 auto 10em auto;
  font-size: 26px;
}
</style>
