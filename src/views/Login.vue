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
            <label class="label__error">
              <span class="label__span" v-for="(error, index) of v$.form.username.$errors" :key="index">{{ error.$message }}</span>
            </label> <!-- Username is required -->
            <BaseInput v-model="v$.form.username.$model" label="Username" :class="{ input__error: v$.form.username.$errors.length }" />
            <label class="label__error">
              <span class="label__span" v-for="(error, index) of v$.form.password.$errors" :key="index">{{ error.$message }}</span>  
            </label> <!-- Password is required -->
            <BaseInput type="password" v-model="v$.form.password.$model" label="Password" autocomplete="on" :class="{ input__error: v$.form.password.$errors.length }" />
            <label class="label__error text-center">
              <span v-if="errorMessage" class="label__span">{{errorMessage}}</span>
            </label>
            <button :disabled="v$.form.$invalid || showSpinner" class="btn__main btn__login" type="submit">
              <span v-if="!showSpinner">LOGIN</span>
              <Spinner v-if="showSpinner" />
            </button>
          </form>
          <p class="paragraph">Doesn't have an account yet?</p>
          <router-link class="link" to="/auth/signin"
            >Please register here...</router-link
          >
        </div>
      </div>
      <h3 class="h3">
        A VueJS jasonwebtoken application with form validations
      </h3>
    </section>
  </div>
</template>

<script>
import Background from '@/components/Background.vue';
import BaseInput from '@/components/BaseInput.vue';
import Spinner from '@/components/Spinner.vue'
import useVuelidate from '@vuelidate/core'
import { mapMutations } from "vuex";
import { required } from '@vuelidate/validators'
export default {
  name: "Login",
  components: {
    Background,
    BaseInput,
    Spinner
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showSpinner: false,
      errorMessage: ''
    };
  },
  methods: {
    ...mapMutations(["setToken"]),
    async login() {
      this.showSpinner=!false;
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
              username: this.form.username,
              password: this.form.password,
            }),
          }
        );
        const data = await response.json();
        data.ok ? this.afterLogin(data) : this.errorHandler(data)
      } catch (error) {
        console.log(error);
        this.showSpinner=!true;
      }
    },
    afterLogin(data) {
      this.setToken(data.token);
      localStorage.setItem("jwtapptoken", data.token);
      this.showSpinner=!true;
      this.$router.push("/auth/me");
    },
    errorHandler(data) {
      console.log(data);
      const { message }  = data;
      this.showSpinner=!true;
      this.errorMessage = message;
    }
  },
  validations () {
    return {
      form: {
        username: { 
          required
        },
        password: {
           required 
        }
      }
    }
  }
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

.h1 {
  font-size: 32px;
  font-weight: 400;
  padding: 50px 0 30px 0;
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
  // margin: 25px 0;
  margin-bottom: 25px;
}

.link {
  max-width: 150px;
  margin: 5px 0;
  color: var(--color-orange);
  font-style: italic;
}.link:hover {
  color: var(--color-orange-light);
  transition: 0.3s ease-in-out;
}

.h3 {
  margin: 20px 10px;
  font-weight: 400;
  font-size: 15px;
}

.text-center {
  text-align: center;
}

@media (min-width: 700px) { 

  .h1 {
    font-size: 36px;
    font-weight: 400;
    padding: 4.5vw 0;
  }

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
