<template>
  <main class="main">
    <section class="container">
      <h1 class="h1">ENCODED TOKEN
          <img class="icon" src="../assets/svg/code-solid.svg" alt="code icon">
      </h1>
      <textarea class="textarea" rows="8" v-model="getToken"></textarea>
    </section>
    <section class="container">
      <hr class="hr" />
    </section>
    <section class="container" v-if="userdata">
      <h2 class="h2">DECODED TOKEN
          <img class="icon" src="../assets/svg/code-solid.svg" alt="code icon">
      </h2>
      <textarea class="textarea" rows="8">{
          "firstname" : "{{ userdata.firstname }}",
          "lastname"  : "{{ userdata.lastname }},
          "username"  : "{{ userdata.username }}",
          "gender" : "{{ userdata.gender }}",
          "email"  : "{{ userdata.email }}"
}
                </textarea
      >
    </section>
    <section class="container">
        <h3 class="h3">TOKEN EXPIRATION TIME:
            <img class="icon icon-sm" src="../assets/svg/stopwatch-20-solid.svg" alt="code icon">
        </h3>
        <span>3 Minutes</span>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import UserData from "@/shared/user-data";
export default {
  name: "Token",
  data() {
    return {
      userdata: "",
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  methods: {
    ...mapMutations(["setToken"]),
    async getUserInfo() {
      const data = await UserData.getUserInfo(this.getToken);
      !data.ok ? this.errorHandler(data.err) : this.userdata = data.user;
    },
    errorHandler(err) {
      // console.log(err)
      if (err.name === "TokenExpiredError") {
        localStorage.removeItem("jwtapptoken");
        this.setToken(null);
        return this.$router.push("/auth/login");
      }
    }
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss" scoped>
.main {
  color: var(--color-background);
}

.container {
  max-width: 600px;
  padding: 15px;
  margin: auto;
}

h1,
h2,h3 {
  font-size: 14px;
  margin-bottom: 0.6em;
}

h1 {
  margin-top: 1.5em;
}

.icon {
    width: 1.1em;
    filter: var(--color-background-filter);
}.icon-sm {
    width: .9em;
}

.hr {
    border: 1px solid #f8f8f8;
}

.textarea {
  width: 100%;
  padding: .5em;
  line-height: 1.4;
  font-size: 0.7rem;
  border-radius: 5px;
  background: #f8f8f8;
  letter-spacing: 0.12em;
  border: 1px solid var(--color-white);
  color: var(--color-blue-light);
}

@media (min-width: 400px) {
    h1,
    h2,h3 {
        font-size: 16px;
    }
    .textarea {
        padding: 1.2em;
        font-size: 0.9rem;
    }
}
</style>