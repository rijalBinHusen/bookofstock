<template>
  <div class="flex w-full h-full">
    <!-- <Sidebar @currentNav="currentNav($event)" :navbar="navbar" />
    <Home :comp="nav" />
    <Modal />-->
    <!-- <Button value="Test" datanya="asd" @trig="cek($event)" tipe="primary" /> -->
    <Form label="test" @send="cek($event)" placeholder="test" tipe="primary large border" />
    <Form label="test" @send="cek($event)" placeholder="test" tipe="secondary small border" />
    <Form label="test" @send="cek($event)" placeholder="test" tipe="accent xsmall border" />
    <Form label="test" @send="cek($event)" placeholder="test" tipe="primary large" />
    <Form label="test" @send="cek($event)" placeholder="test" tipe="secondary small" />
    <Form label="test" @send="cek($event)" placeholder="test" tipe="accent xsmall" />
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import Home from "./components/Home.vue";
// import Sidebar from "./components/Sidebar.vue";
// import Modal from "./components/Modal.vue";
// import Button from "./components/elements/Button.vue";
import Form from "./components/elements/Forms/Input.vue";

export default {
  name: "App",
  data() {
    return {
      // navbar: [
      //   { name: "Vehicles", title: "Vehicles", icon: "truck-moving" },
      //   // { name: "MasterItems", title: "Master Items", icon: "layer-group" },
      //   // { name: "Incoming", title: "Icoming", icon: "dice-d6" },
      //   // { name: "Output", title: "Output", icon: "shopping-cart" },
      //   { name: "Importer", title: "Importer", icon: "file-upload" },
      //   // { name: "Exporter", title: "Exporter", icon: "file-download" },
      //   // { name: "Setting", title: "Setting", icon: "cog" },
      // ],
      // nav: "MasterItems",
    };
  },
  components: {
    // Sidebar,
    // Home,
    // Modal,
    // Button,
    Form
  },
  methods: {
    // currentNav(name) {
    //   this.nav = name;
    // },
    cek(ev) {
      console.log(ev);
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
