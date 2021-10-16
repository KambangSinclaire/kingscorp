<template>
  <div class="list-container w-full bg-white pt-8 h-screen">
    <div class="search-action-btns flex items-center mb-4">
      <button class="add-btn app-btn relative left-28" @click="openAddNewForm">
        New
      </button>
      <div class="search_form w-1/2 mx-auto my-3">
        <input type="text" class="form-control" placeholder="Search..." />
      </div>
      <!-- @mouseenter="toggleSideAction"  can replace @click if need be -->
      <span
        class="more-actions icons relative right-28"
        @click="toggleSideAction"
      >
        <i class="add-item mx-2">
          <img
            src="@/assets/feather_icons/more-vertical.svg"
            alt=""
            srcset=""
          />
        </i>
      </span>
      <div
        v-if="showMoreActions"
        class="
          dropdown-list
          bg-gray-200
          rounded
          p-4
          flex flex-col
          absolute
          right-4
          top-56
        "
      >
        <span
          class="
            dropdown-item
            cursor-pointer
            p-4
            hover:bg-gray-800
            hover:text-white
          "
          v-for="(listItem, index) in dropdownDetails"
          :key="index"
        >
          <router-link :to="listItem.url ?? '/'">
            <span>
              <img :src="listItem.icon" :alt="listItem.title" />
              <i>{{ listItem.title ?? 'not updated' }}</i>
            </span>
          </router-link>
        </span>
        <hr />
      </div>
    </div>

    <div class="list-items flex justify-evenly items-center font-extrabold">
      <span
        class="name w-1/6"
        v-for="(title, index) in listingTitles"
        :key="index"
        >{{ title }}</span
      >
    </div>
    <br />
    <hr />

    <div
      class="
        list-items
        flex
        justify-evenly
        items-center
        shadow-sm
        py-6
        cursor-pointer
      "
      v-for="(data, index) of listData"
      :key="index"
    >
      <span
        class="name w-1/6"
        v-for="(entry, index2) in formatedTitles"
        :key="index2"
      >
        {{
          (typeof data[`${entry}`] === "string" &&
            !data[`${entry}`].trim().endsWith(".svg")) ||
          typeof data[`${entry}`] === "number"
            ? data[`${entry}`]
            : ""
        }}

        <img
          v-if="
            typeof data[`${entry}`] === 'string' &&
            data[`${entry}`].trim().endsWith('.svg')
          "
          :src="data[`${entry}`]"
          alt="image here"
        />
      </span>

      <span
        class="action-items flex justify-evenly items-center w-1/6"
        v-if="options.actions"
      >
        <i class="add-item mx-2 cursor-pointer">
          <img src="@/assets/feather_icons/eye.svg" alt="" srcset="" />
        </i>
        <i class="add-item mx-2">
          <img src="@/assets/feather_icons/edit.svg" alt="" srcset="" />
        </i>
        <i class="add-item mx-2">
          <img src="@/assets/feather_icons/trash-2.svg" alt="" srcset="" />
        </i>
      </span>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    listingTitles: Array,
    listData: Array,
    options: Object,
  },
  computed: {
    formatedTitles() {
      if (this.options.actions && !this.listingTitles.includes("Action"))
        this.listingTitles.push("Action");
      return this.listingTitles.map((title) => title.toLowerCase());
    },
    dropdownDetails() {
      return this.$store.getters.getDropDowns
    },
  },
  methods: {
    toggleSideAction() {
      this.showMoreActions = !this.showMoreActions;
      this.$emit("fetchDropDownIcons");
    },
    openAddNewForm() {
      this.$emit("toggleAddNewForm", "form opened");
    },
  },
  emits: ["toggleAddNewForm", "fetchDropDownIcons"],
})
export default class Listing extends Vue {
  data() {
    return {
      showMoreActions: false,
      searchQuery: "",
    };
  }
}
</script>

<style lang="scss" scoped>
</style>

