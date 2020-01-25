<template>
  <div class="about">
    <h1>About</h1>
    <p>
      I began programming in python casually while working as a general manager in the restaurant industy.
      After spending many years, many late nights and many long weeks putting out metephorical fires and
      feeling pretty stagnant, I decided I needed to change careers to one that was much more fulfilling
      and offered challenges I wasn't getting in my daily routine. I began taking programming more seriously
      and fell in love with it. I began working in web development which appealed to mostly because of the
      continuous immediate feedback you receive, but also because the internet and distributed computing are
      becoming more and more ingrained in our everyday lives, and I think it's important to know how it works
      in order to make educated decisions on everything from what to purchase to how it's effecting legislation
      around the globe. My goal is to become a full stack developer, but front end development is where I would like to start
      that path.
      <br />Please see my
      <button @click="showSingle">resume</button>
      <vue-easy-lightbox
        escDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>for more information on my employment history.
    </p>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import resume from "../assets/resumeNickLargey.jpg";

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: "",
      visible: false
    };
  },
  methods: {
    showSingle() {
      this.imgs = resume;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
/* .container {
  display: grid;
} */

.about {
  display: grid;
  width: 100%;
  height: auto;
  justify-content: center;
  margin: 0;
  background: url("../assets/rocky-beach.jpg") no-repeat;
  background-size: cover;
}

h1 {
  font-size: 42px;
  font-family: "Amatic SC", cursive;
  margin-top: 1em;
}

p {
  display: grid;
  font-size: 24px;
  font-family: "Amatic SC", cursive;
  justify-content: center;
  margin: 0 2em 4em 2em;
}
button {
  width: 6em;
  height: 2em;
  justify-content: center;
  font-size: 24px;
  font-family: "Amatic SC", cursive;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  margin: 1em auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.25);
}
button:hover {
  cursor: pointer;
}
</style>
