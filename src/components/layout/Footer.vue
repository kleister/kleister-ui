<template>
  <footer
    class="p-8 bg-white shadow dark:bg-gray-800 border-gray-200 dark:border-gray-700"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >
        Copyright &copy; 2024
        <a class="hover:underline" href="https://kleister.eu/">Kleister</a>. All
        rights reserved.
      </span>

      <fwb-footer-link-group>
        <fwb-footer-link href="#" @click.prevent="localize('de')">
          🇩🇪
        </fwb-footer-link>
        <fwb-footer-link href="#" @click.prevent="localize('en')">
          🇺🇸
        </fwb-footer-link>
        <fwb-footer-link href="https://twitter.com/tboerger">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </fwb-footer-link>
        <fwb-footer-link href="https://github.com/kleister">
          <font-awesome-icon :icon="['fab', 'github']" />
        </fwb-footer-link>
      </fwb-footer-link-group>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FwbFooterLink, FwbFooterLinkGroup } from "flowbite-vue";

import { useI18n } from "vue-i18n";

const { locale } = useI18n({
  useScope: "global",
});

function localize(val: string) {
  switch (val) {
    case "de": {
      locale.value = "de-DE";
      break;
    }
    case "en": {
      locale.value = "en-US";
      break;
    }
  }
}
</script>

<script lang="ts">
export default {
  name: "LayoutFooter",
};
</script>
