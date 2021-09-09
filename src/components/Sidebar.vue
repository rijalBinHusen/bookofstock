<template>
  <div class="">
    <div v-if="status" :class="['w-64 h-screen fixed', color]">
      <div class="text-right p-2 border-b-2 border-black">
        <font-awesome-icon
          @click="hide"
          class="text-4xl cursor-pointer"
          icon="times-circle"
        />
      </div>
      <nav class="mt-10 text-2xl">
        <a
          v-for="nav in navbar"
          :key="nav.name"
          @click="moveNav(nav.name)"
          :class="[
            'flex py-2 px-8 text-gray-700 hover:bg-gray-100',
            currentNav == nav.name ? 'bg-white' : '',
          ]"
          href="#"
        >
          <font-awesome-icon :icon="nav.icon" />
          <span class="ml-2 mb-2"> {{ nav.title }}</span>
        </a>
      </nav>

      <div class="absolute bottom-0 my-10">
        <a
          class="flex items-center py-2 px-8 text-gray-500 hover:text-gray-600"
          href="#"
        >
          <span class="mx-4 font-medium">Support</span>
        </a>
      </div>
    </div>
    <div v-else class="bottom-0 fixed m-5">
      <span>
        <font-awesome-icon
          class="text-5xl cursor-pointer"
          @click="hide"
          icon="arrow-circle-right"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    navbar: Array,
  },
  name: "Sidebar",
  data() {
    return {
      status: true,
      currentNav: "",
    };
  },
  methods: {
    hide() {
      this.status = !this.status;
    },
    moveNav(name) {
      this.currentNav = name;
    },
  },
};
</script>
