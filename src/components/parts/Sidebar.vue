<template>
  <div class="bg-base-200 min-h-screen border-r-2 border-black">
    <div
      :class="['w-full p-2 text-2xl', status ? 'text-right ' : 'text-center']"
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
    <div class="py-4 artboard-demo">
      <ul
        :class="['menu py-4 rounded-box', status ? 'w-60' : 'w-16 text-center']"
      >
        <li class="hover-bordered">
          <a
            :class="[currentNav === nav.name ? 'active' : '']"
            v-for="nav in navbar"
            :key="nav"
            @click="moveNav(nav.name)"
          >
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
