<template>
  <GeneralLayout />
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

import GeneralLayout from "./components/GeneralLayout.vue";

onMounted(() => {
  initFlowbite();
});
</script>

<style scoped></style>
