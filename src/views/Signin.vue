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
              <label class="label__error">First name is required</label> <!-- First name is required -->
              <BaseInput v-model="firstname" label="First Name"/>
            </div>
            <div class="container__label display-flex">
              <label class="label__error">Last name is required</label> <!-- Last name is required -->
              <BaseInput v-model="lastname" label="Last Name"/>
            </div>
          </div>

          <!-- Second row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <label class="label__error">Username is required</label> <!-- Username is required -->
              <BaseInput v-model="username" label="Username"/>
            </div>
            <div class="container__label display-flex">
              <label class="label__error">Password is required</label> <!-- Password is required -->
              <BaseInput type="password" v-model="password" label="Password" autocomplete="off" />
            </div>
          </div>

          <!-- Third row - CONVERT INTO COMPONENT--> 
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <span class="span__gender">Select a gender</span>
              <div class="container__radio display-flex">
                <label class="label__radio">Male
                  <input class="input__radio" v-model="gender" type="radio" value="male">
                  <span class="radio__span"></span>
                </label>
                <label class="label__radio">Female
                  <input class="input__radio" v-model="gender" type="radio" value="female">
                  <span class="radio__span"></span>
                </label>
              </div>
            <label class="label__error">Gender is required</label> <!-- Gender is required -->
            </div>
          </div>
        </section>

        <section class="section">
          <h2 class="h2">CONTACT INFO</h2>
          <hr class="hr">
          <!-- Fourth row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <label class="label__error">Email is required</label> <!-- Email is required -->
              <BaseInput type="email" v-model="email" label="Email Address"/>
            </div>
          </div>

          <!-- Fifth row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <label class="label__error">Please select and option or insert a number</label> <!-- Please select and option or insert a number -->
              <!-- Contact number -->
              <div class="container__phone display-flex">
                <BaseSelect v-model="contactNumberType"/>
                <BaseInput v-model="contactNumber" label="Contact number" />
              </div>
            </div>
          </div>

          <!-- Sixth row -->
          <div class="container__input display-flex">
            <div class="container__label display-flex">
              <!-- Extra contact number -->
              <div class="container__phone display-flex" v-for="(row, index) in rows" :key="index">
                <BaseSelect v-model="row.type"/>
                <BaseInput v-model="row.number" label="Contact number"/>
                <button class="btn__remove"
                  @click="removeRow(index)"
                  type="button"
                  aria-labelledby="Remove number">
                  <img src="../assets/svg/icon-delete.svg" alt="Delete">          
                </button>
              </div>
            </div>
          </div>
          
          <button class="btn__phone btn__main w-50" @click="addRow" type="button" aria-labelledby="Add phone">
            Add phone
          </button>
        </section>
        <button type="submit" class="btn__main btn__submit">CREATE ACCOUNT</button>
      </form>
    </div>
  </main>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import Background from '@/components/Background.vue';
import BaseSelect from '@/components/BaseSelect.vue';
export default {
  name: "Signin",
  components: {
    BaseInput,
    Background,
    BaseSelect
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      gender: "",
      contactNumber: "",
      email: "",
      contactNumberType: "",
      rows: [],
    };
  },
  computed: {
    btnDisabled() {
      return this.disabled;
    }
  },
  methods: {
    async signIn() {
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
              firstname: this.firstname,
              lastname: this.lastname,
              username: this.username,
              password: this.password,
              gender: this.gender,
              contactNumber: this.contactNumber,
              email: this.email,
              contactNumberType: this.contactNumberType,
              rows: this.rows,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {}
    },
    addRow() {
      if(this.rows.length < 3) {
        this.rows.push({
          type: "",
          number: "",
        });
      }
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
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
.label__radio  {
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

@media (min-width: 700px) {
  .form {
    margin: 0 auto;
  }
  .container__input {
    flex-direction: row;
  }

  .container__label {
    padding: 3px;
  }

  .w-50 {
    width: 50%;
  }
}
</style>