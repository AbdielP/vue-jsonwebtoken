<template>
  <div class="main__container">
    <div class="container__background" />
    <section class="section__form display-flex">
      <h1 class="h1">
        Vue <span class="h1__span">jasonwebtoken</span> example
      </h1>

      <div class="container">
        <div class="container__img">
          <img class="img" src="../assets/img/ROSA.png" alt="Vue form" />
        </div>
        <div class="container__form display-flex">
          <h2 class="h2">INSERT YOUR USER AND PASSWORD</h2>
          <form class="form display-flex" @submit.prevent="login">
            <input
              class="input input__text"
              v-model="username"
              placeholder="Username"
              type="text"
            />
            <input
              class="input input__text"
              v-model="password"
              placeholder="Password"
              type="password"
              autocomplete="true"
            />
            <button class="input btn__login" type="submit">LOGIN</button>
          </form>
          <p class="paragraph">Doesn't have an account yet?</p>
          <router-link class="link" to="/auth/signin"
            >Please register here...</router-link
          >
        </div>
      </div>

      <!-- <h3 class="h3">Made in Vue CLI 3@ by <a class="link link__blue" href="https://github.com/AbdielP">@abdielpinzon</a></h3> -->
      <h3 class="h3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
        explicabo?
      </h3>
    </section>
  </div>
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
  background-color: #212f4f;
  text-align: center;
}
.container__background,
.section__form {
  position: absolute;
}
.container__background {
  background: url("../assets/img/background.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  z-index: 1;
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.section__form {
  // background: red;
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

.h1__span {
  color: var(--color-gray);
  font-weight: 900;
}

.container {
  background: var(--background-light);
  // max-width: 675px;
  padding: 15px;
  margin: 15px;
  margin-top: 0;
  border-radius: 5px;
  left: 0;
  right: 0;
}

.container__form {
  flex-direction: column;
}

.img {
  width: 62%;
  border-radius: 10px 0;
}

.h2 {
  font-size: 13px;
  margin: 18px 0;
  color: var(--color-blue);
  letter-spacing: 1px;
}

.form {
  flex-direction: column;
}

.input {
  padding: 15px 10px;
  border-radius: 5px;
  color: var(--color-white);
}

.input__text,
.btn__login,
.paragraph,
.h1 {
  letter-spacing: 1.2px;
}

.input__text {
  border: 1px solid var(--color-white);
  background: none;
  padding: 10px;
  margin: 5px 0;
}

.btn__login {
  // background: #819ff7;
  background: var(--color-blue);
  font-weight: 900;
  cursor: pointer;
  border: none;
  margin: 25px 0;
}

.link {
  display: block;
  margin: 5px 0;
  color: var(--color-orange);
  font-style: italic;
}
.link__blue {
  color: var(--color-blue);
}

.h3 {
  margin: 20px 10px;
  font-weight: 400;
  font-size: 15px;
}

@media (min-width: 700px) {
  
.h1 {
  font-size: 2.6vw;
  font-weight: 400;
  padding: 5vw 0 3vw 0;
}
  
.container {
  display: flex;
  width: 675px;
}

.container__img {
  width: 30%;
  position: relative;
}

.img {
  position: absolute;
  border-radius: 0;
  width: 120%;
  right: 3%;
  bottom: .5%;
}

  .container {
    margin: auto;
  }

.container__form {
  width: 70%;
  padding: 2vw;
}

.h2, .paragraph, .link {
  text-align: start;
  font-size: 1vw;
}


.h3 {
  font-size: initial;
  margin-top: 2.5vw;
}


}

// https://kevin-powell.ck.page/87e4f27ed0
</style>
