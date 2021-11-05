<template>
  <Listing
    :options="{ actionBtns: true, inputs, entity, actions, relations }"
    :listData="products"
    :listingTitles="titles"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../../events/app.events";
import Listing from "../../reusable/Listing.vue";
@Options({
  computed: {
    products() {
      const prods = this.$store.getters.getProducts;
      return prods;
    },
  },
  components: {
    Listing,
  },
  mounted() {
    let relations = [];
    for (const [key, value] of Object.entries(this.relations)) {
      relations.push(`${key}`);
    }
    const payload = { relations };
    this.$store.dispatch(AppActionEvents.product.retrieve, payload);
  },
})
export default class Product extends Vue {
  data() {
    return {
      titles: [
        "Name",
        "Quantity",
        "Unit Cost",
        "Image Url",
        "Description",
        // "Inventory",
        "Stock",
        "Category",
      ],
      inputs: {
        name: "text",
        quantity: "number",
        stock: "select",
        description: "textarea",
        "unit cost": "number",
        "image url": "file",
        // inventory: "select",
        category: "select",
      },
      entity: "Product",
      relations: {
        category: "Categories",
        stock: "Stocks",
        // inventory: "Inventories",
      },
      actions: {
        add: AppActionEvents.product.add,
        edit: AppActionEvents.product.edit,
        delete: AppActionEvents.product.delete,
        details: AppActionEvents.product.retrieveSingle,
        list: AppActionEvents.product.retrieve,
      },
    }
  }
}
</script>

<style lang="sss" scoped>
</style>