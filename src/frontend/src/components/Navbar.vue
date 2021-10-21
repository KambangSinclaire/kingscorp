<template>
  <section class="border-b pb-2">
    <!-- <nav class="flex justify-between items-center pt-8">
      <router-link to="/">
        <div class="logo-section w-40">
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
    </nav> -->
    <nav class="flex items-center w-full">
      <div class="w-1/3">
        <nav class="container">
          <ul class="nav-links flex justify-start">
            <li class="link-items px-4">Home</li>
            <li class="link-items px-4">Recent</li>
            <li class="link-items px-4">Statistics</li>
            <li class="link-items px-4">Explore</li>
          </ul>
        </nav>
      </div>
      <div class="w-1/3">
        <div class="search-section container flex">
          <img src="@/assets/feather_icons/search.svg" alt=""/>
          <input type="search" placeholder="Search Nolicorp" class="outline-none"/>
        </div>
      </div>
      <div class="w-1/3">
        <div class="settings container flex justify-end">
          <img src="@/assets/feather_icons/moon.svg" alt="" class="px-8" />
          <img src="@/assets/feather_icons/user.svg" alt="" class="px-8" />
          <img src="@/assets/feather_icons/bell.svg" alt="" class="px-8" />
          <img src="@/assets/feather_icons/settings.svg" alt="" class="px-8" />
        </div>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
.nav-items {
  padding: 1rem;
  margin: 0rem 1rem;
}
.nav-items:hover {
  border-radius: 50%;
  background: #22ade4b0;
  color: white;
}
</style>
