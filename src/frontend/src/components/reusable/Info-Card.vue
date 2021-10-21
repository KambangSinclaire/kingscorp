<template>
  <div class="info-card px-4 py-5 border rounded m-3 container h-80">
    <div class="card-title-icons flex justify-between items-center">
      <img
        src="@/assets/feather_icons/user.svg"
        alt="Products"
        class="card-logo"
      />
      <router-link :to="setup?.routes?.toListingView" class="cursor-pointer">
        <img
          src="@/assets/feather_icons/chevron-right.svg"
          alt="Products"
          class="card-logo"
        />
      </router-link>
    </div>
    <div class="description">
      <div class="head">
        <p class="icon-tiltle flex py-4">
          <img :src="topImagePath" :alt="setup?.title + 'Img'" />
          <span class="pl-4 font-extrabold">{{ setup?.title }}</span>
        </p>
        <p class="details">{{ setup?.description }}</p>
      </div>
    </div>
    <div class="card-footer pt-12">
      <div class="range">
        <input
          type="range"
          class="w-full"
          name="range"
          id="range"
          placeholder="range"
          :value="setup?.range"
        />
      </div>
      <div class="stack-images flex justify-between items-center pt-2">
        <img
          src="@/assets/feather_icons/user.svg"
          alt="Products"
          class="card-logo"
        />
        <button class="btn outline-none border rounded-lg py-2 px-4">
          {{setup?.btnMore}} more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  computed: {
    topImagePath() {
      return this.setup.topImage;
    },
  },
  props: {
    setup: {
      title: String,
      range: Number,
      btnMore:Number,
      description: String,
      topImage: String,
      actions: {
        showMore: String,
        showStatistics: String,
      },
      routes: {
        toListingView: String,
        toStatisticsView: String,
      },
    },
  },
  methods: {
    showDetails() {
      this.$store.dispatch(this.actions.showMore);
    },
    showMore() {
      this.$store.dispatch(this.actions.showMore);
    },
  },
})
export default class InfoCard extends Vue {}
</script>

<style>
</style>