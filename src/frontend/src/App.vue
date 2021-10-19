<template>
  <div id="nav" class="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-200">
    <Navbar />
  </div>
  <Home id="nav" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "@/views/Home.vue";
import Navbar from "@/components/Navbar.vue";
import ElectronUI from "@/utils/electron.util.ts";
@Options({
  components: {
    Home,
    Navbar,
  },
  computed: {
    wait() {
      ElectronUI.ipcRenderer.on("getProducts", (data: any) => {
        alert("Hello here ");
      });
    },
  },
  watch: {
    wait2() {
      ElectronUI.ipcRenderer.on("getProducts", (data: any) => {
        alert("Hello here ");
      });
    },
  },
  updated() {
    this.wait2;
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 0px 40px 40px 40px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #448bf7;
    }
  }
}
</style>
