<template>
  <div class="w-full overflow-auto mb-2 border" :style="style">
    <table class="table w-full h-full table-compact">
      <thead>
        <tr>
          <th>No</th>
          <th v-for="head in keys" :key="head">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover"
          v-for="(content, index) in contents"
          :key="content[keys[0]]"
        >
          <th>{{ index + 1 }}</th>
          <td v-for="val in content" :key="val">{{ val }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    style: Object,
    contents: {
      type: Object,
      required: true,
    },
  },
  computed: {
    keys() {
      return Object.keys(this.contents[0]);
    },
  },
};
</script>
