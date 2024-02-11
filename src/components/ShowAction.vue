<template>
  <router-link :to="to" v-slot="{ href }" custom>
    <fwb-a :href="href" class="pl-3">
      <font-awesome-icon :icon="['fas', 'file']" class="pr-1" />
      {{ title }}
    </fwb-a>
  </router-link>
</template>

<script setup>
import { FwbA } from "flowbite-vue";

defineProps({
  to: {
    default: {},
  },
  title: {
    type: String,
    default: "Show",
  },
});
</script>
