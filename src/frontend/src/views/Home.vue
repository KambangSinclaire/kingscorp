<template>
  <div class="flex w-full p-8 pt-4">
    <section class="sidebar w-1/6">
      <Sidebar />
    </section>
    <section class="w-5/6">
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
