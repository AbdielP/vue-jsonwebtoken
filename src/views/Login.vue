<template>
  <div class="container">
    <div class="container__background" />
    <div class="container__form">
      <h1 class="h1">Vue jasonwebtoken example</h1>
    </div>
  </div>
  <!-- <main class="main">
    <div class="background"></div>
    <div class="container display-flex">
      <h1 class="h1">Vue jasonwebtoken example</h1>
      <img
        class="container__img"
        src="../assets/img/vue-dynamic-forms.jpg"
        alt="Vue form"
      />
      <div class="container__form">
        <h2>Login form</h2>
        <form class="form display-flex" @submit.prevent="login">
          <input v-model="username" placeholder="username" />
          <input
            v-model="password"
            placeholder="password"
            type="password"
            autocomplete="true"
          />
          <button type="submit">Login</button>
        </form>
        <router-link to="/auth/signin">Sign in</router-link>
      </div>
    </div>
    <h2 class="h2">Made by @abdielpinzon - Vue CLI 3@</h2>
  </main> -->
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["setToken"]),
    async login() {
      try {
        const response = await fetch(
          `https://backend-node-server.herokuapp.com/api/vueforms/login`,
          // `http://localhost:3000/api/vueforms/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          }
        );
        const data = await response.json();
        data.ok ? this.afterLogin(data) : console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    },
    afterLogin(data) {
      this.setToken(data.token);
      localStorage.setItem("jwtapptoken", data.token);
      this.$router.push("/auth/me");
    },
  },
};
</script>

<style lang="scss">
.container {
  background-color: #212F4F;
  .container__background {
    background: url("../assets/img/background.png");
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    opacity: 1;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    z-index: 1;
  }
  .container__form {
    background: red;
    position: absolute;
    z-index: 2;
  }
}
// .main {
//   width: 100%;
//   height: 100vh;
//   background: #000;
//   .background {
//     background: url("../assets/img/background.png");
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center center;
//     opacity: 1;
//     -webkit-filter: blur(10px);
//     filter: blur(10px);
//     z-index: 1;
//   }
  
//   .container {
//     background: cadetblue;
//     margin: 0 auto;
//     width: 600px;
//     z-index: 100;
//     h1,
//     h2 {
//       text-align: center;
//     }
//     .h1 {
//       text-align: center;
//       padding: 60px 0;
//     }
//     .container__img {
//       width: 40%;
//     }
//     .container__form {
//       .form {
//         flex-direction: column;
//       }
//     }
//   }
// }
// https://kevin-powell.ck.page/87e4f27ed0
</style>
