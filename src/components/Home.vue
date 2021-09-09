<template>
  <div class="bg-black bg-opacity-50 w-full pl-4">
    <component :is="comp"></component>
  </div>
</template>
<script>
import ColorSetting from "./ColorSetting.vue";
export default {
  name: "Home",
  props: {
    comp: String,
  },
  components: {
    ColorSetting,
  },
};
</script>
