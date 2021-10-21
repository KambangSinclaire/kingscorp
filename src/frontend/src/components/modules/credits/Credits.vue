<template>
  <Listing
    :options="{ actions: true, inputs, entity, actions }"
    :listData="credits"
    :listingTitles="titles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../../events/app.events";
import Listing from "../../reusable/Listing.vue";
@Options({
  computed: {
    credits() {
      const credits = this.$store.getters.getCredits;
      return credits;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.credit.retrieve);
  },
})
export default class Credits extends Vue {
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
        quantity: "select",
        created: "datetime",
        description: "textarea",
        "unit cost": "range",
        "image url": "file",
      },
      entity: "credit",
      actions: {
        add: AppActionEvents.credit.add,
        edit: AppActionEvents.credit.edit,
        delete: AppActionEvents.credit.delete,
        details: AppActionEvents.credit.retrieveSingle,
        list: AppActionEvents.credit.retrieve,
      },
    };
  }
}
</script>

<style>
</style>