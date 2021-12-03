<template>
  <!-- <section
    class="w-full bg-gray-200 font-extrabold max-h-screen overflow-hidden"
  >
    <div
      class="
        head-section
        w-4/5
        m-auto
        flex
        justify-around
        items-center
        text-gray-600
      "
    >
    <div class="card summary-cards">
        <p>Summary</p>
        <img src="@/assets/material_icons/analytics-outline.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
      <div class="card summary-cards">
        <p>Sales</p>
        <img src="@/assets/material_icons/card.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
      <div class="card summary-cards">
        <p>Notifications</p>
        <img src="@/assets/material_icons/analytics-outline.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
      <div class="card summary-cards">
        <p>Invoices</p>
        <img src="@/assets/material_icons/analytics-outline.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
    </div>

    <div class="statistics-section flex justify-evenly items-center">
      <div class="card w-2/3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        </p>
      </div>
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        </p>
      </div>
    </div>

    <div class="forms-section">
      <div class="basic-entries-form w-full">
        <form class="form-container">
           <h1>{{ msg }}</h1>
          <h1 class="medium-center-header">Add new item to Stock</h1>
          <input type="text" class="form-control" placeholder="Enter information here" />
          <select name="" id="" class="form-control" placeholder="Enter information here">
            <option value="Printers">Printers</option>
            <option value="Scanners">Scanners</option>
            <option value="Books">Books</option>
            <option value="Stationaries">Stationaries</option>
          </select>
        </form>
      </div>
    </div>
  </section> -->

  <section class="flex">
    <div class="quick-actions grid grid-cols-3 mx-4 gap-4 w-4/6">
      <InfoCard
        v-for="(setup, index) of cardSetup"
        :key="index"
        :setup="setup"
      />
    </div>
    <div class="quick-actions grid grid-cols-1 mx-4 gap-2 w-2/6">
      <InfoCard :setup="cardSetup[0]" />
      <InfoCard :setup="cardSetup[1]" />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InfoCard from "./reusable/Info-Card.vue";
import Charts from "./reusable/statistics/Charts.vue";
@Options({
  components: {
    InfoCard,
    Charts,
  },
})
export default class Welcome extends Vue {
  data() {
    return {
      cardSetup: [
        {
          title: "Products",
          range: 10,
          btnMore: 78,
          description: "Test Products",
          topImage: "fas fa-archive",
          bgColor: "bg-gray-200",
          actions: {
            showMore: "show product listing",
            showStatistics: "show product statistics",
          },
          routes: {
            toListingView: "/products",
            toStatisticsView: "/products/statistics",
          },
        },
        {
          title: "Services",
          range: 10,
          btnMore: 78,
          bgColor: "bg-yellow-200",
          description:
            "KingsCorp currently offers photocopy, scanning, printing and graphich design services",
          topImage: "fas fa-archive",
          actions: {
            showMore: "show product listing",
            showStatistics: "show product statistics",
          },
          routes: {
            toListingView: "/service",
            toStatisticsView: "/products/statistics",
          },
        },
        {
          title: "Sale",
          range: 10,
          btnMore: 78,
          bgColor: "bg-blue-200",
          description: "Test sales",
          topImage: "fab fa-cc-mastercard",
          actions: {
            showMore: "show sale listing",
            showStatistics: "show sale statistics",
          },
          routes: {
            toListingView: "/sales",
            toStatisticsView: "/sales/statistics",
          },
        },

        {
          title: "Notification",
          range: 10,
          btnMore: 78,
          bgColor: "bg-red-200",
          description: "Test inventories",
          topImage: "far fa-Notification-card",
          actions: {
            showMore: "show Notification listing",
            showStatistics: "show Notification statistics",
          },
          routes: {
            toListingView: "/Notification",
            toStatisticsView: "/inventories/statistics",
          },
        },

        {
          title: "Invoice",
          range: 10,
          btnMore: 78,
          bgColor: "bg-gray-200",
          description: "Test invoices",
          topImage: "fas fa-file-invoice-dollar",
          actions: {
            showMore: "show invoice listing",
            showStatistics: "show invoice statistics",
          },
          routes: {
            toListingView: "/invoice",
            toStatisticsView: "/invoices/statistics",
          },
        },
        {
          title: "Personel",
          range: 60,
          btnMore: 78,
          bgColor: "bg-gray-200",
          description: "Test Personels",
          topImage: "fas fa-user-friends",
          actions: {
            showMore: "show Personel listing",
            showStatistics: "show Personel statistics",
          },
          routes: {
            toListingView: "/personnel",
            toStatisticsView: "/personnel/statistics",
          },
        },
        {
          title: "Categories",
          range: 60,
          btnMore: 78,
          bgColor: "bg-gray-200",
          description: "Test Categories",
          topImage: "fas fa-user-friends",
          actions: {
            showMore: "show Categories listing",
            showStatistics: "show Categories statistics",
          },
          routes: {
            toListingView: "/categories",
            toStatisticsView: "/categories/statistics",
          },
        },

        {
          title: "Stock",
          range: 60,
          btnMore: 78,
          bgColor: "bg-gray-200",
          description: "Test Stock",
          topImage: "fas fa-user-friends",
          actions: {
            showMore: "show Personel listing",
            showStatistics: "show Stock statistics",
          },
          routes: {
            toListingView: "/stock",
            toStatisticsView: "/stock/statistics",
          },
        },
        {
          title: "Credits",
          range: 60,
          btnMore: 78,
          bgColor: "bg-gray-200",
          description: "Test credits",
          topImage: "fas fa-archive",
          actions: {
            showMore: "show Notification listing",
            showStatistics: "show Notification statistics",
          },
          routes: {
            toListingView: "/credits",
            toStatisticsView: "/credits/statistics",
          },
        },
      ],
    };
  }
}
</script>

<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
