<template>
  <!-- <div :class="['h-screen bg-green-400', status ? 'w-80' : 'w-16 text-center']"> -->
  <!-- <div :class="['p-2 border-b-2 border-black', status ? 'text-right ' : '']">
      <font-awesome-icon
        v-if="status"
        @click="hide"
        class="text-4xl cursor-pointer"
        icon="times-circle"
      />
      <font-awesome-icon
        v-if="!status"
        class="text-4xl cursor-pointer"
        @click="hide"
        icon="arrow-circle-right"
      />
    </div>

    <nav :class="['mt-10 text-2xl', status ? 'text-left' : 'text-center']">
      <a
        v-for="nav in navbar"
        :key="nav.name"
        @click="moveNav(nav.name)"
        :class="[
          'text-gray-700 hover:bg-gray-100',
          currentNav == nav.name ? 'bg-white' : '',
          status ? 'flex py-2 px-8 ' : 'block mb-2 text-4xl py-2',
        ]"
        href="#"
      >
        <font-awesome-icon :icon="nav.icon" />
        <span v-if="status" class="ml-2 mb-2"> {{ nav.title }}</span>
      </a>
    </nav>

    <div v-if="status" class="absolute bottom-0 text-gray-500 my-10 ml-4">
      <span class="font-medium">
        <p>
          Nocopyright
          <font-awesome-icon icon="copyright" />
        </p>
      </span>
    </div> -->
  <!-- </div> -->
  <div class="bg-base-200">
    <div
      :class="[
        'bottom-0 w-full h-auto p-2 text-2xl',
        status ? 'text-right ' : 'text-center',
      ]"
    >
      <font-awesome-icon
        v-if="status"
        @click="hide"
        class="cursor-pointer"
        icon="times-circle"
      />
      <font-awesome-icon
        v-if="!status"
        class="cursor-pointer"
        @click="hide"
        icon="arrow-circle-right"
      />
    </div>
    <div class="py-4 artboard-demo h-screen">
      <ul
        :class="['menu py-4 rounded-box', status ? 'w-60' : 'w-16 text-center']"
      >
        <li class="hover-bordered">
          <a v-for="nav in navbar" :key="nav" @click="moveNav(nav.name)">
            <font-awesome-icon class="mr-2" :icon="nav.icon" />
            {{ status ? nav.title : "" }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
      this.$emit("currentNav", name);
    },
  },
};
</script>
