<template>
  <div class="continer">
    <div id="home" class="home">
      <div class="images">
        <img :src="logo" />
        <img :src="man" />
      </div>
      <h1>{{ name }}</h1>
      <p>{{ pitch }}</p>
    </div>
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
        "Aspiring Full-stack developer looking for employment in the front-end development world"
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  margin: -1;
}
.home {
  display: grid;
  color: white;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: url("../assets/UNDERWATER.jpg") no-repeat;
}
.images {
  display: inline-block;
  margin: 7em auto 0 auto;
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
