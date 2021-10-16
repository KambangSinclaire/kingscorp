<template>
  <Listing :options="{actions:true}" :listingTitles="titles" :listData="roles"/>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
@Options({
    components:{
        Listing
    }
})
export default class Roles extends Vue {
data(){
    return {
        titles:["Role", "Description", "suggestion"],
         roles:[{
                role:"Admin",
                description:"Can manage entire system and resources",
                suggestion:"good for business owners, managers",
            },
            {
                role:"Personnel",
                description:"Can carry on general company tasks",
                suggestion:"good for all general staff",
            },
            {
                role:"Sales Agent",
                description:"Can perform payments and stock exchange",
                suggestion:"sales agents, client service and receptionists",
            }]
    }
}
}
</script>

<style>

</style>