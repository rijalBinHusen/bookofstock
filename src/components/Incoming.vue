<template>
  <div id="incoming_main" class="mx-auto">
    <div id="incoming_form" class="mt-4 flex gap-2 text-2xl">
      Tanggal :
      <input
        type="date"
        class="
          py-1
          text-black-700
          bg-white bg-opacity-50
          rounded
          focus:outline-none focus:bg-white
          px-5
          w-60
          mr-2
        "
      />
      Shift :
      <select
        class="
          py-1
          text-black-700
          bg-white bg-opacity-50
          rounded
          focus:outline-none focus:bg-white
          px-5
          w-20
        "
        id="inventory_form_shift"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input
        type="submit"
        class="
          text-black-700
          bg-white bg-opacity-50
          rounded
          focus:outline-none focus:bg-white
          w-20
        "
        value="Cari"
      />
    </div>

    <div id="incoming_form_add" class="container text-center my-4">
      <span class="text-3xl font-bold"> Incoming product </span>

      <button
        class="
          mt-4
          text-2xl
          px-3
          py-1
          text-black-700
          bg-white bg-opacity-50
          rounded
          focus:outline-none focus:bg-white
        "
      >
        <font-awesome-icon
          icon="plus-square"
          style="font-size: 30px; color: black"
        />
      </button>
    </div>

    <div id="incoming_table">incoming table</div>
  </div>
</template>

<script>
export default {
  name: "incoming",
};
</script>
