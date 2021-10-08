<template>
  <div id="vehicle_add" class="w-full grid justify-items-center text-center bg-base-200 rounded-lg">
    <!-- Judul -->
    <h3 class="text-4xl font-bold">Add vehicle</h3>
    <div id="vehicle_add_form" class="w-96 grid grid-cols-1 p-6">
      <form ref="vehicle_form" @submit.prevent="send">
        <div class="grid grid-cols-1 grid-cols-3 justify-items-center">
          <!-- Tanggal -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">Tanggal</span>
            </label>
            <datepicker class="input btn-sm text-center w-full input-info" v-model="selected"></datepicker>
          </div>
          <!-- Nomor antrian -->
          <div class="form-control mx-2">
            <label class="label">
              <span class="label-text">Antrian</span>
            </label>
            <input
              type="text"
              placeholder="Antrian"
              :value="antrian"
              @change="antrian = $event.target.value"
              class="input btn-sm input-info input-bordered text-center w-20"
            />
          </div>
          <!-- End of Nomor antrian -->
          <!-- Waktu  -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">Waktu</span>
            </label>
            <TimePicker class="btn-sm" @time="gantiWaktu($event)" />
          </div>
          <!-- End of Waktu  -->
        </div>
        <!-- Plat nomor -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Plat No</span>
          </label>
          <input
            type="text"
            placeholder="Plat nomor"
            :value="platNo"
            @change="platNo = $event.target.value"
            class="input btn-sm input-info input-bordered text-center text-xl"
          />
        </div>
        <!-- End of Plat nomor -->

        <!-- Nomor dokument -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">No dokumen</span>
          </label>
          <div class="flex space-x-1">
            <input
              type="text"
              ref="noSo"
              placeholder="No dokumen"
              list="sorder"
              class="input btn-sm input-info input-bordered text-center text-xl w-full my-1"
            />
            <datalist id="sorder">
              <option v-for="so in sorder" :key="so.noSo">{{ so.noSo + " - " + so.cust }}</option>
            </datalist>
            <button
              @click.prevent="tambahDok('')"
              class="btn btn-sm my-1 text-xl font-bold btn-success"
            >+</button>
          </div>
          <div v-if="noDoc.length > 0">
            <span v-for="doc in noDoc" :key="doc">{{ doc }}</span>
          </div>
        </div>
        <!-- End of Nomor dokumen -->

        <!-- Catatan -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Catatan</span>
          </label>
          <input
            type="text"
            :value="notes"
            @change="notes = $event.target.value"
            placeholder="Catatan"
            class="input btn-sm input-info input-bordered text-center text-xl"
          />
        </div>
        <!-- End of Catatan -->

        <div class="form-control mt-4">
          <input class="btn btn-success" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TimePicker from "./TimePicker.vue";

export default {
  name: "VehiclesForm.vue",
  components: {
    TimePicker,
  },
  data() {
    return {
      gudang: this.$store.getters["gudang"],
      selected: new Date(),
      antrian: 1,
      platNo: "",
      noDoc: "",
      notes: "",
    };
  },
  methods: {
    // Kirim ke vuex
    send() {
      // Send to vuex
      if (this.gudang) {
        this.$store.dispatch("Vehicles/append", {
          gudang: this.gudang,
          antrian: this.antrian,
          waktu: this.selected.getTime(),
          platNo: this.platNo,
          noDoc: this.noDoc,
          notes: this.notes,
        });
        this.$store.dispatch("changeForm", "");
        window.location.href = "#";
      }
    },
    // ganti waktu
    gantiWaktu(ev) {
      let splitter = ev.split(":");
      this.selected.setHours(splitter[0]);
      this.selected.setMinutes(splitter[1]);
    },
    // tambah nomor dokumen
    tambahDok() {
      // this.noDoc.push();
      if (!this.noDoc) {
        this.noDoc = this.$refs.noSo.value.split("-")[0];
      } else {
        this.noDoc += "/" + this.$refs.noSo.value.split("-")[0]
      }
      this.$refs.noSo.value = ""
    },
  },
  computed: {
    sorder() {
      return this.$store.getters["Sorder/sorder"];
    },
  },
  mounted() {
    this.antrian = this.$store.getters["Vehicles/antrian"]
  }
};
</script>
