<template>
  <fwb-footer>
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      Copyright &copy; 2024
      <a class="hover:underline" href="https://kleister.eu/">Kleister</a>. All
      rights reserved.
    </span>

    <fwb-footer-link-group>
      <fwb-footer-link href="https://twitter.com/tboerger">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </fwb-footer-link>
      <fwb-footer-link href="https://github.com/kleister">
        <font-awesome-icon :icon="['fab', 'github']" />
      </fwb-footer-link>
    </fwb-footer-link-group>
  </fwb-footer>
</template>

<script setup>
import { FwbFooter, FwbFooterLink, FwbFooterLinkGroup } from "flowbite-vue";
</script>
