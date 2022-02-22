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

.label__error {
  min-height: 18.8px;
  // background: rebeccapurple;
}

.label__span {
  color: var(--color-red);
  font-size: 13px;
  letter-spacing: 1px;
  padding: 3px;
}

.input__error {
  border: 1px solid var(--color-red)!important;
}

.btn__main {
  background: var(--color-blue);
  color: var(--color-white);
  border-radius: 5px;
  cursor: pointer;
  border: none;
}.btn__main:hover, .btn__main:focus {
  background: var(--color-blue-light);
  transition: 0.3s ease-in-out;
}.btn__main:disabled {
  background: var(--color-blue-light);
  cursor: initial;
  opacity: .3;
}

@media (min-width: 700px) {
  .label__error {
    text-align: start;
  }
}
</style>
