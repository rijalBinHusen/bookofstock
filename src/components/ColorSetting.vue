<template>
  <div class="grid grid-rows-3 place-items-center h-screen">
    <div class="text-3xl md:row-start-2">
      <div>
        <select v-model="colorFor" class="rounded mr-2 px-2">
          <option value="sidebar">Sidebar color</option>
          <option value="mainPage">Main page color</option>
          <option value="icon">Icon color</option>
        </select>
        <color-picker @setColor="setColor($event)"></color-picker>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from "./ColorPicker.vue";

export default {
  name: "ColorSetting",
  data() {
    return {
      colorFor: "",
    };
  },
  components: {
    ColorPicker,
  },
  methods: {
    setColor(col) {
      this.$store.dispatch("setColor", { [this.colorFor]: col });
    },
    addStyle(styles) {
      /* Create style element */
      var css = document.createElement("style");
      css.type = "text/css";

      if (css.styleSheet) css.styleSheet.cssText = styles;
      else css.appendChild(document.createTextNode(styles));

      /* Append style to the head element */
      document.getElementsByTagName("head")[0].appendChild(css);
    },
  },
};
</script>
