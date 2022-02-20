<template>
  <main>
    <Background />
    <h1 class="h1">Create account!</h1>
    <section class="section__form">
      <form @submit.prevent="signIn" class="form display-flex">
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

        <!-- Third row -->
        <div class="container__input display-flex">
          <div class="container__label display-flex">
            <label class="label__error">Email is required</label> <!-- Email is required -->
            <BaseInput type="email" v-model="email" label="Email Address"/>
          </div>
          <div class="container__label display-flex">
            <label class="label__error">NO TEXT HERE</label> <!-- NO TEXT HERE -->
             <!-- Contact number -->
            <div class="container__phone display-flex">
              <BaseSelect v-model="contactNumberType"/>
              <BaseInput v-model="contactNumber" label="Contact number"/>
            </div>
          </div>
        </div>
        
       
        <!-- Extra contact number -->
        <div v-for="(row, index) in rows" :key="index" class="display-flex">
          <BaseSelect v-model="row.type"/>
          <BaseInput v-model="row.number" label="Contact number"/>
          <button
            @click="removeRow(index)"
            type="button"
            aria-labelledby="Remove number"
          >Remove - </button>
        </div>
        <button @click="addRow" type="button" aria-labelledby="Add phone +">
          Add phone +
        </button>
        
        <span class="span__gender">Select a gender</span>
        <div class="container__radio display-flex">
          <label class="label__radio">Male
            <input v-model="gender" type="radio" value="male">
            <span class="radio__span"></span>
          </label>
           <label class="label__radio">Female
            <input v-model="gender" type="radio" value="female">
            <span class="radio__span"></span>
          </label>
        </div>
        <br />
        <button type="submit">Sign in</button>
      </form>
    </section>
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
      this.rows.push({
        type: "",
        number: "",
      });
      console.log(this.rows);
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
.form {
  margin: 15px;
  padding: 15px;
  background: var(--background-light);
  max-width: 700px;
}

.form,
.container__input,
.container__label {
  flex-direction: column;
}

.container__label {
  width: 100%;
}

.span__gender {
  font-size: 12px;
}

.container__radio {
  max-width: 200px;
  // padding: 3px;
  align-items: center;
  justify-content: space-between;
}

.container__phone {
  width: 100%;
  background: greenyellow;
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
}
</style>