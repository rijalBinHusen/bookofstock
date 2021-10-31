<template>
  <div class="rounded mt-2 p-2 bg-base-200" style="min-height: 400px">
    <div class="container my-4 p-1 gap-2 flex">
      <Select
        tipe="primary small"
        :options="listsGroup"
        value="id"
        text="name_group"
        @selectedd="item_group = $event"
      />
      <Input
        tipe="primary"
        @send="item_kode = $event"
        @trig="send(false)"
        placeholder="Kode item"
        small
        group
      />
      <Input
        tipe="primary"
        @send="item_name = $event"
        @trig="send(false)"
        placeholder="Nama item"
        small
        group
      />
      <Button
        type="button"
        @trig="send(false)"
        class="btn"
        primary
        :value="button"
        small
      />
    </div>
    <Datatable
      :datanya="lists"
      option
      :heads="['item_group', 'item_kode', 'item_name']"
      id="datatable-items"
      keydata="id"
      no
    />
  </div>
</template>

<script>
import Button from "../elements/Button.vue";
import Input from "../elements/Forms/Input.vue";
import Select from "../elements/Forms/Select.vue";
import Datatable from "./Datatable.vue";

export default {
  name: "ListItem",
  data() {
    return {
      item_group: "",
      item_kode: "",
      item_name: "",
      id: "",
      button: "Tambah",
    };
  },
  methods: {
    send(id) {
      // console.log(this.item_group, this.item_kode, this.item_name);
      if ((this.item_group && this.item_kode && this.item_name) || id) {
        // if update
        if (this.id || id) {
          let target = this.id || id;
          let filt = this.lists.filter((val) => val.id === target)[0];
          // if toggle disable enable
          if (id) filt.status = !filt.status;
          else {
            filt.item_kode = this.item_kode;
            filt.name_name = this.name;
          }
          this.$store.dispatch("Item/update", filt);
          this.button = "Tambah";
        } else {
          this.$store.dispatch("Item/append", {
            item_group: this.item_group,
            item_kode: this.item_kode,
            item_name: this.item_name,
            status: true,
          });
        }
        this.item_name = "";
        this.item_kode = "";
      }
    },
    edit(ev) {
      let filt = this.lists.filter((val) => val.id === ev)[0];
      this.item_kode = filt.item_kode;
      this.item_name = filt.item_name;
      this.id = filt.id;
      this.button = "Update";
    },
  },
  components: {
    Button,
    Input,
    Select,
    Datatable,
  },
  computed: {
    listsGroup() {
      return [
        { id: "", name_group: "Select group" },
        ...this.$store.getters["Group/groupActive"],
      ];
    },
    lists() {
      return this.$store.state.Item.lists;
    },
  },
};
</script>
