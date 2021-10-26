<template>
  <Listing
    :listData="invoices"
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
    invoices() {
      const invoices = this.$store.getters.getInvoices;
      return invoices;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.invoice.retrieve);
  },
})
export default class Invoice extends Vue {
  data() {
    return {
      titles: [
        "Total amount",
        "Items",
        "Expected date",
        "User",
        "Description",
        "Status",
        "Client",
        "Expiry date",
      ],
      inputs: {
        "total amount": "number",
        items: "text",
        status: "text",
        description: "textarea",
        "expected date": "date",
        user: "text",
        client: "text",
        "Expiry date": "date",
      },
      entity: "Invoice",
      actions: {
        add: AppActionEvents.invoice.add,
        edit: AppActionEvents.invoice.edit,
        delete: AppActionEvents.invoice.delete,
        details: AppActionEvents.invoice.retrieveSingle,
        list: AppActionEvents.invoice.retrieve,
      },
    };
  }
}
</script>
<style>
</style>