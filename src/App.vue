<template>
  <Sidebar color="bg-green-400" :navbar="navbar" />
  <Home />
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from "./components/Home.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  data() {
    return {
      navbar: [
        { name: "Incoming", title: "Icoming", icon: "dice-d6" },
        { name: "Vehicles", title: "Vehicles", icon: "truck-moving" },
        { name: "Output", title: "Output", icon: "shopping-cart" },
        { name: "MasterItems", title: "Master Items", icon: "layer-group" },
        { name: "Importer", title: "Importer", icon: "file-upload" },
        { name: "Exporter", title: "Exporter", icon: "file-download" },
      ],
    };
  },
  components: {
    Sidebar,
    Home,
  },
};
</script>
