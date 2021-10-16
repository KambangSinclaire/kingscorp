<template>
  <!-- dynamic components here -->
 <div class="list-view-parent-container">
    <ProductListing @toggle-add-new-form="openForm" :class="{'bg-gray-500': openAddForm }"></ProductListing> 
    <AddProduct v-if="openAddForm" @close-form="openForm"></AddProduct>
 </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListing from "./product-listing.vue";
import AddProduct from "./product-new.vue";
@Options({
  components: {
    ProductListing,
    AddProduct,
  },
  methods:{
    openForm(payload:any){
      console.log(payload);  
      this.openAddForm = !this.openAddForm;
    },
  },
})
export default class Product extends Vue {
  data() {
    return {
      openAddForm: false
    };
  }
}
</script>

<style lang="sss" scoped>
</style>>