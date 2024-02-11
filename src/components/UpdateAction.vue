<template>
  <router-link :to="to" v-slot="{ href }" custom>
    <fwb-a v-if="tag === 'a'" :href="href" class="pl-3">
      <font-awesome-icon :icon="['fas', 'pencil']" class="pr-1" />
      {{ title }}
    </fwb-a>
    <fwb-button v-if="tag === 'button'" :href="href" class="ml-3">
      <font-awesome-icon :icon="['fas', 'pencil']" class="pr-1" />
      {{ title }}
    </fwb-button>
  </router-link>
</template>

<script setup>
import { FwbA, FwbButton } from "flowbite-vue";

defineProps({
  to: {
    default: {},
  },
  title: {
    type: String,
    default: "Edit",
  },
  tag: {
    type: String,
    default: "a",
  },
});
</script>
