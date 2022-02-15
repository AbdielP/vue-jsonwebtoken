<template>
  <div>
    <Navigation v-if="$route.name !== 'Login'" />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.display-flex {
  display: flex;
}
</style>
