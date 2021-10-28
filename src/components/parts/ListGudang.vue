<template>
  <div class="rounded w-2/6 mt-2 p-2 bg-base-200" style="min-height: 400px">
    <h1 class="text-2xl mb-2">Daftar gudang</h1>
    <form @submit.prevent="send" class="mb-2">
      <Input
        label="Nama gudang"
        tipe="primary"
        placeholder="Nama gudang"
        @send="gudang = $event"
        :button="button"
        :value="gudang"
        @trig="send"
      />
    </form>
    <Table
      v-if="lists.length > 0"
      :contents="lists"
      :options="['edit']"
      keyData="id"
      @edit="edit($event)"
    />
  </div>
</template>

<script>
import Input from "../elements/Forms/Input.vue";
import Table from "../elements/Table.vue";

export default {
  name: "ListGudang",
  data() {
    return {
      gudang: "",
      lists: [],
      button: "Tambah",
      id: "",
    };
  },
  methods: {
    send() {
      if (this.gudang) {
        // if update
        if (this.id) {
          this.$store.dispatch("Gudang/update", {
            id: this.id,
            name_warehouse: this.gudang,
          });
          this.button = "Tambah";
          this.getGudang();
        } else this.$store.dispatch("Gudang/append", this.gudang);
      }
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
  },
  mounted() {
    this.getGudang();
  },
};
</script>
