<template>
  <span>
    <input
      @change="setColor($event.target.value)"
      ref="colPick"
      type="color"
      class="w-20 hidden rounded mr-2"
    />
    <font-awesome-icon
      :style="{ color: color }"
      icon="brush"
      class="cursor-pointer"
      @click="show"
    />
  </span>
</template>

<script>
export default {
  name: "ColorPicker",
  data() {
    return {
      color: "",
    };
  },
  methods: {
    show() {
      this.$refs.colPick.click();
    },
    setColor(ev) {
      this.color = ev;
    },
  },
};
</script>
