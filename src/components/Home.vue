<template>
  <div class="w-full pl-4">
    <component :is="comp"></component>
  </div>
</template>
<script>
import Incoming from "./Incoming.vue";
import Setting from "./Setting.vue";
export default {
  name: "Home",
  props: {
    comp: String,
    color: Object,
  },
  components: {
    Incoming,
    Setting,
  },
};
</script>
