<template>
  <div class="tabs tabs-boxed">
    <a
      class="tab"
      v-for="tab in lists"
      :key="tab.name"
      @click="select($event, tab.name)"
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
  },
  emits: ["select"],
  methods: {
    select(ev, name) {
      document.querySelectorAll(".tab").forEach((el) => {
        el.classList.remove("tab-active");
      });
      ev.target.classList += " tab-active";
      this.$emit("select", name);
    },
  },
};
</script>
