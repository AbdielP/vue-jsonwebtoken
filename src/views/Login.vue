<template>
  <main class="main">
    <h1 class="h1">Vue jasonwebtoken example</h1>
    <div class="container display-flex">
      <img class="container__img" src="../assets/img/vue-dynamic-forms.jpg" alt="Vue form"/>
      <div class="container__form">
        <h2>Login form</h2>
        <form class="form display-flex" @submit.prevent="login">
          <input v-model="username" placeholder="username" />
          <input v-model="password" placeholder="password" type="password" autocomplete="true"/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    <h2 class="h2">Made by @abdielpinzon - Vue CLI 3@</h2>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch(
          `https://backend-node-server.herokuapp.com/api/vueforms/login`,
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100vh;
  background: greenyellow;
  h1,
  h2 {
    text-align: center;
  }
  .h1 {
    text-align: center;
    padding: 60px 0;
    background: olivedrab;
  }
  .container {
    background: cadetblue;
    margin: 0 auto;
    width: 600px;
    .container__img {
      width: 40%;
    }
    .container__form {
        .form {
            flex-direction: column;
        }
    }
  }
}
</style>