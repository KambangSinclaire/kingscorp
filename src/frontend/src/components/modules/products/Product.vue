<template>
  <Listing
    :options="{ actions: true, inputs, entity, actions }"
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
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.product.retrieve);
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
        "Created",
      ],
      inputs: {
        name: "text",
        quantity: "number",
        created: "datetime-local",
        description: "textarea",
        "unit cost": "number",
        "image url": "file",
      },
      entity: "Product",
      actions: {
        add: AppActionEvents.product.add,
        edit: AppActionEvents.product.edit,
        delete: AppActionEvents.product.delete,
        details: AppActionEvents.product.retrieveSingle,
        list: AppActionEvents.product.retrieve,
      },
    };
  }
}
</script>

<style lang="sss" scoped>
</style>