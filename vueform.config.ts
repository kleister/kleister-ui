import tailwind from "@vueform/vueform/dist/tailwind";
import en from "@vueform/vueform/locales/en";

import { defineConfig } from "@vueform/vueform";

export default defineConfig({
  theme: tailwind,
  locales: { en },
  locale: "en",
});
