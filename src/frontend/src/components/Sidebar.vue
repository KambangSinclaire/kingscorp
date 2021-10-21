<template>
  <!-- <section
    class="sidebar w-full h-full bg-white bg-gradient-to-r app-custom-gradient"
  >
    <div class="side-links flex flex-col items-center justify-center">
      <div class="nav-items">
        <router-link to="/" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/monitor.svg" alt="" />
          <span class="nav-title">Dashboard</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Products">
        <router-link :to="routes.product.list" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/gift.svg" alt="" />
          <span class="nav-title">Products</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Stock">
        <router-link to="/stock" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/award.svg" alt="" />
          <span class="nav-title">Stock</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Inventory">
        <router-link to="/inventory" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/inbox.svg" alt="" />
          <span class="nav-title">Inventory</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Sales">
        <router-link to="/sales" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/dollar-sign.svg" alt="" />
          <span class="nav-title">Sales</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Credits">
        <router-link to="/credits" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/credit-card.svg" alt="" />
          <span class="nav-title">Credits</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Invoices">
        <router-link to="/invoice" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/briefcase.svg" alt="" />
          <span class="nav-title">Invoices</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/personnel" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/users.svg" alt="" />
          <span class="nav-title">Personnels</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Notifications">
        <router-link to="/notification" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/bell.svg" alt="" />
          <span class="nav-title">Notifications</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/profile" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/user.svg" alt="" />
          <span class="nav-title">Profile</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/settings" class="sidebar-nav-items">
          <span class="icon">
            <img src="@/assets/feather_icons/settings.svg" alt="" />
          </span>
          <span class="nav-title">Settings</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/logout" class="sidebar-nav-items">
          <span class="icon">
            <img src="@/assets/feather_icons/log-out.svg" alt="" />
          </span>
          <span class="nav-title">Logout</span>
        </router-link>
      </div>
    </div>
  </section> -->

  <section>
    <div class="first-card px-8 py-4 rounded-sm border border-solid">
      <div class="logo py-6">
        <img src="@/assets/feather_icons/user.svg" alt="" />
      </div>
      <div class="app-description">
        <p class="text py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          et debitis ipsum? Nesciunt recusandae quas
        </p>
        <button class="department-button">
          <img src="@/assets/feather_icons/user.svg" alt="" />
          Create Department
        </button>
      </div>
      <div class="popular-links flex flex-col">
        <span> Products </span>
        <span> Stock </span>
      </div>
    </div>

    <div class="second-card px-8 py-4 rounded-sm border border-solid my-8">
      <h2>Quick</h2>
      <div class="help-links flex flex-col">
        <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/activity.svg" class="pr-4" alt="" />
         Recent activity
        </spa>
         <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/archive.svg" class="pr-4" alt="" />
         Archived resources
        </spa>
         <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/help-circle.svg" class="pr-4" alt="" />
         Get Help
        </spa>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
@Options({
  computed: {
    // GET REACTIVE UPDATES FROM STORE
    getPref() {
      let preferences = this.$store.getters.getPreferences;
      return preferences;
    },
  },
})
export default class Sidebar extends Vue {
  data() {
    return {
      routes: {
        product: {
          list: "/products",
          edit: "/product/edit",
          delete: "/products/delete",
          add: "/products/add",
        },
      },
      preferences: {
        Stock: true,
        Products: true,
        Notifications: true,
        Sales: true,
        Credits: true,
        Inventory: true,
        Invoices: true,
      },
    };
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  border-right: 1px solid #8080802e;
  cursor: w-resize;
}
</style>