<template>
  <div id="incoming_main" class="mx-auto">
    <div id="incoming_form" class="mt-4 flex gap-2 text-2xl">
      Tanggal :
      <datepicker class="input input-primary" v-model="selected"></datepicker>
      Shift :
      <select
        class="select-md select select-primary select-bordered w-20"
        id="inventory_form_shift"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type="submit" class="btn btn-primary" value="Tampilkan" />
    </div>

    <div id="incoming_form_add" class="container text-center my-4">
      <span class="text-3xl font-bold"> Incoming product </span>

      <a
        class="btn btn-outline btn-accent"
        @click="changeForm('IncomingForm')"
        href="#my-modal"
      >
        <font-awesome-icon
          icon="plus-square"
          style="font-size: 30px; color: black"
        />
      </a>
    </div>

    <div id="incoming_table">incoming table</div>
  </div>
</template>

<script>
export default {
  name: "incoming",
  data() {
    return {
      selected: new Date(),
    };
  },
  methods: {
    changeForm(form) {
      this.$store.dispatch("changeForm", form);
    },
  },
};
</script>
