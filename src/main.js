import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router";
import { Icon } from "@iconify/vue/dist/iconify.js";

const app = createApp(App);

app.component("Icon", Icon);
app.use(router);
app.mount("#app");