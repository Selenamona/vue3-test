import { createApp } from "vue";
import App from "/@/App.vue";
import "/@/index.css";
import "/@/assets/css/reset.css";
import "/@/utils/common";

import store from "/@/store/store";
import router from "/@/router/router";

createApp(App).use(store).use(router).mount("#app");
