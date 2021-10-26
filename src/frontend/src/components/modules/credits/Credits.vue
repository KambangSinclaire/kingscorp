<template>
  <Listing
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listData="credits"
    :listingTitles="titles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
import { AppActionEvents } from "../../../events/app.events";
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
        "Amount",
        "Items",
        "Expiry Date",
        "User",
        "Description",
        "Client",
      ],
      inputs: {
        amount: "number",
        items: "select",
        client: "text",
        description: "textarea",
        "expiry date": "date",
        "user": "text",
      },
      entity: "Credit",
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