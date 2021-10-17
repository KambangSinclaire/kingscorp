<template>
   <div class="create-product_container w-full relative transform -translate-y-full">
      <form action="" class="form-container absolute alert-modal bg-white shadow-lg w-1/2">
      <div class="form-header flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold pt-8">Delete Operation</h1>
        <span class="close-icon-container absolute top-3 right-5 cursor-pointer" @click="closeForm">
          <i class="close-icon">
            <img src="@/assets/feather_icons/x-circle.svg" alt="" srcset="">
          </i>
        </span>
      </div>
       <div class="action-body h-32">
         <p class="">Are you really sure you want to perform this operation?</p>
         <input type="text" class="form-control" placeholder="Please enter the name of the resource...">
       </div>
       <div class="action-bottom bg-red-500 w-full h-16 px-0 mx-0">
         
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
export default class Delete extends Vue{

}
</script>

<style lang="scss" scoped>

</style>