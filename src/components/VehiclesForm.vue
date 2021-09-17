<template>
  <div
    id="vehicle_add"
    class="w-full grid justify-items-center text-center bg-base-200 rounded-lg"
  >
    <h3 class="text-4xl font-bold">Add vehicle</h3>


    <div id="vehicle_add_form" class="w-96 grid grid-cols-1 p-6">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Antrian</span>
        </label>
        <input
          type="text"
          placeholder="Antrian"
          class="input input-info input-bordered text-center text-xl"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Waktu</span>
        </label>
        <TimePicker />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Plat No</span>
        </label>
        <input
          type="text"
          placeholder="Plat nomor"
          class="input input-info input-bordered text-center text-xl"
        />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">No dokumen</span>
        </label>
        <input
          type="text"
          placeholder="No dokumen"
          class="input input-info input-bordered text-center text-xl"
        />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Catatan</span>
        </label>
        <input
          type="text"
          placeholder="Catatan"
          class="input input-info input-bordered text-center text-xl"
        />
      </div>

      <div class="form-control mt-4">
        <input class="btn btn-success" type="submit" value="Submit" />
      </div>
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
};
</script>
