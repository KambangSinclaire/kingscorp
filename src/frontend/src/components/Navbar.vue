<template>
  <section>
    <nav class="">
      <ul class="nav-list flex">
        <!-- <li
          class="
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
        <router-link to="Stock">
          Stock
        </router-link>
        </li>
        <li
          class="
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
        <router-link to="Sales">
          Sales
        </router-link>
        </li>
        <li
          class="
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
        <router-link to="Credits">
          Credits
        </router-link>
        </li>
        <li
          class="
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
        <router-link to="Invoice">
          Invoices
        </router-link>
        </li> -->
        <li
          class="
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
        <router-link to="/personnel">
          Personnels
        </router-link>
        </li>

          <li
          class="
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
        <router-link to="/login">
          Login
        </router-link>
        </li>
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
