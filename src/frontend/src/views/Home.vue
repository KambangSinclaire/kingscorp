<template>
  <div class="w-full p-8 pt-12 text-center flex flex-col">
    <div class="logo-section container">
      <img src="@/assets/logo.jpg" alt="Logo" class="w-3/4 mx-auto" />
    </div>
    <div class="note-section mt-16">
      <!-- <p class="pt-12 font-extrabold text-3xl w-1/2 mx-auto">
      Managing the next generation of software solutions without any hassel
      </p> -->
      <p
        class="
          font-extralight
          text-3xl
          w-1/2
          mx-auto
          shadow
          rounded-lg
          bg-gradient-to-r
          from-gray-500
          via-blue-400
          to-black
          p-8
          text-white
          italic
        "
      >
        Your all in one shop and documentation service center.
      </p>
      <router-link to="/login">
        <button class="app-btn mt-12 font-bold">Check in</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {
  data() {
    return {
      message: "Welcome to kingscorp We celebrate you",
    };
  }
}
</script>
<style lang="scss" scoped>
</style>