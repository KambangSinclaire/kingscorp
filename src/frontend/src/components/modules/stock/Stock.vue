<template>
  <Listing
    :listData="stock"
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listingTitles="titles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../../events/app.events";
import Listing from "../../reusable/Listing.vue";

@Options({
  computed: {
    stock() {
      const stocks = this.$store.getters.getStocks;
      return stocks;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.stock.retrieve);
  },
})
export default class Stock extends Vue {
  data() {
    return {
      titles: [
        "Estimated budget",
        "Products",
        "Actual budget",
        "Estimated profit",
        "User",
        "Description",
        "Status",
        "Name",
      ],
      inputs: {
        "estimated budget": "number",
        products: "select",
        status: "text",
        "estimated profit":'number',
        description: "textarea",
        "actual budget": "number",
        user: "text",
        name: "text",
      },
      entity: "Stock",
      actions: {
        add: AppActionEvents.stock.add,
        edit: AppActionEvents.stock.edit,
        delete: AppActionEvents.stock.delete,
        details: AppActionEvents.stock.retrieveSingle,
        list: AppActionEvents.stock.retrieve,
      },
    };
  }
}
</script>

<style>
</style>