<template>
  <section class="login-section w-1/2 m-auto relative top-8">
    <form class="form-container basic-blue-gradient">
      <h1 class="white-medium-center-header">kingscorp Welcome's you</h1>
      <h1 class="white-medium-center-header">Login to your account</h1>
      <input
        type="text"
        class="form-control"
        placeholder="Enter your name or email"
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter your password"
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter information here"
      />

      <button class="app-btn" @click.prevent="login">Login</button>

      <small class="text-white relative top-4">We celebrate you!</small>
    </form>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IPC from "../../utils/ipc-renderer.util";
import { AppActionEvents } from "../../events/app.events";

@Options({})
export default class Login extends Vue {
  data() {
    return {
      login: () => {
        IPC.ipcRequestTrigger(AppActionEvents.user.login, {});
      },
    };
  }

  mounted() {
    IPC.ipcResponseHandler(
      AppActionEvents.user.login,
      (event: any, payload: any) => {
        console.log(event);
        console.log(payload);
      }
    );
  }
}
</script>

<style lang="scss" scoped>
</style>