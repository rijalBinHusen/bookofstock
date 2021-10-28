<template>
  <div class="rounded mt-2 p-2 bg-base-200" style="min-height: 400px">
    <div class="container my-4 p-1 gap-2 flex">
      <Select
        tipe="primary small"
        :options="listsGudang"
        value="id"
        text="name_warehouse"
      />
      <Input tipe="primary" placeholder="Kode item" small group />
      <Input tipe="primary" placeholder="Nama item" small group />
      <Button type="button" class="btn" primary value="Add" small />
    </div>
  </div>
</template>

<script>
import Button from "../elements/Button.vue";
import Input from "../elements/Forms/Input.vue";
import Select from "../elements/Forms/Select.vue";

export default {
  name: "ListItem",
  components: {
    Button,
    Input,
    Select,
  },
  computed: {
    listsGudang() {
      return this.$store.getters["Gudang/gudang"];
    },
  },
};
</script>
