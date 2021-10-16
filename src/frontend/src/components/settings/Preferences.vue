<template>
  <section class="preferences relative top-12">
    <div class="sidebar-setup">
      <form class="bg-white rounded w-1/2 m-auto p-8">
        <label for="stock">Enable Stock</label>
        <input
          type="checkbox"
          id="stock"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Stock"
          @change="upDatePreferences"
        />
        <label for="sales">Enable Sales</label>
        <input
          type="checkbox"
          id="sales"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Sales"
          @change="upDatePreferences"
        />
        <label for="products">Enable Products</label>
        <input
          type="checkbox"
          id="products"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Products"
          @change="upDatePreferences"
        />
        <label for="notifications">Enable Notifications</label>
        <input
          type="checkbox"
          id="notifications"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Notifications"
          @change="upDatePreferences"
        />

        <label for="invoice">Enable Invoices</label>
        <input
          type="checkbox"
          id="invoice"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Invoices"
          @change="upDatePreferences"
        />

         <label for="inventory">Enable Inventory</label>
        <input
          type="checkbox"
          id="inventory"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Inventory"
          @change="upDatePreferences"
        />

         <label for="credits">Enable Credits</label>
        <input
          type="checkbox"
          id="credits"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Credits"
          @change="upDatePreferences"
        />
        <!-- <button class="app-btn" @click.prevent="upDatePreferences">
          Save changes
        </button> -->
      </form>
    </div>
  </section>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    // REACTIVELY SET UPDATES TO STORE
    upDatePreferences() {
      let upDatedPreferences = {
        Stock: this.sideBarPreferences.Stock,
        Sales: this.sideBarPreferences.Sales,
        Products: this.sideBarPreferences.Products,
        Notifications: this.sideBarPreferences.Notifications,
        Inventory: this.sideBarPreferences.Inventory,
        Credits: this.sideBarPreferences.Credits,
        Invoices: this.sideBarPreferences.Invoices,
      };
      this.$store.dispatch("updatePreferences", upDatedPreferences);
    },
  },
})
export default class Preferences extends Vue {
  data() {
    return {
      sideBarPreferences: {
        Stock: false,
        Products: false,
        Notifications: false,
        Sales: false,
        Inventory: false,
        Credits: false,
        Invoices: false,
      },
    };
  }
}
</script>

<style>
</style>