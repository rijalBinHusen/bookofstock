<template>
  <div class="input input-info input-bordered py-2">
    <select class="bg-transparent text-xl appearance-none outline-none">
      <option
        :selected="number == clock"
        v-for="number in Array.from(Array(24).keys())"
        :key="number"
      >
        {{ number > 9 ? number : "0" + number }}
      </option>
    </select>
    <span> : </span>
    <select class="bg-transparent text-xl appearance-none outline-none">
      <option
        :selected="number == minutes"
        v-for="number in Array.from(Array(60).keys())"
        :key="number"
      >
        {{ number > 9 ? number : "0" + number }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "TimePicker",
  props: {
    time: {
      type: Object,
      required: true,
      default: new Date(),
    },
  },
  data() {
    return {
      clock: this.time.getHours(),
      minutes: this.time.getMinutes(),
    };
  },
};
</script>
