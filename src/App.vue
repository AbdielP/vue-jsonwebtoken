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
}

.display-flex {
  display: flex;
}
</style>
