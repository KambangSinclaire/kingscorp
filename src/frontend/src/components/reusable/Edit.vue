<template>
  <div class="container w-full fixed top-24 -right-4">
    <form action="" class="form-container bg-gray-100 shadow-lg w-2/4 p-8">
      <div class="flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">
          Edit {{ setup?.data?.entity }} info
        </h1>
        <span
          class="relative -top-8 left-60 cursor-pointer text-red-400"
          @click="closeForm"
        >
          <i class="far fa-window-close fa-2x"></i>
        </span>
      </div>

      <div class="w-full h-full">
        <div
          class="w-full"
          v-for="(inputType, inputName) of formatInputs.normalInputs"
          :key="inputName"
        >
          <input
            :type="inputType"
            v-if="inputType !== 'file'"
            v-model="setInputValues[inputName]"
            class="form-control mx-2 w-1/2"
            :placeholder="inputName"
            @input="valueChanged"
          />
          <span v-if="inputType == 'file'">
            <img
              :src="setInputValues[inputName]"
              :alt="setInputValues[inputName]"
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
            <option :value="setInputValues[inputName]">{{ inputName }}</option>
          </select>
        </div>

        <div class="" v-if="isTextArea">
          <textarea
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
            name=""
            id=""
            cols="30"
            rows="3"
            class="form-control mx-2 w-1/2"
            v-model="setInputValues[inputName]"
          >
          </textarea>
        </div>

        <button class="app-btn" @click.prevent="updateResource">
          Update {{ setup?.data?.entity }}
        </button>
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
    setInputValues() {
      return { ...this.setup?.data };
    },
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    updateResource() {
      const id = this.setInputValues.id;
      delete this.setInputValues?.entity;
      delete this.setInputValues?.id;
      const payload = { id, data: this.setInputValues };
      // DISPATCH ADD EVENT HERE TO ADD IN THE STORE BASED ON THE ACTION PASSED
      this.$store.dispatch(this.setup?.actions?.edit, payload);
      this.$store.dispatch(this.setup?.actions?.list);
      this.closeForm();
    },
  },
  emits: ["closeForm"],
})
export default class Edit extends Vue {
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