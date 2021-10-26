<template>
  <Listing
    :listData="notifications"
    :listingTitles="titles"
    :options="{ actionBtns: true, inputs, entity, actions }"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
import { AppActionEvents } from "../../../events/app.events";
@Options({
  computed: {
    notifications() {
      const notifications = this.$store.getters.getNotifications;
      return notifications;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.notification.retrieve);
  },
})
export default class Notification extends Vue {
  data() {
    return {
      titles: ["Sender", "Rciepient", "message", "Description"],
      inputs: {
        sender: "text",
        rciepient: "text",
        description: "textarea",
        "message": "number",
      },
      entity: "Notification",
      actions: {
        add: AppActionEvents.notification.add,
        edit: AppActionEvents.notification.edit,
        delete: AppActionEvents.notification.delete,
        details: AppActionEvents.notification.retrieveSingle,
        list: AppActionEvents.notification.retrieve,
      },
    };
  }
}
</script>

<style>
</style>