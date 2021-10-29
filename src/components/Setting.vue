<template>
  <div class="border-r-2 p-6 min-h-full">
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
import ListItem from "./parts/ListItem.vue";

export default {
  name: "Setting",
  data() {
    return {
      tabs: [
        { name: "ListGudang", title: "Daftar gudang" },
        { name: "ListGroup", title: "Daftar Group item" },
        { name: "ListItem", title: "Daftar item" },
      ],
      activeComponent: "ListGudang",
    };
  },
  components: {
    Tab,
    ListGudang,
    ListItem,
  },
};
</script>
