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
#footer p {
  display: flex;
  justify-content: flex-start;
  background: url("../assets/fade.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  font-size: 16px;
  font-family: "Libre Barcode 128", cursive;
  margin: 0;
  padding: 1em;
  border-top: solid pink 1px;
  border-bottom: solid pink 1px;
}
</style>
