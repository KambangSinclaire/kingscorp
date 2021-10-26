<template>
  <section class="container w-1/2 m-auto relative top-20">
    <form
      class="container border shadow rounded-lg p-8 flex flex-col items-center"
    >
      <h1 class="medium-center-header pb-4">
        Personnel CheckIn Authentication
      </h1>
      <div class="input-element w-full relative my-4">
        <input
          type="text"
          placeholder="Personnel Name"
          class="form-control"
          v-model="user.username"
        />
        <i class="fas fa-users-cog cursor-pointer absolute top-6 right-8"></i>
      </div>
      <div class="input-element w-full relative my-4">
        <input
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="user.password"
        />
        <i class="fas fa-eye cursor-pointer absolute top-6 right-8"></i>
      </div>
      <button class="app-btn" @click="login">
        <i class="fas fa-sign-in-alt"></i>
        Login
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IPC from "../../utils/ipc-renderer.util";
import { AppActionEvents } from "../../events/app.events";

@Options({
  methods: {
    login() {
      if (this.user.username !== "" && this.user.password !== "") {
        this.$store.dispatch(AppActionEvents.user.login, this.user);
        this.$router.push("/explore/dashboard");
      } else {
        alert("Please login");
      }
    },
  },
  mounted() {
    // check if already logged in
    if (this.$store.getters.isLoggedIn) {
      this.$router.push("/explore/dashboard");
    }
  },
})
export default class Login extends Vue {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  }
}
</script>

<style lang="scss" scoped>
</style>