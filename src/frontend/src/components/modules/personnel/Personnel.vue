<template>
  <Listing
    :listData="personnels"
    :listingTitles="titles"
    :options="{ actions: true, inputs, name }"
    @fetchDropDownIcons="upDateActions"
  />
  <!-- event above @fetchDropDownIcons is used to mutate the state of the dropdown in each component -->
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
          icon: "@/assets/feather_icons/users.svg",
          title: "analysis",
          url: "/login",
        },
        {
          icon: "@/assets/feather_icons/users.svg",
          title: "history",
          url: "/",
        },
        {
          icon: "@/assets/feather_icons/users.svg",
          title: "statistics",
          url: "/",
        },
        {
          icon: "@/assets/feather_icons/users.svg",
          title: "status",
          url: "/login",
        },
      ];
      this.$store.dispatch("upDropdownActions", dropDowns);
    },
  },
})
export default class Personnel extends Vue {
  data() {
    return {
      titles: ["Name", "Role", "Status", "Group", "Created"],
      inputs: {
        // name: "text",
        // role: "select",
        // group: "select",
        // group1: "select",
        // group2: "select",
        // group3: "select",
        // group4: "textarea",
        // group5: "textarea",
        // group6: "textarea",
        // created: "date",
        // status: "checkbox",
        // radio: "radio",
        // button: "button",
        // color: "color",
        // "datetime-local": "datetime-local",
        // email: "email",
        // file: "file",
        // image: "image",
        password: "password",
        range: "range",
        // reset: "reset",
        // search: "search",
        // submit: "submit",
        tel: "tel",
        time: "time",
        // url: "url",
        // week: "week",
        // month: "month",
        // number: "number",
      },
      name: "Personnel",
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