<template>
  <Listing
    :listData="groups"
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listingTitles="titles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
import { AppActionEvents } from "../../events/app.events";
@Options({
  computed: {
    groups() {
      const groups = this.$store.getters.getGroups;
      return groups;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.group.retrieve);
  },
})
export default class Group extends Vue {
  data() {
    return {
      titles: [
        "Name",
        "Roles",
        "User",
        "Description"
      ],
      inputs: {
        name: "text",
        roles: "text",
        description: "textarea",
        user: "text",
      },
      entity: "Group",
      actions: {
        add: AppActionEvents.group.add,
        edit: AppActionEvents.group.edit,
        delete: AppActionEvents.group.delete,
        details: AppActionEvents.group.retrieveSingle,
        list: AppActionEvents.group.retrieve,
      },
    };
  }
}
</script>

<style>
</style>