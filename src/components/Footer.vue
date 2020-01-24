<template>
  <div id="footer">
    <p>{{ footer }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      footer: "© Nick Largey"
    };
  }
};
</script>

<style scoped>
.home {

}
#footer p {
  display: flex;
  justify-content: start;
  align-items: bottom;
  width: 100vw;
  background: url("../assets/fade.jpg") no-repeat;
  width: 100%;
  height: 5vh;
  color: white;
  font-size: 16px;
  font-family: "Libre Barcode 128", cursive;
  margin: 0;
}
</style>
