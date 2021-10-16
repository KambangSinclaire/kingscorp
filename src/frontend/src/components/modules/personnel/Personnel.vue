<template>
  <Listing
    :listData="personnels"
    :listingTitles="titles"
    :options="{ actions: true }"
    @fetchDropDownIcons="upDateActions"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
@Options({
  components: {
    Listing,
  },
  computed: {
    upDateActions() {
      let dropDowns = [
        {
          icon: "hello test",
          title: "analysis",
          url: "/login",
        },
       {
          icon: "hello test",
          title: "analysis",
          url: "/login",
        },
        {
          icon: "hello test",
          title: "analysis",
          url: "/login",
        },
       {
          icon: "hello test",
          title: "analysis",
          url: "/login",
        }
      ];
      this.$store.dispatch("upDropdownActions", dropDowns);
    },
  },
})
export default class Personnel extends Vue {
  data() {
    return {
      titles: ["Name", "Role", "Status", "Group", "Created"],
      personnels: [
        {
          name: "Kambang Sinclaire",
          role: "Owner",
          status: "Active",
          group: "Engineering",
          created: "22-07-2021",
        },
        {
          name: "Kambang Epie",
          role: "Admin",
          status: "Active",
          group: "Management",
          created: "23-07-2021",
        },
        {
          name: "Kambang Derick",
          role: "Auditor",
          status: "Active",
          group: "Operations",
          created: "24-07-2021",
        },
        {
          name: "Kambang Calis",
          role: "Sales Agent",
          status: "Pending",
          group: "Marketting",
          created: "24-07-2021",
        },
        {
          name: "Kambang Divine",
          role: "Personnel",
          status: "inActive",
          group: "Advertissement",
          created: "25-07-2021",
        },
      ],
    };
  }
}
</script>

<style>
</style>