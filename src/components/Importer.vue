<template>
  <div class="container text-center">
    <h1 class="text-4xl border-b-2 py-2 font-bold">Importer</h1>
    <ul class="">
      <!-- Import so -->
      <li class="text-xl mt-10">
        Import data sales order
        <a
          class="btn btn-outline btn-accent"
          @click="changeForm('importSorder')"
          href="#my-modal"
        >
          <font-awesome-icon
            class="cursor-pointer text-black text-xl"
            icon="cloud-upload-alt"
          />
        </a>
      </li>

      <!-- Import all data -->
      <li class="text-xl mt-5">
        Import all data
        <font-awesome-icon
          class="cursor-pointer text-3xl"
          icon="cloud-upload-alt"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Importer",

  methods: {
    changeForm(form) {
      this.$store.dispatch("changeForm", form);
    },
  },
};
</script>
