<template>
  <div
    class="rounded md:max-w-md mt-2 p-2 bg-base-200"
    style="min-height: 400px"
  >
    <h1 class="text-2xl mb-2">Daftar Group</h1>
    <span class="mr-2">Gudang :</span>
    <form @submit.prevent="send(false)" class="mb-2">
      <Select
        tipe="primary"
        :options="listsGudang"
        value="id"
        text="name_warehouse"
        @selectedd="gudang = $event"
        ref="gudang"
      />
      <Input
        label="Nama group"
        tipe="primary"
        placeholder="Nama group"
        @send="group = $event"
        :button="button"
        :value="group"
        @trig="send(false)"
      />
    </form>
    <Table
      v-if="lists && lists.length > 0"
      :contents="lists"
      :options="['edit']"
      keyData="id"
      @edit="edit($event)"
      :thead="['id', 'Nama group']"
      :tbody="['id', 'name_group']"
      v-slot:default="slotProps"
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
import Select from "../elements/Forms/Select.vue";
import Button from "../elements/Button.vue";

export default {
  name: "ListGroup",
  data() {
    return {
      gudang: "",
      group: "",
      button: "Tambah",
      update: {},
    };
  },
  methods: {
    send(id) {
      if ((this.group && this.gudang) || id) {
        // if update
        if (this.update.id || id) {
          let target = this.update.id || id;
          let filt = this.lists.filter((val) => val.id === target)[0];
          // if toggle disable enable
          if (id) filt.status = !filt.status;
          else filt.name_group = this.group;
          this.$store.dispatch("update", { store: "Group", obj: filt });
          this.button = "Tambah";
        } else
          this.$store.dispatch("Group/append", {
            location: this.gudang,
            name_group: this.group,
            status: true,
          });
        this.group = "";
      }
    },
    edit(ev) {
      let filt = this.lists.filter((val) => val.id === ev)[0];
      this.group = filt.name_group;
      this.update = filt;
      this.button = "Update";
    },
  },
  components: {
    Input,
    Table,
    Select,
    Button,
  },
  computed: {
    listsGudang() {
      return [
        { id: "", name_warehouse: "Pilih gudang" },
        ...this.$store.getters["Gudang/gudangActive"],
      ];
    },
    lists() {
      return this.$store.getters["Group/groupByWarehouse"](this.gudang);
    },
  },
};
</script>
