<template>
  <div class="w-full overflow-auto mb-2 border" :style="style">
    <table class="table w-full h-full table-compact">
      <thead>
        <tr>
          <th>No</th>
          <th v-for="head in keys" :key="head">
            {{ head }}
          </th>
          <th v-if="options">options</th>
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
          <td v-if="options">
            <Button
              v-if="options.includes('edit')"
              primary
              value="Edit"
              type="button"
              small
              :datanya="content[keyData]"
              @trig="$emit('edit', $event)"
            />
            <Button
              v-if="options.includes('delete')"
              secondary
              value="hapus"
              type="button"
              small
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Table",
  props: {
    keyData: String,
    style: Object,
    contents: {
      type: Object,
      required: true,
    },
    options: Array,
  },
  emits: ["edit", "hapus"],
  components: {
    Button,
  },
  computed: {
    keys() {
      return Object.keys(this.contents[0]);
    },
  },
};
</script>
