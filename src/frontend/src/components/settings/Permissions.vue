<template>
   <Listing :listData="permissions" :listingTitles="titles" :options="{actions:false}"/>
</template>

<script>
import {Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
@Options({
    components:{
        Listing
    },
})
export default class Permissions extends Vue {
  data(){
        return {
            titles:["Permission","Description","Suggestion","Impact","Validity"],
            permissions:[{
                permission:"Add Stock",
                description:"Can open a new inventory",
                suggestion:"good for admins, managers",
                impact:"High",
                validity:"login enabled"
            },
            {
                permission:"Add Personnels",
                description:"Can add a new personnel",
                suggestion:"good for admins, managers",
                impact:"High",
                validity:"login enabled"
            },
            {
                permission:"Perform Payment",
                description:"Can perform payments and stock exchange",
                suggestion:"good for admins, managers,sales agents",
                impact:"High",
                validity:"login enabled"
            }]

        }
    }
}
</script>

<style>

</style>