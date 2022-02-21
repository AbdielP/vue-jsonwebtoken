<template>
  <div class="main__container">
    <Background />
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
            <label class="label__error"></label> <!-- Username is required -->
            <BaseInput v-model="username" label="Username"/>
            <label class="label__error"></label> <!-- Password is required -->
            <BaseInput type="password" v-model="password" label="Password" autocomplete="on" />
            <button class="btn__main btn__login" type="submit">LOGIN</button>
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
import Background from '@/components/Background.vue';
import BaseInput from '@/components/BaseInput.vue';
import { mapMutations } from "vuex";
export default {
  name: "Login",
  components: {
    Background,
    BaseInput
  },
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

<style lang="scss" scoped>
.main__container {
  background-color: var(--color-background);
  text-align: center;
}

.h1__span {
  color: var(--color-gray);
  font-weight: 900;
}

.container {
  background: var(--background-light);
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
  margin: 10px 0;
  color: var(--color-blue);
  letter-spacing: 1px;
}

.form {
  flex-direction: column;
}

.btn__login,
.paragraph,
.h1 {
  letter-spacing: 1.2px;
}

.btn__login {
  padding: 15px 10px;
  border-radius: 5px;
  font-weight: 900;
  margin: 25px 0;
}

.link {
  display: block;
  margin: 5px 0;
  color: var(--color-orange);
  font-style: italic;
}.link:hover {
  color: var(--color-orange-light);
  transition: 0.3s ease-in-out;
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
  .container {
    display: flex;
    width: 675px;
    margin: auto;
  }

  .container__img {
    width: 30%;
    position: relative;
  }

  .img {
    position: absolute;
    border-radius: 0;
    width: 110%;
    right: 3%;
    bottom: .5%;
  }

  .container__form {
    width: 70%;
    padding: .2vw .8vw .8vw;
  }

  .h2, .paragraph, .link {
    text-align: start;
  }

  .paragraph {
    font-size: 14px;
  }

  .link {
    font-size: 14px;
  }

  .h3 {
    font-size: initial;
    margin-top: 2.5vw;
  }
}

// https://kevin-powell.ck.page/87e4f27ed0
</style>
