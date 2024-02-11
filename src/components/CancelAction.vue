<template>
  <router-link :to="to" v-slot="{ href }" custom>
    <fwb-button :href="href" class="ml-3">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="pr-1" />
      {{ title }}
    </fwb-button>
  </router-link>
</template>

<script setup>
import { FwbButton } from "flowbite-vue";

defineProps({
  to: {
    default: {},
  },
  title: {
    type: String,
    default: "Cancel",
  },
});
</script>
