<template>
 <div class="main-container flex w-full overflow-hidden">
  <!-- <div class="main-container flex max-w-max overflow-hidden"> THIS IS THE REAL AND BEST ACCEPTED DESIGN -->
    <section class="sidebar w-1/4">
      <Sidebar />
    </section>
    <section class="home w-3/4 bg-gray-200">
      <!-- <Welcome :msg="message" /> -->
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Welcome from "@/components/Welcome.vue"; // @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

@Options({
  components: {
    Welcome,
    Sidebar,
  },
})
export default class Home extends Vue {
  data() {
    return {
      message: "Welcome to kingscorp We celebrate you",
    };
  }
}
</script>
