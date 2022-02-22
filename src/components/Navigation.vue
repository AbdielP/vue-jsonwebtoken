<template>
  <nav class="nav display-flex">
    <div class="container">
      <router-link class="nav__link" to="/auth/me">My profile</router-link>
      <!-- set here more router links -->
    </div>
    <router-link class="nav__link" v-if="isLoggedIn === false" to="/auth/login">Login</router-link>
    <button class="btn__logout"
      type="button"
      v-if="isLoggedIn === true"
      @click="logOut"
      aria-labelby="Logout">
      Logout
    </button>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn", "getToken"]),
  },
  methods: {
    ...mapMutations(["setToken"]),
    logOut() {
      this.setToken(null);
      localStorage.removeItem("jwtapptoken");
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background: var(--color-white);
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}

.nav__link,
.btn__logout {
  cursor: pointer;
}

.nav__link {
  text-decoration: none;
  color: var(--color-background);
}

.btn__logout {
  border: none;
  padding: 5px 10px;
  font-weight: 900;
  border-radius: 5px;
  color: var(--color-white);
  background: var(--color-background);
}.btn__logout:hover {
  background: var(--background-light);
}
</style>