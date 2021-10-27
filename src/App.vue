<template>
  <div class="flex w-full h-full">
    <Sidebar @currentNav="currentNav($event)" :navbar="navbar" />
    <Home :comp="nav" />
    <Modal />
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from "./components/Home.vue";
import Sidebar from "./components/Sidebar.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      navbar: [
        // { name: "Vehicles", title: "Vehicles", icon: "truck-moving" },
        // { name: "MasterItems", title: "Master Items", icon: "layer-group" },
        { name: "Incoming", title: "Icoming", icon: "dice-d6" },
        // { name: "Output", title: "Output", icon: "shopping-cart" },
        // { name: "Importer", title: "Importer", icon: "file-upload" },
        // { name: "Exporter", title: "Exporter", icon: "file-download" },
        { name: "Setting", title: "Setting", icon: "cog" },
      ],
      nav: "MasterItems",
    };
  },
  components: {
    Sidebar,
    Home,
    Modal,
  },
  methods: {
    currentNav(name) {
      this.nav = name;
    },
  },
  mounted() {
    // get vehicles data
    // this.$store.dispatch("Sorder/getStart");
    // this.$store.dispatch("Vehicles/getStart");
    // // check is the user selected the warehouse;
    // this.$store.getters["gudang"];
  },
};
</script>
