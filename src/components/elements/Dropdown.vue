<template>
  <div class="dropdown mr-5 px-5">
    <div tabindex="0" :class="className">
      {{ text }}
    </div>
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-30"
    >
      <li @click="val.method(value)" v-for="op in options" :key="op.value">
        <a>
          {{ op.text }}
          <font-awesome-icon v-if="val.icon" class="ml-1" :icon="val.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    text: {
      type: String,
      required: true,
    },
    success: Boolean,
    primary: Boolean,
    secondary: Boolean,
    accent: Boolean,
    ghost: Boolean,
    class: String,
    href: String,
    icon: String,
    outline: Boolean,
    small: Boolean,
    options: {
      required: true,
      type: Object,
    },
    // options = [{method: '', text: '', icon: '', value: ''}]
  },
  computed: {
    className() {
      let classList = ["btn", "m-1"];
      if (this.small) classList.push("btn-sm");
      if (this.primary) classList.push("btn-primary");
      if (this.secondary) classList.push("btn-secondary");
      if (this.accent) classList.push("btn-accent");
      if (this.ghost) classList.push("btn-ghost");
      if (this.outline) classList.push("btn-outline");
      if (this.success) classList.push("btn-success");
      if (this.class) classList.push(this.class.split(" "));

      return classList.join(" ");
    },
  },
};
</script>
