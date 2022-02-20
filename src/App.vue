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
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  --color-orange-light: #fa9e41;
  --color-blue-light: #328add;
  --background-light: #1d2d40;
  --color-orange: #ff8000;
  --color-white: #f2f2f2;
  --color-blue: #0174df;
  --color-red: #fa6565;
  --color-gray: #ccc;
  --color-background: #212f4f;
}

.display-flex {
  display: flex;
}

.section__form {
  position: absolute;
  color: var(--color-white);
  flex-direction: column;
  width: 100%;
  z-index: 2;
}

.h1 {
  font-size: 32px;
  font-weight: 400;
  padding: 50px 0 30px 0;
}

.label__error {
  color: var(--color-red);
  font-size: 10px;
  height: 14px;
}

.input-text--error {
  border: 1px solid var(--color-red);
}

@media (min-width: 700px) {
  .h1 {
    font-size: 36px;
    font-weight: 400;
    padding: 4.5vw 0;
  }

  .label__error {
    text-align: start;
  }
}
</style>
