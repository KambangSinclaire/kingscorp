<template>
  <div class="container flex justify-between items-center px-8">
    <div class="chart-view w-3/4">
      <!-- <button @click="fillData">Randomize</button> -->
      <Line :chartdata="chartdata" :options="chartOptions" class="py-8" />
      <br />
      <hr />
      <Bar :chartdata="chartData" :options="chartOptions" class="py-8" /> <br />
      <hr />
      <Pie :chartdata="chartData" :options="chartOptions" class="py-8" /> <br />
      <hr />
    </div>
    <div class="legend-details w-1/4 rounded-lg shadow bg-gray-200 text-center">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
      molestiae corrupti, impedit aliquam necessitatibus minima, velit aut
      quidem exercitationem explicabo, quae accusamus iusto vero ratione
      perferendis dolorum ex autem. Ullam.
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Line from "./LineChart.vue";
import Bar from "./BarChart.vue";
import Pie from "./PieChart.vue";

@Options({
  components: {
    Line,
    Bar,
    Pie,
  },
  computed: {
    chartdata() {
      return this.chartData;
    },
  },
  mounted() {
    this.chartData = this.fetchAndFormatData();
  },
  methods: {
    fetchAndFormatData() {
      return {
        labels: ["indigo", "pink", "green", "blue", "red", "gray"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#8da9c4",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data two",
            backgroundColor: "#b4dc7f",
            data: [1, 67, 200, 600, 800, 1000, 5900],
          },
          {
            label: "Data three",
            backgroundColor: "#f87979",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data four",
            backgroundColor: "#feffa5",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data five",
            backgroundColor: "#f87979",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data six",
            backgroundColor: "#8da9c4",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
})
export default class Charts extends Vue {
  data() {
    return {
      chartData: {
        labels: [
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Invoices",
            backgroundColor: "blue",
            data: [1, 16, 210, 60, 80, 100, 500],
            hoverOffset: 4
          },
          {
            label: "Personnels",
            backgroundColor: "indigo",
            data: [1, 6, 20, 100, 80, 150, 500],
          },
          {
            label: "Inventory",
            backgroundColor: "pink",
            data: [179, 67, 20, 60, 80, 109, 500],
          },
          {
            label: "Stock",
            backgroundColor: "teal",
            data: [107, 69, 20, 60, 80, 10, 500],
          },
          {
            label: "Products",
            backgroundColor: "orange",
            data: [10, 96, 29, 60, 80, 90, 500],
          },
          {
            label: "Services",
            backgroundColor: "brown",
            data: [134, 69, 20, 60, 80, 190, 500],
          },
        ],
      },
      chartOptions: {
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