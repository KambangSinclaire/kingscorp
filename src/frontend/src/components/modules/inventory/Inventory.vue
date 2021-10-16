<template>
  <Listing
    :listData="inventory"
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
export default class Inventory extends Vue {
  data() {
    return {
      titles: ["Supplier", "Initiator","Budget","Top Items", "Date", "Estimated date", "Description","Status"],
      inventory: [
        {
          supplier: "Kambang Calis",
          'top items':"papers, books",
          budget: "156500",
          date: "22-07-2021",
          'estimated date': "28-07-2021",
          initiator:"kingscorp",
          status:"received",
          description: "latest intake of papers",
        },
        {
          supplier: "Kambang Divine",
          'top items':"stapplers, pens",
          budget: "98000",
          date: "12-07-2021",
          'estimated date': "22-07-2021",
          initiator:"kingscorp",
          status:"waiting",
          description: "latest intake of stapplers",
        },
        {
          supplier: "Kambang Kirian",
          'top items':"catridges, rulers",
          budget: "86000",
          date: "01-07-2021",
          'estimated date': "03-07-2021",
          initiator:"kingscorp",
          status:"cancelled",
          description: "latest intake of catridges",
        },
      ],
    };
  }
}
</script>

<style>
</style>