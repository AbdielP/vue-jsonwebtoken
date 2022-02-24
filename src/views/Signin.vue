<template>
  <main>
    <Background />
    <h1 class="h1">SIGN IN</h1>
    <div class="section__form">
      <form @submit.prevent="signIn" class="form display-flex">

        <section class="section">
          <h2 class="h2">PERSONAL INFO</h2>
          <hr class="hr">
          <!-- First row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <label class="label__error">
                <span class="label__span" v-for="(error, index) of v$.form.firstname.$errors" :key="index">{{ error.$message }}</span>
              </label> <!-- First name is required -->
              <BaseInput :class="{ input__error: v$.form.firstname.$errors.length }" v-model="v$.form.firstname.$model" label="First Name"/>
            </div>
            <div class="container__label display-flex">
              <label class="label__error">
                <span class="label__span" v-for="(error, index) of v$.form.lastname.$errors" :key="index">{{ error.$message }}</span>
              </label> <!-- Last name is required -->
              <BaseInput :class="{ input__error: v$.form.lastname.$errors.length }" v-model="v$.form.lastname.$model" label="Last Name"/>
            </div>
          </div>

          <!-- Second row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <label class="label__error">
                <span class="label__span" v-if="formUnique.username" >Username already exists</span>  
                <span class="label__span" v-for="(error, index) of v$.form.username.$errors" :key="index">{{ error.$message }}</span>  
              </label> <!-- Username is required -->
              <BaseInput :class="[v$.form.username.$errors.length ? 'input__error' : '', formUnique.username ? 'input__error' : '']" v-model="v$.form.username.$model" label="Username"/>
            </div>
            <div class="container__label display-flex">
              <label class="label__error">
                <span class="label__span" v-for="(error, index) of v$.form.password.$errors" :key="index">{{ error.$message }}</span>  
              </label> <!-- Password is required -->
              <BaseInput :class="{ input__error: v$.form.password.$errors.length }" type="password" v-model="v$.form.password.$model" label="Password" autocomplete="off" />
            </div>
          </div>

          <!-- Third row - CONVERT INTO COMPONENT--> 
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <span class="span__gender">Select a gender</span>
              <div class="container__radio display-flex">
                <label class="label__radio">Male
                  <input class="input__radio" :class="{ input__error: v$.form.gender.$errors.length }" v-model="v$.form.gender.$model" type="radio" value="male">
                  <span class="radio__span"></span>
                </label>
                <label class="label__radio">Female
                  <input class="input__radio" :class="{ input__error: v$.form.gender.$errors.length }" v-model="v$.form.gender.$model" type="radio" value="female">
                  <span class="radio__span"></span>
                </label>
              </div>
              <label class="label__error">
                <span class="label__span" v-for="(error, index) of v$.form.gender.$errors" :key="index">{{ error.$message }}</span>
                <span class="label__span" v-if="!v$.form.gender.$dirty">Please select a gender</span>
              </label> <!-- Gender is required -->
            </div>
          </div>
        </section>

        <section class="section">
          <h2 class="h2">CONTACT INFO</h2>
          <hr class="hr">
          <!-- Fourth row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <label class="label__error">
                <span class="label__span" v-if="formUnique.email" >Email already registered</span>
                <span class="label__span" v-for="(error, index) of v$.form.email.$errors" :key="index">{{ error.$message }}</span>
              </label> <!-- Email is required -->
              <BaseInput :class="[v$.form.email.$errors.length ? 'input__error' : '', formUnique.email ? 'input__error' : '']" type="email" v-model="v$.form.email.$model" label="Email Address"/>
            </div>
          </div>

          <!-- Fifth row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <!-- Extra contact number -->
              <div class="container__phone display-flex extra-margin" v-for="(row, index) in form.rows" :key="index">
                <BaseSelect class="select__width" v-model="row.type"/>
                <BaseInput class="input__width" v-model="row.number" label="Contact number"/> 
                <button class="btn__remove"
                  @click="removeRow(index)" v-if="index > 0"
                  type="button"
                  aria-labelledby="Remove number">
                  <img src="../assets/svg/icon-delete.svg" alt="Delete">          
                </button>
              </div>
            </div>
          </div>
          
          <button class="btn__phone btn__main" @click="addRow" type="button" aria-labelledby="Add phone">
            Add phone
          </button>
        </section>
        <button :disabled="v$.form.$invalid || showSpinner" type="submit" class="btn__main btn__submit">
          <span v-if="!showSpinner">CREATE ACCOUNT</span>
          <Spinner v-if="showSpinner" />
        </button>
        <span class="label__span label__error" v-if="v$.form.$invalid">Please complete the form to create your user</span>
      </form>
      <div class="link__container">
        <router-link class="link__login display-flex" to="/auth/login">
          <img class="img__arrow" src="../assets/svg/arrow-left-long-solid.svg" alt="Arrow left">
          BACK TO LOGIN
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import Background from '@/components/Background.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import Spinner from '@/components/Spinner.vue'
import useVuelidate from '@vuelidate/core'
import Swal from 'sweetalert2'
import { required, minLength, maxLength, alpha, alphaNum, email, sameAs } from '@vuelidate/validators'
export default {
  name: "Signin",
  components: {
    BaseInput,
    Background,
    BaseSelect,
    Spinner
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        gender: "",
        email: "",
        rows: [],
      },
      formUnique: {
        username: false,
        email: false
      },
      showSpinner: false
    };
  },
  created () {
    this.addRow();
  },
  methods: {
    async signIn() {
      this.showSpinner=!false;
      try {
        const response = await fetch(
          `https://backend-node-server.herokuapp.com/api/vueforms/signin`,
          // `http://localhost:3000/api/vueforms/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname: this.form.firstname,
              lastname: this.form.lastname,
              username: this.form.username,
              password: this.form.password,
              gender: this.form.gender,
              email: this.form.email,
              rows: this.form.rows,
            }),
          }
        );
        const data = await response.json();
        this.showSpinner=!true;
        data.ok ? this.swal('Success!', data, 'success') : this.fieldsUnique(data)
      } catch (error) {
        console.log(error)
        this.showSpinner=!true;
      }
    },
    addRow() {
      if(this.form.rows.length < 3) {
        this.form.rows.push({
          type: "",
          number: "",
        });
      }
    },
    removeRow(index) {
      this.form.rows.splice(index, 1);
    },
    swal(title, data, icon) {
      Swal.fire({
        title: title,
        text: data.message,
        icon: icon
      })
    },fieldsUnique(data) {
      console.log(data)
      const { email, username } = data.error.errors;
      if (username) this.formUnique.username =!false;
      if (email) this.formUnique.email =!false;
    }
  },
  validations () {
    return {
      form: {
        firstname: {
          alpha,
          required,
          max: maxLength(25)
        },
        lastname: {
          alpha,
          required,
          max: maxLength(25)
        },
        username: {
          required,
          min: minLength(4),
          max: maxLength(20)
        },
        password: {
          required,
          min: minLength(8),
          max: maxLength(20)
        },
        gender: {
          required
        },
        email: {
          required, email,
          max: maxLength(30)
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.extra-margin {
  margin-top: 10px;
}

h1 {
  text-align: center;
  font-weight: 400;
  margin: 30px 0 25px;
}

.h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}

.hr {
  margin: 10px 0;
}

.form {
  margin: 15px;
  padding: 25px;
  max-width: 700px;
  background: var(--background-light);
}

.section {
  margin-bottom: 15px;
}

.form,
.container__input,
.container__label {
  flex-direction: column;
}

.container__label {
  width: 100%;
}

.span__gender, 
.btn__phone,
.btn__submit,
.label__radio,
.link__login  {
  letter-spacing: 1.2px;
}

// CUSTOM RADIO

.span__gender {
  font-size: 14px;
  margin: 5px 0;
}

.label__radio {
  display: block;
  position: relative;
  padding-left: 35px;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input__radio {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.radio__span {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.label__radio:hover .input__radio ~ .radio__span {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.label__radio .input__radio:checked ~ .radio__span {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.radio__span:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.label__radio .input__radio:checked ~ .radio__span:after {
  display: block;
}

/* Style the checkmark/indicator */
.label__radio .radio__span:after {
  left: 7px;
  top: 3px;
  width: 3px;
  height: 6.5px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.container__radio {
  max-width: 200px;
  // padding: 3px;
  justify-content: space-between;
}

// CUSTOM RADIO END

.container__phone {
  width: 100%;
  // background: greenyellow;
}

.btn__phone {
  background: var(--color-white);
  color: var(--color-blue);
  margin-top: 3px;
  padding: 8px;
  width: 90.6%;
}

.btn__remove {
  background: none;
  cursor: pointer;
  padding: 10px;
  border: none;
}

.btn__submit {
  padding: 12px;
  font-weight: 900;
}

.select__width {
  width: 30%;
}.input__width {
  width: 60%;
}

.link__container {
  // background: green;
  margin: 15px;
  max-width: 700px;
}

.link__login {
  font-size: 14px;
  font-weight: 900;
  align-items: center;
  text-decoration: none;
  color: var(--color-background);
  // background: rebeccapurple;
}

.img__arrow {
  filter: invert(13%) sepia(75%) saturate(674%) hue-rotate(187deg) brightness(93%) contrast(88%);
  margin-right: 10px;
  width: 25px;
}

@media (min-width: 700px) {

  .form, 
  .link__container {
    margin: 0 auto;
  }
  .container__input {
    flex-direction: row;
  }

  .container__label {
    padding: 3px;
  }

  .btn__phone {
    width: 30%;
  }

  .link__login {
    margin: 15px auto 0;
  }

  .w-50 {
    width: 50%;
  }
}
</style>