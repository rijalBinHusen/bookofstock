<template>
  <div class="rounded mt-2 p-2 bg-base-200" style="min-height: 400px">
    <div class="container my-4 p-1 gap-2 flex">
      <Select
        tipe="primary small"
        :options="listsGroup"
        value="id"
        text="name_group"
      />
      <Input tipe="primary" placeholder="Kode item" small group />
      <Input tipe="primary" placeholder="Nama item" small group />
      <Button type="button" class="btn" primary value="Add" small />
    </div>
    <Datatable
      :datanya="lists"
      option
      :heads="['kode']"
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
      lists: [],
    };
  },
  components: {
    Button,
    Input,
    Select,
    Datatable,
  },
  computed: {
    listsGroup() {
      return this.$store.getters["Group/groupActive"];
    },
  },
};
</script>
