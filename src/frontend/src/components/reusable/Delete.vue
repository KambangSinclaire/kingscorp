<template>
  <div class="delete-product container w-full fixed top-24 -right-4">
    <form action="" class="form-container bg-white shadow-lg w-1/2">
      <!-- bg-gray-100 shadow-lg w-2/4 p-8 can be used above to style the popup modal -->
      <div class="form-header flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold pt-8">
          Delete {{ setup?.data?.entity }}
        </h1>
        <span
          class="relative -top-2 left-64 cursor-pointer text-red-400"
          @click="closeForm"
        >
          <i class="far fa-window-close fa-2x"></i>
        </span>
      </div>
      <div class="action-body h-32">
        <p class="">Are you really sure you want to perform this operation?</p>
        <input
          type="text"
          class="form-control"
          placeholder="Please enter the name of the resource..."
        />
      </div>
      <div class="action-bottom bg-white w-full h-16 px-0 mx-0">
        <button
          class="app-btn-delete w-full relative -bottom-4"
          @click="deleteResource"
        >
          Delete {{ setup?.data?.entity }}
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
  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    deleteResource() {
      this.$store.dispatch(this.setup?.actions?.delete, this.setup?.data?.id);
      this.$store.dispatch(this.setup?.actions?.list);
      this.closeForm();
    },
  },
  emits: ["closeForm"],
})
export default class Delete extends Vue {}
</script>

<style lang="scss" scoped>
</style>