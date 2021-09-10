<template>
  <div :style="{ backgroundColor: color.mainPage }" class="w-full pl-4">
    <component :is="comp"></component>
  </div>
</template>
<script>
import ColorSetting from "./ColorSetting.vue";
export default {
  name: "Home",
  props: {
    comp: String,
    color: Object,
  },
  components: {
    ColorSetting,
  },
};
</script>
