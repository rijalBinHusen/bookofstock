<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      type="text"
      :placeholder="placeholder"
      :class="formTipe"
      @keyup="send($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      required: true,
    },
    tipe: String,
    placeholder: String,
  },
  emits: ["send"],
  methods: {
    send(ev) {
      this.$emit("send", ev);
    },
  },
  computed: {
    formTipe() {
      let className = ["input"];

      if (this.tipe.includes("primary")) className.push("input-primary");
      if (this.tipe.includes("secondary")) className.push("input-secondary");
      if (this.tipe.includes("accent")) className.push("input-accent");
      if (this.tipe.includes("border")) className.push("input-bordered");
      if (this.tipe.includes("large")) className.push("input-large");
      if (this.tipe.includes("small")) className.push("input-sm");
      if (this.tipe.includes("xsmall")) className.push("input-xs");

      return className.join(" ");
    },
  },
};
</script>
