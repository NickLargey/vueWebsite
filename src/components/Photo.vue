<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <div id="photo" class="photo">
      <h3>{{ photo }}</h3>
      <img @click="showMultiple" src="../assets/Photos/sunnBW.jpg" class="image" />
      <VueEasyLightbox :visible="visible" :imgs="images" :index="index" @hide="handleHide"></VueEasyLightbox>
    </div>
    <div class="music">
      <h3>{{ music }}</h3>
      <a :href="[city]">
        <img src="../assets/cityPlanners.jpg" />
      </a>
      <a :href="[lady]">
        <img src="../assets/ladySnowblood.jpg" />
      </a>
      <a :href="[nick]">
        <img src="../assets/nick.jpg" />
      </a>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

const context = require.context("../assets/Photos/", true, /\.jpg$/);
const images = context.keys().map(context);

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      title: "Art",
      photo: "Photography",
      music: "Music",
      images: [],
      visible: false,
      index: 0,
      nick: "https://nicklargey.bandcamp.com/",
      city: "https://cityplanners.bandcamp.com/releases",
      lady: "https://ladysnowbloodsound.bandcamp.com/"
    };
  },
  computed: {},
  methods: {
    showMultiple() {
      this.images = images;
      this.index = 0;
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
.main {
  display: grid;
  grid-template-rows: 1fr 6fr;
  width: 100%;
  height: auto;
  background: url("../assets/fade.jpg") no-repeat;
  background-size: cover;
}

.main h1 {
  text-align: center;
  font-size: 36px;
  font-family: "Amatic SC", cursive;
  margin: 1rem auto 0 auto;
}

.main .photo {
  display: grid;
  justify-content: center;
  text-align: center;
  grid-column: 1;
  grid-row: 2;
  margin-left: 2rem;
}
.main .image {
  display: grid;
  width: 37rem;
  height: 40rem;
  /* padding-top: -2rem; */
}
.image:hover,
.music a img:hover {
  cursor: pointer;
  transform: scale(1.15);
  transition: 0.5s;
}

.main h3 {
  margin: 1em;
  font-size: 24px;
}

.music {
  display: grid;
  justify-content: center;
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  padding-right: 5em;
}
.music a img {
  display: grid;
  grid-column: 2;
  grid-row: 2;
  width: 20rem;
  height: 20rem;
  margin: 1rem 0 1rem 0;
}

@media (max-width: 768px) {
  .main {
    width: 768;
    height: auto;
  }
  .music a img {
    display: grid;
    width: 9rem;
    height: 10rem;
    margin: 1rem 0 1rem 0;
  }
  .main .image {
    display: grid;
    width: 20rem;
    height: 20rem;
    justify-content: center;
    margin: 1em 1em;
  }
}
</style>
