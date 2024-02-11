<template>
  <fwb-breadcrumb solid class="m-5">
    <router-link :to="{ name: 'welcome' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href" home> Home </fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <div
    class="bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-xl text-center"
  >
    <fwb-h1
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Welcome to Kleister
    </fwb-h1>

    <div
      class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 lg:px-16 dark:text-gray-400"
    >
      Manage mod packs for Minecraft
    </div>
  </div>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from "flowbite-vue";
</script>
