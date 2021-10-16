<template>
   <Listing :listData="groups" :listingTitles="titles" :options="{actions:true}"/>
</template>

<script>
import {Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
@Options({
    components:{
        Listing
    },
})
export default class Groups extends Vue {
  data(){
        return {
            titles:["Group","Description","Suggestion","Impact","Access"],
            groups:[{
                group:"Engineers",
                description:"The engineering and tech arm of our org",
                suggestion:"good all those with engineering related duties in the company",
                impact:"High",
                access:"login enabled"
            },
            {
                group:"Marketting",
                description:"The marketting and sales arm of the org",
                suggestion:"good for those involved in marketting and sales duties",
                impact:"High",
                access:"login enabled"
            },
            {
                group:"Operations",
                description:"Those involved with processes like audits, legal cases etc",
                suggestion:"good for legal practitioners of the org, analysts and researchers",
                impact:"High",
                access:"login enabled"
            }]

        }
    }
}
</script>

<style>

</style>