<template>
  <Listing
    :listData="sales"
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
export default class Sales extends Vue {
  data() {
    return {
      titles: ["Initiator","Amount","Top Items", "Date", "Client", "Description","Status"],
      sales: [
        {
          'top items':"papers, books",
          amount: "156500",
          date: "22-07-2021",
          'client': "Kambang Sinclaire",
          initiator:"Kingscorp",
          status:"success",
          description: "bought papers",
        },
        {
          'top items':"stapplers, pens",
          amount: "98000",
          date: "12-07-2021",
          'client': "Kambang Derick",
          initiator:"kingscorp",
          status:"pending",
          description: "bought stapplers",
        },
        {
          'top items':"catridges, rulers",
          amount: "86000",
          date: "01-07-2021",
          'client': "Kambang Epie",
          initiator:"kingscorp",
          status:"cancelled",
          description: "bought catridges",
        },
      ],
    };
  }
}
</script>

<style>
</style>