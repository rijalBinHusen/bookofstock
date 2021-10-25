<template>
  <button v-if="type === 'button'" :class="className" @click="trigger">
    <slot></slot>
    {{ value }}
  </button>

  <a v-if="type === 'link'" :href="href" :class="className" @click="trigger">
    <slot></slot>
    {{ value }}
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    datanya: String,
    primary: Boolean,
    secondary: Boolean,
    accent: Boolean,
    ghost: Boolean,
    value: String,
    type: String,
    class: String,
    href: String,
    icon: String,
    outline: Boolean,
  },
  emits: ["trig"],
  methods: {
    trigger() {
      this.$emit("trig", this.datanya);
    },
  },
  computed: {
    className() {
      let classList = [];
      if (this.type == "button") classList.push("btn");
      if (this.primary) classList.push("btn-primary");
      if (this.secondary) classList.push("btn-secondary");
      if (this.accent) classList.push("btn-accent");
      if (this.ghost) classList.push("btn-ghost");
      if (this.outline) classList.push("btn-outline");
      if (this.class) classList.push(this.class.split(" "));

      return classList.join(" ");
    },
  },
};
</script>
