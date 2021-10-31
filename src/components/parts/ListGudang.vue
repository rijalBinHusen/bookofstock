<template>
  <div
    class="rounded md:max-w-md mt-2 p-2 bg-base-200"
    style="min-height: 400px"
  >
    <h1 class="text-2xl mb-2">Daftar gudang</h1>
    <form @submit.prevent="send(false)" class="mb-2">
      <Input
        label="Nama gudang"
        tipe="primary"
        placeholder="Nama gudang"
        @send="gudang = $event"
        :button="button"
        :value="gudang"
        @trig="send(false)"
      />
    </form>
    <Table
      v-if="lists && lists.length > 0"
      :contents="lists"
      :options="['edit']"
      keyData="id"
      @edit="edit($event)"
      v-slot:default="slotProps"
      :thead="['id', 'Nama gudang']"
      :tbody="['id', 'name_warehouse']"
    >
      <Button
        :secondary="slotProps.prop.status == false"
        :primary="slotProps.prop.status == true"
        :value="slotProps.prop.status === true ? 'Enabled' : 'Disabled'"
        type="button"
        small
        class="ml-2"
        :datanya="slotProps.prop.id"
        @trig="send($event)"
      />
    </Table>
  </div>
</template>

<script>
import Input from "../elements/Forms/Input.vue";
import Table from "../elements/Table.vue";
import Button from "../elements/Button.vue";

export default {
  name: "ListGudang",
  data() {
    return {
      gudang: "",
      button: "Tambah",
      update: {},
    };
  },
  methods: {
    send(id) {
      if (this.gudang) {
        // if update
        if (this.update.id) {
          // change the name warehouse of this.update
          this.update.name_warehouse = this.gudang;
          // send to vuex
          this.$store.dispatch("update", { store: "Gudang", obj: this.update });
          // change the button value
          this.button = "Tambah";
        } else
          this.$store.dispatch("Gudang/append", {
            name_warehouse: this.gudang,
            status: true,
          });
      }
      // if toggle disable enable
      else if (id) {
        let filt = this.lists.filter((val) => val.id === id)[0];
        // change the status
        filt.status = !filt.status;
        // send to vuex
        this.$store.dispatch("update", { store: "Gudang", obj: filt });
      }
      this.getGudang();
      this.gudang = "";
    },
    getGudang() {
      this.lists = this.$store.getters["Gudang/gudang"];
    },
    edit(ev) {
      let filt = this.lists.filter((val) => val.id === ev)[0];
      this.gudang = filt.name_warehouse;
      this.id = filt.id;
      this.button = "Update";
    },
  },
  components: {
    Input,
    Table,
    Button,
  },
  computed: {
    lists() {
      return this.$store.state.Gudang.lists;
    },
  },
};
</script>
