<template>
  <div class="list-container w-full bg-white pt-8 h-screen">

    <div class="search-action-btns flex items-center mb-4">
        <button class="add-btn app-btn relative left-28" @click="openAddNewForm">New</button>
        <div class="search_form w-1/2 mx-auto my-3">
            <input type="text" class="form-control" placeholder="Search..." v-model.lazy="searchQuery">
        </div>
         <!-- @mouseenter="toggleSideAction"  can replace @click if need be -->
        <span class="more-actions icons relative right-28" @click="toggleSideAction" >
             <i class="add-item mx-2">
              <img src="@/assets/feather_icons/more-vertical.svg" alt="" srcset="">
          </i>
        </span>
        <div v-if="showMoreActions" class="dropdown-list bg-gray-200 rounded p-4 flex flex-col absolute right-4 top-56">
            <span class="dropdown-item cursor-pointer p-4 hover:bg-gray-800 hover:text-white" v-for="(item,index) of formateddropdownItems" :key="index">
              {{item?.item}}  <i>{{item?.icon}}</i>
              <a :href="item?.url">goto</a>
            </span>
              <hr>
        </div>
    </div>

    <!-- <div class="list-items flex justify-evenly items-center font-extrabold ">
      <span class="name w-1/6">Name</span>
      <span class="qty w-1/6">Quantity</span>
      <span class="unit-cost w-1/6">Unit Cost ({{currency}})</span>
       <span class="unit-cost w-1/6">Photo</span>
      <span class="description w-1/6">Description</span>
      <span class="action-items w-1/6">
         Actions
      </span>
    </div>
    <br> <hr>

    <div class="list-items flex justify-evenly items-center shadow-sm py-6 cursor-pointer" v-for="(product,index) of filteredProducts" :key="index">
      <span class="name w-1/6">{{product.name}}</span>
      <span class="qty w-1/6">{{product.qty}}</span>
      <span class="unit-cost w-1/6"> {{product?.unitCost}}</span>
      <span class="imageUrl w-1/6 flex justify-center items-center">
          <i class="add-item mx-2">
              <img src="@/assets/feather_icons/user.svg" alt="" srcset="">
          </i>
      </span>
      <span class="description w-1/6">{{product?.description}}</span>
      <span class="action-items flex justify-evenly items-center w-1/6">
          <i class="add-item mx-2 cursor-pointer">
              <img src="@/assets/feather_icons/eye.svg" alt="" srcset="">
          </i>
          <i class="add-item mx-2">
              <img src="@/assets/feather_icons/edit.svg" alt="" srcset="">
          </i>
          <i class="add-item mx-2">
              <img src="@/assets/feather_icons/trash-2.svg" alt="" srcset="">
          </i>
      </span>
    </div> -->

 <Listing :options="{actions:true}" :listData="formatedProducts" :listingTitles="titles"/>


  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
@Options({
    computed:{
        formatedProducts(){
            return this.products.map((product:any,index:any)=>{
                return {
                    name:product,
                    qty:index,
                    ['unit cost']:index*3,
                    ['image url']:"../src/frontend/src/assets/feather_icons/user.svg",
                    description:"This is a test project",
                }
            })
        },
        filteredProducts(){
            let products = this.formatedProducts;
            return products.filter((product:any)=>{
            // this.searchQuery.match(product.name);
            // product.name.includes(this.searchQuery)
            // return product.name == this.searchQuery
            return product.name !== undefined;
            });
            // [].fil

        },
        formateddropdownItems(){
            return this.dropdownItems.map((listItem:any,index:any)=>{
                return {
                    item:listItem,
                    icon:index,
                    url:"/"+index
                }
            })
        }
    },
    methods:{
        toggleSideAction(){
            this.showMoreActions = !this.showMoreActions;
        },
        openAddNewForm(){
            this.$emit('toggleAddNewForm',"form opened");
        }
    },
    emits:['toggleAddNewForm'],
    components:{
        Listing
    }
})
export default class ProductListing extends Vue {
    data(){
        return {
            titles:['Name','Qty','Unit Cost','Image Url','Description'],
            products:["A4 Papers","A3 Books","Stappling Machines","Plasma Reams"],
            currency:"XAF",
            dropdownItems:['analysis','history','statistics','status'],
            showMoreActions: false,
            searchQuery:""
        }
    }
}
</script>

<style lang="sss" scoped>
</style>>