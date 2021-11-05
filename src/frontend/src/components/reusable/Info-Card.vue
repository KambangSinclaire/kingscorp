<template>
  <div
    class="info-card px-4 py-5 border rounded m-3 container h-80"
    :class="setup?.bgColor"
  >
    <div class="card-title-icons flex justify-between items-center">
      <router-link to="/statistics">
        <i class="fas fa-chart-line cursor-pointer"></i>
      </router-link>
      <router-link :to="setup?.routes?.toListingView" class="cursor-pointer">
        <i class="fas fa-chevron-right text-blue-500"></i>
      </router-link>
    </div>
    <div class="description">
      <div class="head">
        <p class="icon-tiltle flex py-4 items-center">
          <i :class="setup.topImage"></i>
          <span class="pl-4 font-extrabold">{{ setup?.title }}</span>
        </p>
        <p class="details">{{ setup?.description }}</p>
      </div>
    </div>
    <div class="card-footer pt-2">
      <!-- <div class="range">
        <input
          type="range"
          class="w-full"
          name="range"
          id="range"
          placeholder="range"
          :value="setup?.range"
        />
      </div> -->
      <Line :chartdata="chartdata" :options="chartOptions" class="" />
      <div class="stack-images flex justify-between items-center">
        <img
          src="@/assets/feather_icons/user.svg"
          alt="Products"
          class="card-logo"
        />
        <button class="btn outline-none border rounded-lg px-4 py-2">
          {{ setup?.btnMore }} more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Line from "../reusable/statistics/LineChart.vue";

@Options({
  computed: {
    topImagePath() {
      return this.setup.topImage;
    },
    chartdata() {
      return this.chartData;
    },
  },
  components: { Line },
  props: {
    setup: {
      title: String,
      range: Number,
      btnMore: Number,
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
export default class InfoCard extends Vue {
  data() {
    return {
      chartData: {
        labels: ["October", "November", "December"],
        datasets: [
          {
            label: "Invoices",
            backgroundColor: "blue",
            data: [1, 16, 210],
            hoverOffset: 4,
          },
          {
            label: "Personnels",
            backgroundColor: "indigo",
            data: [1, 6, 20],
          },
          {
            label: "Inventory",
            backgroundColor: "pink",
            data: [179, 67, 20],
          },
          {
            label: "Stock",
            backgroundColor: "teal",
            data: [107, 69, 20],
          },
          {
            label: "Products",
            backgroundColor: "orange",
            data: [10, 96, 29],
          },
          {
            label: "Services",
            backgroundColor: "brown",
            data: [134, 69, 20],
          },
        ],
      },
      chartOptions: {
        legend: {
          display: false,
        },
        layout: {
          padding: 20,
        },
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: "Chart.js Line Chart - Multi Axis",
          },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
      },
    };
  }
}
</script>

<style>
</style>