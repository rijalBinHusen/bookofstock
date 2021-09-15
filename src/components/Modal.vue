<template>
  <div id="my-modal" class="modal bg-white bg-opacity-80">
    <div class="w-full mx-20 my-2">
      <component :is="form"></component>
      <div class="modal-action">
        <a href="#" class="btn btn-primary">Accept</a>
        <a href="#" class="btn">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
import IncomingForm from "./IncomingForm.vue";
export default {
  name: "Modal",
  components: {
    IncomingForm,
  },
  computed: {
    form() {
      return this.$store.getters["form"];
    },
  },
};
</script>
