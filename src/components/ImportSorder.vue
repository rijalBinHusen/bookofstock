<template>
  <div class="text-center">
    <p class="text-3xl">Import sales order</p>
    <input class="hidden" @change="impor($event)" type="file" accept=".ttx" ref="importerField" />
    <font-awesome-icon
      @click="importField"
      style="font-size: 80px; cursor: pointer"
      icon="cloud-upload-alt"
    />
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
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
      // Utuk menampung data
      let dat = [];
      // iteration
      arr.map((val) => {
        // pisahkan tabnya
        let val2 = val.split("\t");
        // Jika val2 index ke 1 tanggalnya lebih dari 1 September
        if (
          new Date(val2[1]).getTime() > new Date("9/1/2021").getTime() &&
          Boolean(Number(val2[3]))
        ) {
          dat.push({
            item: val2[13].replace(/"/gi, ""),
            qty: Number(val2[3]),
            tglSo: val2[1],
            noSo: val2[2].replace(/"/gi, ""),
          });
        }
      });
      // console.log(dat)
      // Send to writeSorder
      this.$store
        .dispatch("Impor/write", { store: "sorder", val: dat })
        .then(() => alert("selesai"));
      // console.log(this.$store.dispatch("Import/"))
      // console.log(dat)
    },
  },
};
</script>
