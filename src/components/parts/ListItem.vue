<template>
  <div class="rounded mt-2 p-2 bg-base-200" style="min-height: 400px">
    <div class="container my-4 p-1 gap-2 flex">
      <span class="py-1">Group item:</span
      ><Select
        tipe="primary small"
        :options="listsGroup"
        value="id"
        text="name_group"
        :class="[item.id ? 'select-disabled' : '']"
        @selectedd="item.item_group = $event"
      />
      <Input
        tipe="primary"
        @send="item.item_kode = $event"
        @trig="send(false)"
        :value="item.item_kode"
        placeholder="Kode item"
        small
        group
      />
      <Input
        tipe="primary"
        @send="item.item_name = $event"
        @trig="send(false)"
        :value="item.item_name"
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
      :heads="['item_kode', 'item_name']"
      id="datatable-items"
      keydata="id"
      no
      v-slot:default="slotProps"
    >
      <Button
        value="Edit"
        type="button"
        small
        primary
        class="ml-2"
        :datanya="slotProps.prop.id"
        @trig="edit($event)"
      />
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
    </Datatable>
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
      item: {
        item_group: "",
        item_kode: "",
        item_name: "",
      },
      button: "Tambah",
    };
  },
  methods: {
    send(id) {
      // console.log(this.item_group, this.item_kode, this.item_name);
      const { item_group, item_kode, item_name } = this.item;

      if ((item_group && item_kode && item_name) || id) {
        // if update
        if (this.item.id || id) {
          let target = this.item.id || id;
          let filt = this.lists.filter((val) => val.id === target)[0];
          // if toggle disable enable
          if (id) filt.status = !filt.status;
          else {
            filt.item_kode = item_kode;
            filt.item_name = item_name;
          }
          this.$store.dispatch("update", { store: "Item", obj: filt });
          this.button = "Tambah";
        } else {
          this.$store.dispatch("Item/append", {
            item_group: item_group,
            item_kode: item_kode,
            item_name: item_name,
            status: true,
          });
        }
        this.item = {};
      }
    },
    edit(ev) {
      let filt = this.lists.filter((val) => val.id === ev)[0];
      this.item = JSON.parse(JSON.stringify(filt));
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
