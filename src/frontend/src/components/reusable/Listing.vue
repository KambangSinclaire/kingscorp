<template>
  <section class="parent-container relative">
    <div
      class="list-container w-full bg-white"
      :class="{
        'bg-gray-500':
          openAddForm || openDeleteForm || openEditForm || openDetailsForm,
      }"
    >
      <div class="search-action-btns flex items-center mb-4">
        <button class="add-btn app-btn relative left-28" @click="addNewForm">
          <i class="fas fa-plus-circle" aria-hidden="true"></i>
          New {{ options.entity }}
        </button>
        <div class="search_form w-1/2 mx-auto my-3">
          <input
            type="text"
            class="form-control text-center"
            :placeholder="'Filter ' + options.entity ?? '...' + '...'"
          />
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
              hover:bg-gray-800 hover:text-white
            "
            v-for="(listItem, index) in dropdownDetails"
            :key="index"
          >
            <router-link :to="listItem.url ?? '/'">
              <span>
                <img :src="listItem.icon" :alt="listItem.title" />
                <i>{{ listItem.title ?? "not updated" }}</i>
              </span>
            </router-link>
          </span>
          <hr />
        </div>
      </div>

      <!-- <div class="list-items flex justify-evenly items-center font-extrabold">
        <span
          class="entity w-1/6 text-center"
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
          class="w-1/6 text-center"
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

        <p
          class="action-items flex justify-evenly items-center w-1/6"
          v-if="options.actionBtns"
        >
          <span @click="detailsForm(data)">
            <i class="far fa-eye mx-2 cursor-pointer text-yellow-600"></i>
          </span>
          <span @click="editForm(data)">
            <i class="far fa-edit mx-2 text-green-500"></i>
          </span>
          <span @click="deleteForm(data)">
            <i class="far fa-trash-alt mx-2 text-red-500"></i>
          </span>
        </p>
      </div> -->
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="(title, index) in listingTitles"
                    :key="index"
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-xs
                      font-extrabold
                      text-black
                      uppercase
                      tracking-wider
                      text-center
                    "
                  >
                    {{ title !== 'Action' ? title : '' }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(data, index) of listData" :key="index">
                  <td
                    v-for="(entry, index2) in formatedTitles"
                    :key="index2"
                    class="px-6 py-4 text-center"
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
            
                    <p
                      class="
                        action-items
                        flex
                        text-center
                        relative left-4
                        w-1/6
                      "
                      v-if="options.actionBtns && entry == 'action'"
                    >
                      <span @click="detailsForm(data)">
                        <i
                          class="far fa-eye mx-2 cursor-pointer text-yellow-600"
                        ></i>
                      </span>
                      <span @click="editForm(data)">
                        <i class="far fa-edit mx-2 cursor-pointer text-green-500"></i>
                      </span>
                      <span @click="deleteForm(data)">
                        <i class="far fa-trash-alt mx-2 cursor-pointer text-red-500"></i>
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <Add
      v-if="openAddForm"
      @closeForm="openAddForm = !openAddForm"
      :setup="{
        inputs: options.inputs,
        entity: options.entity,
        actions: options.actions,
      }"
    />
    <Delete
      v-if="openDeleteForm"
      @closeForm="openDeleteForm = !openDeleteForm"
      :setup="{
        data: options.data,
        actions: options.actions,
      }"
    />
    <Edit
      v-if="openEditForm"
      @closeForm="openEditForm = !openEditForm"
      :setup="{
        inputs: options.inputs,
        data: options.data,
        actions: options.actions,
      }"
    />
    <Details
      v-if="openDetailsForm"
      @closeForm="openDetailsForm = !openDetailsForm"
      :setup="{
        inputs: options.inputs,
        data: options.data,
        actions: options.actions,
      }"
    />
  </section>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Add from "./Add.vue";
import Delete from "./Delete.vue";
import Details from "./Details.vue";
import Edit from "./Edit.vue";

@Options({
  components: {
    Add,
    Delete,
    Edit,
    Details,
  },
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
      return this.$store.getters.getDropDowns;
    },
  },
  methods: {
    toggleSideAction() {
      this.showMoreActions = !this.showMoreActions;
      this.$emit("fetchDropDownIcons");
    },
    addNewForm() {
      this.openAddForm = true;
    },
    deleteForm(data) {
      this.options.data = { ...data, entity: this.options.entity };
      this.openDeleteForm = true;
    },
    editForm(data) {
      this.options.data = { ...data, entity: this.options.entity };
      this.openEditForm = true;
    },
    detailsForm(data) {
      this.options.data = { ...data, entity: this.options.entity };
      this.openDetailsForm = true;
    },
  },
  emits: ["toggleAddNewForm", "fetchDropDownIcons"],
})
export default class Listing extends Vue {
  data() {
    return {
      showMoreActions: false,
      searchQuery: "",
      openAddForm: false,
      openDeleteForm: false,
      openEditForm: false,
      openDetailsForm: false,
    };
  }
}
</script>

<style lang="scss" scoped>
</style>

