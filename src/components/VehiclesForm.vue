<template>
  <div
    id="vehicle_add"
    class="w-full grid justify-items-center text-center bg-base-200 rounded-lg"
  >
    <!-- Judul -->
    <h3 class="text-4xl font-bold">Add vehicle</h3>

    <div id="vehicle_add_form" class="w-96 grid grid-cols-1 p-6">
      <form @submit.prevent="send">
        <!-- Nomor antrian -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Antrian</span>
          </label>
          <input
            type="text"
            placeholder="Antrian"
            :value="antrian"
            @change="antrian = $event.target.value"
            class="input input-info input-bordered text-center text-xl"
          />
        </div>
        <!-- End of Nomor antrian -->
        <!-- Waktu  -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Waktu</span>
          </label>
          <TimePicker @time="waktu = $event" />
        </div>
        <!-- End of Waktu  -->

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
            class="input input-info input-bordered text-center text-xl"
          />
        </div>
        <!-- End of Plat nomor -->

        <!-- Nomor dokument -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">No dokumen</span>
          </label>
          <input
            type="text"
            :value="noDoc"
            @change="noDoc = $event.target.value"
            placeholder="No dokumen"
            class="input input-info input-bordered text-center text-xl"
          />
        </div>
        <!-- End of Nomor dokument -->

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
            class="input input-info input-bordered text-center text-xl"
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
      antrian: 1,
      waktu: {},
      platNo: "",
      noDoc: "",
      notes: "",
    };
  },
  methods: {
    send() {
      console.log({
        antrian: this.antrian,
        waktu: this.waktu,
        platNo: this.platNo,
        noDoc: this.noDoc,
        notes: this.notes,
      })
    }
  }
};
</script>
