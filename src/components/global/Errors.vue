<template>
  <div
    v-if="errorStore.errors.length > 0"
    class="fixed width top-0 right-0 m-2 z-50 vp-raw grid gap-2 lg:w-1/4 w-1/2"
  >
    <fwb-alert
      v-for="(row, index) in errorStore.errors"
      :key="index"
      :type="row.kind || 'danger'"
      class="border-t-4 rounded-none"
      icon
      closable
    >
      {{ row.message }}
    </fwb-alert>
  </div>
</template>

<script setup lang="ts">
import { FwbAlert } from "flowbite-vue";

import { useErrorStore } from "../../store/error";
const errorStore = useErrorStore();
</script>

<script lang="ts">
export default {
  name: "GlobalErrors",
};
</script>
