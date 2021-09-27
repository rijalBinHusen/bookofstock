<template>
  <div class="w-full pl-4">
    <component :is="comp"></component>
  </div>
</template>
<script>
import Incoming from "./Incoming.vue";
import Setting from "./Setting.vue";
import Vehicles from "./Vehicles.vue";
import Importer from "./Importer.vue";
export default {
  name: "Home",
  props: {
    comp: String,
  },
  components: {
    Incoming,
    Setting,
    Vehicles,
    Importer,
  },
};
</script>
