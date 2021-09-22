<template>
  <section>
    <nav class="">
      <ul class="nav-list flex">
        <li class="nav-items cursor-pointer hover:text-gray-700 transition-opacity">Stock</li>
        <li class="nav-items cursor-pointer hover:text-gray-700 transition-opacity">Sales</li>
        <li class="nav-items cursor-pointer hover:text-gray-700 transition-opacity">Credits</li>
        <li class="nav-items cursor-pointer hover:text-gray-700 transition-opacity">Invoices</li>
        <li class="nav-items cursor-pointer hover:text-gray-700 transition-opacity">Profile</li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
</style>
