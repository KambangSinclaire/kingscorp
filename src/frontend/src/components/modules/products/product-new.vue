<template>
<!-- add  transform -translate-y-3/4 to this parent div when new button is clicked -->
  <div class="create-product_container w-full relative transform -translate-y-full">
      <form action="" class="form-container absolute alert-modal bg-white shadow-lg w-1/2 p-8">
      <div class="form-header flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">Add new product</h1>
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

<!-- modal one -->
<!-- <div class="p-8">
  <div class="bg-white rounded-lg shadow-xl max-w-sm">
    <div class="h-64 bg-blue-500 flex justify-center items-center rounded-t-lg">
      <div
        class="h-24 w-24 bg-white rounded-full flex justify-center items-center"
      >
        <i class="material-icons text-blue-500">
          done
        </i>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="fill-current"
    >
      <path
        fill="#4299E1"
        fill-opacity="1"
        d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,112C1120,96,1280,
96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,
640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
    <div class="p-8 -mt-12">
      <p class="font-bold text-center text-4xl text-gray-700">Thank you</p>
      <p class="text-gray-600 text-center mt-5">
        Your order has been placed. We'll send you an email.
      </p>
      <div class="flex justify-center mt-6">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div> -->

<!-- modal two -->
<!-- <div class="p-16">
  <div class="bg-white py-16 rounded-lg shadow-xl relative max-w-sm">
    <p class="text-center text-gray-700 font-bold text-4xl">You are banned</p>
    <p class="text-gray-600 text-lg text-center">
      Please stop spamming other people.
    </p>
    <div class="flex justify-center items-center mt-6">
      <button class="bg-red-500 text-white font-bold px-8 py-2 rounded-lg hover:opacity-75">
        close
      </button>
    </div>
    <div class="absolute w-full">
      <svg
        class="fill-current text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,
96L1440,320L1320,320C1200,320,960,320,720,
320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div class="h-6 w-full bg-red-500 rounded-b-lg"></div>
    </div>
  </div>
</div> -->

<!-- modal three -->
<!-- <div
  class="relative max-w-xs bg-white rounded-lg py-8 shadow-lg flex flex-col items-center justify-center"
>
  <button class="w-8 ml-auto mt-2 absolute right-0 top-0">
  <i class="material-icons text-gray-500 hover:text-gray-700">
    <img src="@/assets/material_icons/add.svg" alt="" srcset="">
  </i>
  </button>
  <div
    class="w-16 h-16 bg-blue-400 rounded-full flex justify-center items-center"
  >
    <i class="material-icons text-white">done</i>
  </div>
  <p class="text-blue-400 font-bold mt-5">Thank you,</p>
  <p class="text-xs text-center text-gray-600 mt-1">
    Lorem ipsum dolor sit amet.
  </p>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
    style="background-image: linear-gradient(to right, #4facfe 0%,#4ad5ff 100%)"
  >
    continue
  </button>
</div> -->

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  methods:{
    closeForm(){
      this.$emit('closeForm','closeForm')
    }
  },
  emits:['closeForm'],
})
export default class AddProduct extends Vue{

}
</script>

<style lang="scss" scoped>
</style>