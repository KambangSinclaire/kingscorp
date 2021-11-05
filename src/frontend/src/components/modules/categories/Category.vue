<template>
  <Listing
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listData="categories"
    :listingTitles="titles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
import { AppActionEvents } from "../../../events/app.events";
@Options({
  computed: {
    categories() {
      const categories = this.$store.getters.getCategories;
      return categories;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.category.retrieve);
  },
})
export default class Category extends Vue {
  data() {
    return {
      titles: ["Name", "Type", "Discount", "Description", "Threshhold"],
      inputs: {
        name: "text",
        type: "text",
        threshhold: "number",
        description: "textarea",
        discount: "number",
      },
      entity: "Category",
      actions: {
        add: AppActionEvents.category.add,
        edit: AppActionEvents.category.edit,
        delete: AppActionEvents.category.delete,
        details: AppActionEvents.category.retrieveSingle,
        list: AppActionEvents.category.retrieve,
      },
    };
  }
}
</script>

<style>
</style>