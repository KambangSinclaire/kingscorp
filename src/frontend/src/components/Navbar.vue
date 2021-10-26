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
            <router-link to="/">
              <li class="link-items px-4">Home</li>
            </router-link>
            <router-link to="/recent-activity">
              <li class="link-items px-4">Recent</li>
            </router-link>
            <router-link to="/statistics">
              <li class="link-items px-4">Statistics</li>
            </router-link>
            <router-link to="/explore/dashboard">
              <li class="link-items px-4">Explore</li>
            </router-link>
          </ul>
        </nav>
      </div>
      <div class="w-1/3">
        <div class="search-section container flex">
           <i class="fas fa-search"></i>
          <input
            type="search"
            placeholder="Search KingsCorp"
            class="outline-none text-center"
          />
        </div>
      </div>
      <div class="w-1/3">
        <div class="settings container flex justify-end">
          <router-link to="/" class="px-8">
            <i class="far fa-moon"></i>
          </router-link>
          <router-link to="/notification" class="px-8">
            <i class="far fa-bell"></i>
          </router-link>
          <router-link to="/profile" class="px-8">
            <i class="fas fa-user-circle"></i>
          </router-link>
          <router-link to="/settings" class="px-8">
            <i class="fas fa-cog"></i>
          </router-link>
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
