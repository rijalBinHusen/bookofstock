<template>
  <div class="tabs tabs-boxed">
    <a
      v-for="tab in lists"
      :key="tab.name"
      :class="['tab', active == tab.name ? 'tab-active' : '']"
      @click="select(tab.name)"
    >
      {{ tab.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    lists: {
      type: Array,
      required: true,
    },
    active: String,
  },
  emits: ["select"],
  methods: {
    select(name) {
      this.$emit("select", name);
    },
  },
};
</script>
