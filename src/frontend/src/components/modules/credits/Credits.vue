<template>
  <Listing
    :listData="credits"
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
export default class Credits extends Vue {

     
  data() {
    return {
      titles: ["Client", "Total Amount","Items", "Date", "Due date", "Note","Status"],
      credits: [
        {
          client: "Kambang Sinclaire",
          items:"papers, books",
          'total amount': "15500",
          date: "22-07-2021",
          'due date': "28-07-2021",
          status:"paid",
          note: "took papers on credit",
        },
        {
          client: "Kambang Epie",
          items:"stapplers, pens",
          'total amount': "10000",
          date: "12-07-2021",
          'due date': "22-07-2021",
          status:"pending",
          note: "took stapplers",
        },
        {
          client: "Kambang Derick",
          items:"catridges, rulers",
          'total amount': "3000",
          date: "01-07-2021",
          'due date': "03-07-2021",
          status:"cancelled",
          note: "took catridges",
        },
      ],
    };
  }
}
</script>

<style>
</style>