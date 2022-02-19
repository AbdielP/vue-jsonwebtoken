<template>
  <div>
    <Navigation v-if="isLoggedIn === true" />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Navigation,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style lang="scss">
* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  --color-orange: #FF8000;
  --color-white: #F2F2F2;
  --color-blue: #0174DF;
  --color-gray: #ccc;

  --background-light: #1d2d40;
}

.display-flex {
  display: flex;
}
</style>
