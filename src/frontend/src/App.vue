
<template>
  <div id="nav" class="py-4">
    <Navbar />
  </div>
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
import Sidebar from "./components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";


@Options({
  components: {
    Sidebar,
    Navbar,
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #448bf7;
    }
  }
}
</style>
