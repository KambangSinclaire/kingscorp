<template>
  <section class="settings-container w-full flex">
    <div class="sidebar w-1/6 bg-white border-r-4 border-solid border-gray-100 h-screen">
      <div class="header">
        <h1 class="title p-8 text-center font-black">Settings</h1>
        <hr />
      </div>
      <div class="sidebaar-options">
        <router-link to="/settings/groups">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Groups</span>
        </div>
        </router-link>
        <router-link to="/settings">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Roles</span>
        </div>
        </router-link>
         <router-link to="/settings/permissions">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Permissions</span>
        </div>
         </router-link>
       <router-link to="/settings/preferences">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Preferences</span>
        </div>
         </router-link>
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
          <span>Privacy</span>
        </div>
      </div>
    </div>
    <div class="main-content w-5/6">
   <router-view></router-view>
    </div>
  </section>
</template>

<script>
import { Options, Vue } from "vue-class-component";
export default class Settings extends Vue {}
</script>

<style>
</style>