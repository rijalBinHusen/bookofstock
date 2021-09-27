<template>
  <div class="text-center">
    <p class="text-3xl">Import sales order</p>
    <input
      class="hidden"
      @change="impor($event)"
      type="file"
      accept=".ttx"
      ref="importerField"
    />
    <font-awesome-icon
      @click="importField"
      style="font-size: 80px; cursor: pointer"
      icon="cloud-upload-alt"
    />
  </div>
</template>

<script>
export default {
  name: "importSorder",
  methods: {
    importField() {
      this.$refs.importerField.click();
    },
    impor(ev) {
      //buka loader
      //   this.$store.dispatch("Modal/loading", "open");
      // console.log(ev);
      const reader = new FileReader();

      //when reading is completed load
      reader.onload = (event) => this.splitter(event.target.result.split("\n"));

      reader.readAsText(ev.target.files[0]);
    },
    splitter(arr) {
      let dat = [];
      arr.map((val) => {
        dat.push(val.split("\t"));
      });
      let res = [];
      dat.map((val) => {
        val.length > 5 && val[1] > "1-Sept-2021"
          ? res.push({
              tglSo: val[1],
              noSo: val[2].replace(/"/gi, ""),
              item: val[13].replace(/"/gi, ""),
              qty: Number(val[3]),
            })
          : false;
      });
      console.log(res);
    },
  },
};
</script>
