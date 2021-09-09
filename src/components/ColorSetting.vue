<template>
  <div class="grid grid-rows-3 place-items-center h-screen">
    <div class="text-3xl md:row-start-2">
      <div>
        <select class="rounded mr-2 px-2" :style="{ backgroundColor: 'blue' }">
          <option>Sidebar color</option>
          <option>Main page color</option>
          <option>Icon color</option>
          <option>Text color</option>
        </select>
        <color-picker></color-picker>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from "./ColorPicker.vue";

export default {
  name: "ColorSetting",
  components: {
    ColorPicker,
  },
};
</script>
