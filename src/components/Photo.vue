<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="main">
      <div id="photo" class="photo">
        <h3>Photography</h3>
        <img
          @click="showMultiple"
          src="../assets/Photos/sunnBW.jpg"
          class="image"
        />
        <VueEasyLightbox
          :visible="visible"
          :imgs="images"
          :index="index"
          @hide="handleHide"
        ></VueEasyLightbox>
      </div>
      <div class="music">
        <h3>Music</h3>
        <a :href="[city]"><img src="../assets/cityPlanners.jpg"/></a>
        <a :href="[lady]"><img src="../assets/ladySnowblood.jpg"/></a>
        <a :href="[nick]"><img src="../assets/nick.jpg"/></a>
      </div>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

const context = require.context("../assets/Photos/", true, /\.jpg$/);
const images = context.keys().map(context);
// console.log(images);
export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      title: "Art",
      images: [],
      titles: "Click To See More Photos",
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
      this.index = 0; // index of imgList
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
.container {
  display: grid;
  grid-template-rows: 1fr 10fr;
  width: 100vw;
  height: 110vh;
  background: url("../assets/fade.jpg") no-repeat;
  margin: 0;
}
h1 {
  display: grid;
  justify-content: center;
  grid-row: 1;
  font-size: 36px;
  color: white;
  font-family: "Amatic SC", cursive;
  margin: 1em;
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.photo {
  display: inline-block;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
  margin-left: 2em;
  color: white;
}
.image {
  display: grid;
  max-width: 33em;
  height: 30em;
  justify-content: center;
  margin: 1em 1em;
}
.image:hover {
  cursor: pointer;
  transform: scale(1.15);
  transition: 0.5s;
}

h3 {
  font-size: 24px;
  color: white;
}

.music {
  display: inline-block;
  grid-column: 2;
  grid-row: 2;
  margin: 0;
}
.music a img {
  display: inline-block;
  max-width: 11em;
  height: 30em;
  margin: 0 0 1em 0;
  cursor: pointer;
}
.music a img:hover {
  transform: scale(1.15);
  transition: 0.5s;
}
</style>
