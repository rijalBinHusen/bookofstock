<template>
  <div id="incoming_main" class="mx-auto">
    <div id="incoming_form" class="mt-4 flex gap-2 text-2xl">
      Tanggal :
      <datepicker class="input input-primary" v-model="selected"></datepicker>
      <Button primary value="tampilkan" type="button" />
    </div>

    <div id="incoming_form_add" class="container text-center my-4">
      <span class="text-3xl font-bold"> Incoming product </span>

      <Button
        type="link"
        href="#my-modal"
        class="btn"
        accent
        outline
        @trig="changeForm('IncomingForm')"
      >
        <font-awesome-icon
          icon="plus-square"
          style="font-size: 30px; color: black"
        />
      </Button>

      <!-- <a
        class="btn btn-outline btn-accent"
        @click="changeForm('IncomingForm')"
        href="#my-modal"
      >
      </a> -->
    </div>

    <!-- <div id="incoming_table">incoming table</div> -->
    <Table :contents="lists" v-if="lists.length > 0" />

  </div>
</template>

<script>
// Import button
import Button from "./elements/Button.vue";
import Table from "./elements/Table.vue";

export default {
  name: "incoming",
  data() {
    return {
      selected: new Date(),
      shift: 1,
    };
  },
  methods: {
    changeForm(form) {
      this.$store.dispatch("changeForm", form);
    },
    changeShift(ev) {
      this.shift = ev;
    },
  },
  components: {
    Button,
    Table,
  },
  computed: {
    lists() {
      return this.$store.getters["Incoming/lists"];
    },
  },
};
</script>
