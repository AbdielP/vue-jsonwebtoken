<template>
    <div class="container__background" />   
</template>

<script>
export default {
  name: "Background",
};
</script>

<style lang="scss" scoped>
.container__background {
  position: absolute;
  background: url("../assets/img/background.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  z-index: 1;
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>