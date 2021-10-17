<template>
  <section>
    <nav class="flex justify-between items-center pt-8">
      <router-link to="/">
        <div class="logo-section w-40">
          <img src="@/assets/logo.jpg" alt="logo" class="w-full" />
        </div>
      </router-link>
      <ul class="nav-list flex">
        <li
          class="
            px-8
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
          <router-link to="/profile">
            <span>
              <img src="@/assets/feather_icons/user-check.svg" alt="profile" />
            </span>
          </router-link>
        </li>

        <li
          class="
            px-8
            nav-items
            cursor-pointer
            hover:text-gray-700
            transition-opacity
          "
        >
          <router-link to="/login">
            <span>
              <img src="@/assets/feather_icons/log-in.svg" alt="profile" />
            </span>
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
.nav-items{
  padding: 1rem;
  margin: 0rem 1rem;
}
.nav-items:hover {
  border-radius: 50%;
  background: #22ade4b0;
  color: white;
}
</style>
