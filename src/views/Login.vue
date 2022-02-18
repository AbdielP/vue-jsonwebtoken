<template>
  <div class="main__container">
    <div class="container__background" />
    <div class="container__form display-flex">
      <h1 class="h1">Vue jasonwebtoken example</h1>
      <div class="container">
        <!-- ¿Y si mejor pones un div con un bg?  -->
        <img class="img" src="../assets/img/vue-dynamic-forms.jpg" alt="Vue form"/>
        <form class="form display-flex" @submit.prevent="login">
          <input class="input input__text" v-model="username" placeholder="username" type="text"/>
          <input class="input input__text" v-model="password" placeholder="password" type="password" autocomplete="true" />
          <button class="input btn__login" type="submit">Login</button>
        </form>
        <router-link to="/auth/signin">Sign in</router-link>
      </div>
      <h2 class="h2">Made by @abdielpinzon - Vue CLI 3@</h2>
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
.main__container {
  background-color: #212F4F;
  text-align: center;
  .container__background {
    background: url("../assets/img/background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    opacity: .7;
    z-index: 1;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
  .container__form, .input {
      color: #FAFAFA;
  }
  .container__form {
    // background: red;
    flex-direction: column;
    position: absolute;
    width: 100%;
    z-index: 2;
    .h1 {
      padding: 50px 0 30px 0;
    }
    .container {
      background: #1d2d40;
      max-width: 675px;
      padding: 15px;
      margin: 15px;
      margin-top: 0;
      // margin: auto;
      border-radius: 5px;
      left: 0;
      right: 0;
      .img {
        width: 40%;
      }
      .form {
        flex-direction: column;
        .input {
          padding: 10px;
          border-radius: 3px;
        }
        .input__text {
          border: 1px solid #fafafa;
          background-color: none;
          // REMOVER EL BG
          margin: 5px 0;
        }
        .btn__login {
          background: #819FF7;
          border: none;
        }
      }
    }
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
