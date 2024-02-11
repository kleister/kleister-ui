import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { plugin } from "@formkit/vue";
import { formkitConfig } from "../formkit.config";

import router from "./router";
import "./main.css";
import App from "./App.vue";

library.add(fab, far, fas);

const app = createApp(App);

app.use(plugin, formkitConfig);
app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
