<template>
  <Listing
    :listData="invoices"
    :listingTitles="titles"
    :options="{ actions: true }"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
@Options({
  components: {
    Listing,
  },
})
export default class Invoices extends Vue {
  data() {
    return {
      titles: ["Client", "Total Amount","Items", "Date", "Due date", "Note","Status"],
      invoices: [
        {
          client: "Kambang Calis",
          items:"papers, books",
          'total amount': "156500",
          date: "22-07-2021",
          'due date': "28-07-2021",
          status:"completed",
          note: "requested for papers",
        },
        {
          client: "Kambang Divine",
          items:"stapplers, pens",
          'total amount': "98000",
          date: "12-07-2021",
          'due date': "22-07-2021",
          status:"pending",
          note: "requested for stapplers",
        },
        {
          client: "Kambang Kirian",
          items:"catridges, rulers",
          'total amount': "86000",
          date: "01-07-2021",
          'due date': "03-07-2021",
          status:"cancelled",
          note: "requested for catridges",
        },
      ],
    };
  }
}
</script>

<style>
</style>