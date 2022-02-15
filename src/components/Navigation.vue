<template>
  <nav class="nav">
    <router-link class="nav__link" to="/auth/me">User</router-link>
    <router-link class="nav__link" v-if="isLoggedIn === false" to="/auth/login">Login</router-link>
    <button
      type="button"
      v-if="isLoggedIn === true"
      @click="logOut"
      aria-labelby="Logout">
      Logout
    </button>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn", "getToken"]),
  },
  methods: {
    logOut() {
      localStorage.removeItem("jwtapptoken");
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style lang="sass" scoped>
.nav
    background: #ccc
    padding: 5px

    .nav__link
        text-decoration: none
        margin: 0 5px
        color: #fff
        &:hover
            color: #D8D8D8
</style>