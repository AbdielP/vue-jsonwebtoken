<template>
  <nav class="nav display-flex">
    <div class="container">
<<<<<<< HEAD
      <router-link class="nav__link" to="/auth/me">My profile</router-link>
      <!-- set here more router links -->
=======
      <router-link class="nav__link" to="/auth/me">
        My profile <img class="logo" src="../assets/svg/user-solid.svg" alt="user logo">
      </router-link>
      <router-link class="nav__link" to="/auth/token">
        Token info <img class="logo--xl" src="../assets/svg/code-solid.svg" alt="token logo">
      </router-link>
>>>>>>> 5a497a9859ee8e23363f77c46df05d8698fdb1c0
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
<<<<<<< HEAD
=======
  font-size: 1rem;
  padding: .2em .3em;
>>>>>>> 5a497a9859ee8e23363f77c46df05d8698fdb1c0
  text-decoration: none;
  color: var(--color-background);
}

<<<<<<< HEAD
=======
.logo {
  width: .75em;
  filter: var(--color-background-filter);
}.logo--xl {
  width: 1em;
  filter: var(--color-background-filter);
}

>>>>>>> 5a497a9859ee8e23363f77c46df05d8698fdb1c0
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