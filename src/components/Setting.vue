<template>
  <div class="border-r-2 p-6 h-full">
    <Tab :lists="tabs" />
    <!-- <p class="text-3xl">
      Daftar gudang
      <a
        class="btn btn-outline btn-accent"
        @click="changeForm('IncomingForm')"
        href="#my-modal"
      >
        <font-awesome-icon
          icon="plus-square"
          style="font-size: 30px; color: black"
        />
      </a>
    </p> -->
  </div>
</template>

<script>
import Tab from "./elements/Tab.vue";

export default {
  name: "Setting",
  data() {
    return {
      tabs: [
        { name: "gudang", title: "Daftar gudang" },
        { name: "item", title: "Daftar item" },
      ],
    };
  },
  components: {
    Tab,
  },
};
</script>
