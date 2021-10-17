<template>
    <Listing
      :options="{ actions: true }"
      :listData="products"
      :listingTitles="titles"
    />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
@Options({
  computed: {
   
  },
  methods: {
    
  },
  
  components: {
    Listing,
  },
})
export default class ProductListing extends Vue {
  data() {
    return {
      titles: ["Product", "Quantity", "Unit Cost", "Image Url", "Description","Created"],
      products: [
        {
          product:"papers, books",
          'unit cost': 156500,
          created: "22-07-2021",
          'quantity': 2021,
          'image url':"completed",
          description: "requested for papers",
        },
        {
          product:"stapplers, pens",
          'unit cost': 98000,
          created: "01-07-2021",
          'quantity': 21,
          'image url':"pending",
          description: "requested for stapplers",
        },
        {
          product:"catridges, rulers",
          'unit cost': 86000,
          created: "01-07-2021",
          'quantity': 72021,
          'image url':"cancelled",
          description: "requested for catridges",
        },
      ]
    };
  }
}
</script>

<style lang="sss" scoped>
</style>>