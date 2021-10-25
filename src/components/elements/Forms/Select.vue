<template>
  <select :class="selectTipe" @change="$emit('selectedd', $event.target.value)">
    <option v-for="op in options" :key="op">
      {{ op }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    class: String,
    options: {
      type: Array,
      required: true,
    },
    tipe: {
      type: String,
    },
  },
  emits: ["selectedd"],
  computed: {
    selectTipe() {
      let className = ["select", "select-bordered", this.class.split("")];

      if (this.tipe.includes("primary")) className.push("select-primary");
      if (this.tipe.includes("secondary")) className.push("select-secondary");
      if (this.tipe.includes("accent")) className.push("select-accent");
      if (this.tipe.includes("info")) className.push("select-info");
      if (this.tipe.includes("success")) className.push("select-success");
      if (this.tipe.includes("warning")) className.push("select-warning");
      if (this.tipe.includes("error")) className.push("select-error");
      if (this.tipe.includes("large")) className.push("select-lg");
      if (this.tipe.includes("small")) className.push("select-sm");
      if (this.tipe.includes("xsmall")) className.push("select-xs");

      return className.join(" ");
    },
  },
};
</script>
