<template>
  <section
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
        <p>Credits</p>
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
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Welcome extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
