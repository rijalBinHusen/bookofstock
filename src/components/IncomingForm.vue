<template>
  <div>
    <div
      id="incoming_add_form"
      class="grid rounded justify-items-center m-auto px-2 py-20 bg-base-200"
    >
      <div id="incoming_add_mode" class="mb-2 grid justify-items-center">
        <select
          class="select select-bordered select-primary"
          id="inventory_form_warehouse"
        >
          <option value="">No paper</option>
          <option value="true">With paper</option>
        </select>
      </div>

      <div id="incoming_add_form" class="grid justify-items-center">
        <div id="incoming_info" class="mb-2 grid grid-cols-3 gap-4">
          <!-- date picker -->
          <datepicker
            class="input input-outline input-primary"
            v-model="selected"
          ></datepicker>
          <!-- end of date picker -->
          <!-- Shift -->
          <select
            class="select select-bordered select-primary"
            id="incoming_add_shift"
          >
            <option value="">Shift</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <!-- end of Shift -->
          <!-- Coming from -->
          <input
            type="text"
            class="input input-outline input-primary"
            id="coming_from"
            placeholder="Coming from"
          />
          <!-- End of coming from -->
        </div>

        <div id="incoming_paper" class="mb-2 grid grid-cols-3 gap-4">
          <input
            class="input input-outline input-primary"
            type="text"
            placeholder="Paper id"
            id="incoming_paper_id"
          />

          <input
            type="text"
            class="input input-outline input-primary"
            id="incoming_hand_by"
            placeholder="Hand by"
          />

          <input
            type="text"
            class="input input-outline input-primary"
            id="incoming_receive_by"
            placeholder="Receive by"
          />
        </div>

        <div id="incoming_items" class="grid grid-cols-3 gap-4 mb-2">
          <input
            class="input input-outline input-primary"
            type="text"
            id="incoming_item_code"
            placeholder="Item code"
          />
          <input
            class="input input-outline input-primary"
            type="text"
            placeholder="Created goods"
            id="incoming_item_created"
          />
          <input
            class="input input-outline input-primary"
            type="number"
            id="incoming_item_quantity"
            placeholder="Quantity"
          />
        </div>
        <div id="incoming_item_add" class="w-full text-right">
          <input
            class="btn btn-success"
            type="submit"
            id="incoming_item_quantity"
            value="+ Add items"
          />
        </div>
        <div id="incoming_add_submit" class="w-full">
          <input
            class="btn btn-success"
            type="submit"
            id="incoming_item_quantity"
            value="Submit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomingForm",
  data() {
    return {
      selected: new Date(),
    };
  },
};
</script>
