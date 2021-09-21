<template>
  <section class="w-full bg-white bg-gradient-to-t h-screen">
    <div class="side-links flex flex-col items-center justify-center">
      <div class="nav-items">
        <router-link to="/" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/home.svg" alt="">
          <span class="nav-title">Home</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/about" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/inbox.svg" alt="">
          <span class="nav-title">Inbox</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/about" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/airplay.svg" alt="">
          <!-- <img src="@/assets/material_icons/add-circle.svg" /> -->
          <span class="nav-title">About</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/about" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/user.svg" alt="">
          <span class="nav-title">About</span>
          
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/about" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/mail.svg" alt="">
          <span class="nav-title">Send Email</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/about" class="sidebar-nav-items">
          <span class="icon"> 
            <img src="@/assets/feather_icons/log-out.svg" alt="">
          </span>
          <span class="nav-title">Logout</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/login" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/log-in.svg" alt="">
          <span class="nav-title">Login</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Sidebar extends Vue {}
</script>

<style scoped lang="scss">
</style>