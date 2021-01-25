import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import store from "@/store";
import router from "@/router";

const app = createApp(App).mount("#app");
app.use(store);
app.use(router);
