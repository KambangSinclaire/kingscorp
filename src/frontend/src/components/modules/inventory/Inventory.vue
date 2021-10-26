<template>
  <Listing
    :listData="inventory"
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listingTitles="titles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
import { AppActionEvents } from "../../../events/app.events";
@Options({
  computed: {
    inventory() {
      const inventories = this.$store.getters.getInventories;
      return inventories;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.inventory.retrieve);
  },
})
export default class Inventory extends Vue {
  data() {
    return {
      titles: [
        "Estimated budget",
        "Products",
        "Actual budget",
        "User",
        "Description",
        "Status",
        "Name",
      ],
      inputs: {
        "estimated budget": "number",
        products: "select",
        status: "text",
        description: "textarea",
        "actual budget": "number",
        user: "text",
        name: "text",
      },
      entity: "Inventory",
      actions: {
        add: AppActionEvents.inventory.add,
        edit: AppActionEvents.inventory.edit,
        delete: AppActionEvents.inventory.delete,
        details: AppActionEvents.inventory.retrieveSingle,
        list: AppActionEvents.inventory.retrieve,
      },
    };
  }
}
</script>

<style>
</style>