<template>
  <div class="input input-info input-bordered">
    <select
      @change="clock = $event.target.value"
      class="bg-transparent text-xl appearance-none outline-none"
    >
      <option
        :selected="number == clock"
        v-for="number in Array.from(Array(24).keys())"
        :key="number"
      >
        {{ number > 9 ? number : "0" + number }}
      </option>
    </select>
    <span> : </span>
    <select
      @change="minutes = $event.target.value"
      class="bg-transparent text-xl appearance-none outline-none"
    >
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
      required: false,
      default() {
        return new Date();
      },
    },
  },
  data() {
    return {
      clock: this.time.getHours(),
      minutes: this.time.getMinutes(),
    };
  },
  watch: {
    clock: function (newVal) {
      this.$emit("time", newVal + ":" + this.minutes);
    },
    minutes: function (newVal) {
      this.$emit("time", this.clock + ":" + newVal);
    },
  },
};
</script>
