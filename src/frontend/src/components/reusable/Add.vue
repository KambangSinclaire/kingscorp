<template>
  <div
    class="create-product_container w-full relative transform -translate-y-full"
  >
    <form
      action=""
      class="form-container absolute alert-modal bg-white shadow-lg w-3/4 p-8"
    >
      <div class="form-header flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">
          Add new {{ setup?.name }}
        </h1>
        <span
          class="close-icon-container absolute top-2 right-8 cursor-pointer"
          @click="closeForm"
        >
          <i class="close-icon">
            <img src="@/assets/feather_icons/x-circle.svg" alt="" srcset="" />
          </i>
        </span>
      </div>

      <div class="name-qty-section flex justify-between items-center w-full">
        <input
          v-for="(inputType, inputName) in setup.inputs"
          :key="inputName"
          :type="inputType"
          v-model="setup.inputs[inputName]"
          class="name form-control mx-2 w-1/2"
          :placeholder="inputName"
          @change="valueChanged"
        />
        <button class="app-btn" @click.prevent="saveData">Save info</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    setup: Object,
  },
  computed: {
    valueChanged() {
      console.log(this.setup.inputs);
    },
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    savaData() {
       console.log(this.setup.inputs);
      // DISPATCH AN ADD EVENT HERE TO ADD IN THE STORE BASED ON THE ACTION PASSED
      // e.g this.$store.dispatch(setup.addNewAction,this.setup.inputs);
    },
  },
  emits: ["closeForm"],
})
export default class Add extends Vue {}
</script>

<style lang="scss" scoped>
</style>