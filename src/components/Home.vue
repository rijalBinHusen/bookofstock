<template>
  <div class="w-full pl-4 bg-green-200">
    <component :is="comp"></component>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: {
    comp: String,
    color: Object,
  },
  components: {},
};
</script>
