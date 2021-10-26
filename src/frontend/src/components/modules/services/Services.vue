<template>
  <Listing
    :listData="services"
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
    services() {
      const services = this.$store.getters.getServices;
      return services;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.service.retrieve);
  },
})
export default class Service extends Vue {
  data() {
    return {
      titles: ["Name", "Category", "Cost per hour", "Description"],
      inputs: {
        name: "text",
        category: "text",
        description: "textarea",
        "cost per hour": "number",
      },
      entity: "Service",
      actions: {
        add: AppActionEvents.service.add,
        edit: AppActionEvents.service.edit,
        delete: AppActionEvents.service.delete,
        details: AppActionEvents.service.retrieveSingle,
        list: AppActionEvents.service.retrieve,
      },
    };
  }
}
</script>

<style>
</style>