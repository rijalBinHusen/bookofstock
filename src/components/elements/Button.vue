<template>
  <button :class="['btn', className[tipe]].join(' ')" @click="test">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    datanya: String,
    tipe: String,
    value: String,
  },
  emits: ["trig"],
  data() {
    return {
      className: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
        ghost: "btn-ghost",
        link: "btn-link",
      },
    };
  },
  methods: {
    test() {
      this.$emit("trig", this.datanya);
    },
  },
};
</script>
