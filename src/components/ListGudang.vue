<template>
  <div class="grid rounded justify-items-center m-auto px-2 py-20 bg-base-200">
    <h1 class="text-5xl mb-9">Pilih gudang</h1>
    <form @submit.prevent="send">
      <select
        v-model="gudang"
        class="select mb-2 select-bordered select-primary mr-2"
      >
        <option value="GJDP">Gudang jadi depan</option>
        <option value="GJST">Gudang jadi sentral</option>
        <option value="GJCC">Gudang jadi corn chip</option>
        <option value="GJH3">Gudang jadi hall 3</option>
        <option value="GJBC">Gudang jadi biscuit</option>
        <option value="GJJBN">Gudang jadi jabon</option>
      </select>
      <input class="btn btn-primary" type="submit" value="lanjut" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ListGudang",
  data() {
    return {
      gudang: "",
    };
  },
  methods: {
    send() {
      if (this.gudang) {
        window.location.href = "#";
        this.$store.dispatch("gudang", this.gudang);
      }
    },
  },
};
</script>
