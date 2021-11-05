<template>
  <div class="container w-full fixed top-24 -right-4 overflow-y-auto">
    <form action="" class="form-container bg-gray-100 shadow-lg w-2/4 p-8">
      <div class="flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">
          Add new {{ setup?.entity }}
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
          <label
            :for="inputName"
            class="text-center capitalize relative left-4 cursor-pointer"
            >{{ inputName }}</label
          >
          <input
            :type="inputType"
            v-model="clearedDefaultInputValues[inputName]"
            class="form-control mx-2 w-1/2"
            :placeholder="inputName"
            tabindex="-1"
            :id="inputName"
            @input="valueChanged"
          />
        </div>

        <div class="" v-if="isSelect">
          <div
            class="container"
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
          >
            <select
              v-if="inputType === 'select'"
              v-model="formatInputs.specialInputs[inputName]"
              class="form-control mx-2 w-1/2"
            >
              <option selected>{{ inputName }}</option>
              <option
                v-for="(data, index) of relations[inputName]"
                :value="data.id"
                :key="index"
              >
                {{ data?.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="" v-if="isTextArea">
          <div
            class="container"
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
          >
            <textarea
              v-if="inputType === 'textarea'"
              cols="30"
              rows="3"
              class="form-control mx-2 w-1/2"
              v-model="formatInputs.specialInputs[inputName]"
            >
            </textarea>
          </div>
        </div>

        <button class="app-btn" @click.prevent="saveData">Save info</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../events/app.events";

@Options({
  props: {
    setup: Object,
  },

  computed: {
    formatInputs() {
      const inputs = { ...this.setup.inputs };
      let normalInputs = {};
      let specialInputs = {};
      for (const [key, value] of Object.entries(inputs)) {
        let isSpecialInputType = this.specialTypes[value] ? true : false;
        if (isSpecialInputType) {
          specialInputs[key] = value;
          this.isSelect = value === "select" ? true : this.isSelect;
          this.isTextArea = value === "textarea" ? true : this.isTextArea;
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
    relations() {
      const specialInputs = { ...this.formatInputs.specialInputs };
      const relationalInputs = { ...this.setup.relations };
      let results = {};
      for (const [key, value] of Object.entries(specialInputs)) {
        if (relationalInputs[key]) {
          results[key] = this.$store.getters[`get${relationalInputs[key]}`];
        }
      }
      return results;
    },
  },

  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    saveData() {
      const payload = {
        ...this.clearedDefaultInputValues,
        ...this.formatInputs.specialInputs,
      };
      this.$store.dispatch(this.setup?.actions?.add, payload);
      this.$store.dispatch(this.setup?.actions?.list);
      this.closeForm();
    },
  },

  emits: ["closeForm"],

  mounted() {
    const relationalInputs = { ...this.setup.relations };
    let relations = [];
    for (const [key, value] of Object.entries(relationalInputs)) {
      relations.push(`${key}`);
      this.$store.dispatch(AppActionEvents[key].retrieve, { relations });
    }
  },
})
export default class Add extends Vue {
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