<template>
  <div class="border-r-2 p-6 h-full">
    <Tab
      :lists="tabs"
      @select="activeComponent = $event"
      :active="activeComponent"
    />
    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import Tab from "./elements/Tab.vue";
import ListGudang from "./parts/ListGudang.vue";

export default {
  name: "Setting",
  data() {
    return {
      tabs: [
        { name: "ListGudang", title: "Daftar gudang" },
        { name: "item", title: "Daftar item" },
      ],
      activeComponent: "ListGudang",
    };
  },
  components: {
    Tab,
    ListGudang,
  },
};
</script>
