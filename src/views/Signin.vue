<template>
  <main>
    <h1>Create account!</h1>
    <section class="section__form">
      <form @submit.prevent="signIn" class="form display-flex">
        <input v-model="firstname"
          type="text"
          placeholder="First name"
          aria-labelledby="First name"
        />
        <input v-model="lastname"
          type="text"
          placeholder="Last name"
          aria-labelledby="Last name"
        />
        <input v-model="username" type="text" placeholder="Username" aria-labelledby="Username" />
        <input v-model="password"
          type="password"
          placeholder="Password"
          aria-labelledby="Password"
        />
        <!-- Email -->
        <input v-model="email" type="email" placeholder="Email" aria-labelledby="Email" />
        <!-- Contact number -->
        <div class="display-flex">
            <select v-model="type">
                <option value="" disabled selected>-</option>
                <option value="mobile">Mobile</option>
                <option value="phone">Phone</option>
            </select>
           <input v-model="number" type="text" placeholder="Contact number" aria-labelledby="Contact number" />
        </div>
        <!-- Extra contact number -->
        <div v-for="(row, index) in rows" :key="index" class="display-flex">
            <select>
                <option value="" disabled selected>-</option>
                <option value="mobile">Mobile</option>
                <option value="phone">Phone</option>
            </select>
           <input type="text" placeholder="Contact number" aria-labelledby="Contact number" />
           <button @click="removeRow(index)" type="button" aria-labelledby="Remove number">Remove -</button>
        </div>
        <button @click="addRow" type="button" aria-labelledby="Add phone +">Add phone +</button>
        <br>
        <button type="submit">Sign in</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      type: "",
      number: "",
      rows: []
    };
  },
  methods: {
    signIn() {
      console.log(this.rows);
    },
    addRow() {
        this.rows.push([{
            type: "",
            number: ""
        }])
    },
    removeRow (index) {
        this.rows.splice(index, 1)
    }
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