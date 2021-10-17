<template>
  <!-- dynamic components here -->
 <div class="list-view-parent-container">
    <ProductListing/> 
 </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListing from "./product-listing.vue";

@Options({
  components: {
    ProductListing
  },
  methods:{
   
  },
})
export default class Product extends Vue {
  data() {
    return {
    };
  }
}
</script>

<style lang="sss" scoped>
</style>>