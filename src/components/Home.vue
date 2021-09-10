<template>
  <div class="w-full pl-4">
    <component :is="comp"></component>
  </div>
</template>
<script>
import Incoming from "./Incoming.vue";
export default {
  name: "Home",
  props: {
    comp: String,
    color: Object,
  },
  components: {
    Incoming,
  },
};
</script>
