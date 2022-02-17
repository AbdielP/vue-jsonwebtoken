<template>
  <div>
    <h1>User info</h1>
    <label
      >User data
      <hr />
      <ul v-if="userinfo">
        <li>First name: {{userinfo.firstname}}</li>
        <li>Lastname name: {{userinfo.lastname}}</li>
        <li>Username: {{ userinfo.username }}</li>
        <li>Email: {{ userinfo.email }}</li>
      </ul>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "User",
  data() {
    return {
      userinfo: "",
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  ...mapMutations(["setToken"]),
  methods: {
    async getUserInfo() {
      try {
        const response = await fetch(`https://backend-node-server.herokuapp.com/api/vueforms/user/info?token=${this.getToken}`, {
        // const response = await fetch(`http://localhost:3000/api/vueforms/user/info?token=${this.getToken}`,{
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data)
        !data.ok ? this.errorHandler(data.err) : this.userinfo = data.user;
      } catch (error) {
        console.log(error);
      }
    },
    errorHandler(err) {
      console.log('bro, a ver..')
      if (err.name === "TokenExpiredError") {
        localStorage.removeItem("jwtapptoken");
        this.setToken(null);
        return this.$router.push("/auth/login");
      }
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>