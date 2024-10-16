<template>
  <global-errors />
  <layout-header v-if="authStore.isAuthed" />
  <div
    v-if="authStore.isAuthed"
    class="container justify-between items-center mx-auto pt-8 pb-8"
  >
    <router-view />
  </div>
  <router-view v-else />
  <layout-footer v-if="authStore.isAuthed" />
</template>

<script setup lang="ts">
import { LayoutHeader, LayoutFooter, GlobalErrors } from "./components";

import { useAuthStore } from "./store/auth";
const authStore = useAuthStore();
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  cursor: default;
}
</style>
