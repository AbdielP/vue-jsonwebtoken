<template>
  <main>
    <h1>Create account!</h1>
    <section class="section__form">
      <form @submit.prevent="signIn" class="form display-flex">
        <BaseInput v-model="firstname" label="First Name"/>
        <BaseInput v-model="lastname" label="Last Name"/>
        <BaseInput v-model="username" label="Username"/>
        <BaseInput type="password" v-model="password" label="Password"/>
        <BaseInput type="email" v-model="email" label="Email Address"/>
        <!-- Contact number -->
        <div class="display-flex">
          <select v-model="type">
            <option value="" disabled selected>-</option>
            <option value="mobile">Mobile</option>
            <option value="phone">Phone</option>
          </select>
          <BaseInput v-model="number" label="Contact number"/>
        </div>
        <!-- Extra contact number -->
        <div v-for="(row, index) in rows" :key="index" class="display-flex">
          <select v-model="row.type">
            <option value="" disabled selected>-</option>
            <option value="mobile">Mobile</option>
            <option value="phone">Phone</option>
          </select>
          <BaseInput v-model="row.number" label="Contact number"/>
          <button
            @click="removeRow(index)"
            type="button"
            aria-labelledby="Remove number"
          >
            Remove -
          </button>
        </div>
        <button @click="addRow" type="button" aria-labelledby="Add phone +">
          Add phone +
        </button>
        <br />
        <button type="submit">Sign in</button>
      </form>
    </section>
  </main>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
export default {
  name: "Signin",
  components: {
    BaseInput
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      number: "",
      email: "",
      type: "",
      rows: [],
    };
  },
  methods: {
    async signIn() {
      try {
        const response = await fetch(
          // `https://backend-node-server.herokuapp.com/api/vueforms/signin`,
          `http://localhost:3000/api/vueforms/signin`,
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
              number: this.number,
              email: this.email,
              type: this.type,
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
.section__form {
  margin: auto;
  width: 50%;
  .form {
    flex-direction: column;
  }
}
</style>