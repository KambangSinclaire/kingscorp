<template>
  <div class="w-full relative transform -translate-y-full">
    <form
      action=""
      class="form-container fixed alert-modal bg-white shadow-lg w-3/4 p-8"
    >
      <div class="flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">
          View {{ setup?.data?.entity }} details
        </h1>
        <span class="absolute top-4 right-8 cursor-pointer" @click="closeForm">
          <i class="">
            <img src="@/assets/feather_icons/x-circle.svg" alt="" srcset="" />
          </i>
        </span>
      </div>

      <div class="w-full h-full">
        <div
          class="w-full"
          v-for="(inputType, inputName) of formatInputs.normalInputs"
          :key="inputName"
        >
          <input
            v-if="inputType !== 'file'"
            :type="inputType"
            v-model="setup.data[inputName]"
            class="form-control mx-2 w-1/2"
            :placeholder="inputName"
            readonly
          />
          <span v-if="inputType == 'file'">
            <img
              :src="setup.data[inputName]"
              :alt="setup.data[inputName]"
              srcset=""
            />
          </span>
        </div>

        <div class="" v-if="isSelect">
          <select
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
            name=""
            id=""
            class="form-control mx-2 w-1/2"
          >
            <option :value="setup.data[inputName]">{{ inputName }}</option>
          </select>
        </div>

        <div class="" v-if="isTextArea">
          <textarea
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
            name=""
            id=""
            cols="30"
            readonly
            rows="3"
            class="form-control mx-2 w-1/2"
            v-model="setup.data[inputName]"
          >
          </textarea>
        </div>
        <!-- <button class="app-btn" @click.prevent="saveData">Save info</button> -->
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
    formatInputs() {
      let inputs = { ...this.setup.inputs };
      let normalInputs = {};
      let specialInputs = {};
      for (const [key, value] of Object.entries(inputs)) {
        let isSpecialInputType = this.specialTypes[value] ? true : false;
        if (isSpecialInputType) {
          if (value === "select") {
            this.isSelect = true;
            specialInputs[key] = value;
          }
          if (value === "textarea") {
            this.isTextArea = true;
            specialInputs[key] = value;
          }
        } else {
          normalInputs[key] = value;
        }
      }
      return { normalInputs, specialInputs };
    },
    clearedDefaultInputValues() {
      let inputs = { ...this.formatInputs.normalInputs };
      for (const [key] of Object.entries(inputs)) {
        inputs[key] = "";
      }
      return inputs;
    },
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    // saveData() {
    //   const payload = {
    //     ...this.clearedDefaultInputValues,
    //     ...this.formatInputs.specialInputs,
    //   };
    //   // DISPATCH ADD EVENT HERE TO ADD IN THE STORE BASED ON THE ACTION PASSED
    //   this.$store.dispatch(this.setup?.actions?.add, payload);
    //   this.$store.dispatch(this.setup?.actions?.list);
    // },
  },
  emits: ["closeForm"]
})
export default class Details extends Vue {
  data() {
    return {
      isSelect: false,
      isTextArea: false,
      specialTypes: {
        select: true,
        textarea: true,
      },
    };
  }
}
</script>

<style lang="scss" scoped>
</style>