<template>
  <Listing
    :listData="sales"
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
    sales() {
      const sales = this.$store.getters.getSales;
      return sales;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.sale.retrieve);
  },
})
export default class Sales extends Vue {
  data() {
    return {
      titles: [
        "Name",
        "Items",
        "User",
        "Description",
        "Amount",
        "Received",
        "Balance",
        "Status"
      ],
      inputs: {
        name: "text",
        items: "text",
        description: "textarea",
        user: "text",
        amount:"number",
        received:"number",
        balance:"number",
        status:"text"
      },
      entity: "Sale",
      actions: {
        add: AppActionEvents.sale.add,
        edit: AppActionEvents.sale.edit,
        delete: AppActionEvents.sale.delete,
        details: AppActionEvents.sale.retrieveSingle,
        list: AppActionEvents.sale.retrieve,
      },
    };
  }
}
</script>

<style>
</style>