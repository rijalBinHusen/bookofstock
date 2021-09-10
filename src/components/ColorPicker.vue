<template>
  <span>
    <input
      @change="setColor($event.target.value)"
      ref="colPick"
      type="color"
      class="w-20 hidden rounded mr-2"
    />
    <font-awesome-icon icon="brush" class="cursor-pointer" @click="show" />
  </span>
</template>

<script>
export default {
  name: "ColorPicker",
  data() {
    return {};
  },
  methods: {
    show() {
      this.$refs.colPick.click();
    },
    setColor(ev) {
      this.$emit("setColor", ev);
    },
  },
};
</script>
