<template>
  <main class="main">
    <section class="section section--dark">
      <div class="container">
        <h1 class="h1">Hi, my name is <span class="h1__span">{{userinfo.firstname}}</span></h1>
        <figure class="profile"></figure>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <h2 class="h2">About me</h2>
        <p class="paragraph">My full name is {{userinfo.firstname}} {{userinfo.lastname}} and i'm a {{userinfo.gender}}. 
          I chose {{userinfo.username}} as my username and i'm just looking around this web site.
        </p>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <h2 class="h2">Contact info</h2>
        <h3 class="h3">My contact email is
          <a class="link__email" :href="'mailto:' + userinfo.email">{{userinfo.email}}</a>
        </h3>
        
        <div class="container__phone display-flex">
          <span class="span__type_phone">{{userinfo.contactNumberType}}</span>
          <div class="container__number_phone display-flex">
            <span>{{userinfo.contactNumber}}</span>
            <img class="phone__icon phone" src="../assets/svg/phone-flip-solid.svg" alt="phone flip icon">
            <img class="phone__icon whatsapp" src="../assets/svg/whatsapp-brands.svg" alt="whatsapp icon">
          </div>
        </div>

        <template v-if="contactNumbers">
          <div v-for="info in contactNumbers" :key="info.number" class="container__phone display-flex">
            <span class="span__type_phone">{{info.type}}</span>
            <div class="container__number_phone display-flex">
              <span>{{info.number}}</span>
              <img class="phone__icon phone" src="../assets/svg/phone-flip-solid.svg" alt="phone flip icon">
              <img class="phone__icon whatsapp" src="../assets/svg/whatsapp-brands.svg" alt="whatsapp icon">
            </div>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "User",
  data() {
    return {
      userinfo: "",
      contactNumbers: []
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
        !data.ok ? this.errorHandler(data.err) : this.userinfo = data.user, this.contactNumbers = data.usernumbers;
      } catch (error) {
        console.log(error);
      }
    },
    errorHandler(err) {
      console.log(err)
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

<style lang="scss" scoped>
.main {
  text-align: center;
}

.section--dark {
  color: var(--color-white);
  background: var(--background-light);
}.section--white {
  color: var(--color-background);
  background: var(--color-white);
}

.container {
  max-width: 600px;
  padding: 35px 15px;
  margin: auto;
}

.h1,
.h2 {
  font-weight: 400;
}

.h1,
.h2,
.h3,
.paragraph,
.span__phone_number,
.span__type_phone {
  letter-spacing: 1.2px;
}

.h1 {
  font-size: 2.4rem;
}.h1__span {
  display: block;
  font-weight: 900;
}

.profile {
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border-radius: 50%;
  display: inline-block;
  background-size: 100%;
  border: 5px solid var(--color-white);
  background-image: url('../assets/img/male1.jpg');
}

.paragraph {
  padding: 20px 0;
}

.h3 {
  display: inline-block;
  font-size: 1.5rem;
  padding: 12px 0 20px;
}

.link__email {
  display: block;
  font-size: 16px;
  margin-top: 5px;
  font-weight: initial;
  color: var(--color-orange);
}

.span__type_phone {
  background: var(--color-white);
  text-transform: capitalize;
  border-radius: 30px;
  color: #25D366;
  font-weight: 900;
  padding: 3px 10px;
  font-size: 12px;
}

.container__number_phone {
  width: 180px;
  justify-content: space-evenly;
  align-items: center;
}

.container__phone {
  padding: 15px 10px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-white);
}

.phone__icon {
  width: 18px;
}.whatsapp {
  filter: invert(57%) sepia(82%) saturate(409%) hue-rotate(90deg) brightness(98%) contrast(97%);
}.phone {
  filter: invert(99%) sepia(3%) saturate(105%) hue-rotate(262deg) brightness(116%) contrast(90%);
}

</style>