<template>
  <div class="alerts container w-full fixed top-24 -right-4">
    <span
      class="relative -top-8 left-60 cursor-pointer text-red-400"
      @click="closeForm"
    >
      <i class="far fa-window-close fa-2x"></i>
    </span>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Alert extends Vue {}
</script>

<style lang="scss" scoped>
</style>