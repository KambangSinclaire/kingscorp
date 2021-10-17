<template>
  <h1>Details of an Item</h1>
   <div class="create-product_container w-full relative transform -translate-y-full">
      <form action="" class="form-container absolute alert-modal bg-white shadow-lg w-1/2 p-8">
      <div class="form-header flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">View resource Details</h1>
        <span class="close-icon-container absolute top-2 right-8 cursor-pointer" @click="closeForm">
          <i class="close-icon">
            <img src="@/assets/feather_icons/x-circle.svg" alt="" srcset="">
          </i>
        </span>
      </div>
         <div class="name-qty-section flex justify-between items-center w-full">
              <input type="text" class="name form-control mx-2" placeholder="Name">
              <input type="number" class="qty form-control mx-2"  placeholder="Qty">
         </div>
         <div class="unitcost-mincost-discount-section flex items-center">
              <input type="number" class="unitcost form-control mx-2"  placeholder="Unit Cost">
               <input type="text" class="discount form-control mx-2"  placeholder="Discount (%)">
              <input type="number" class="mincost form-control mx-2"  placeholder="Minimum Cost">
         </div>
         <div class="description">
             <textarea name="description" id="" cols="70" rows="3" class="form-control">
                 Description
             </textarea>
         </div>

         <div class="image-url w-1/2">
             <input type="file" name="imageUrl" class="form-control" id=""  placeholder="Photo">
         </div>
      </form>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
     methods:{
    closeForm(){
      this.$emit('closeForm','closeForm')
    }
  },
  emits:['closeForm'],
})
export default class Details extends Vue{

}
</script>

<style lang="scss" scoped>

</style>