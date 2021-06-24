/*
 * @Descripttion:
 * @Author: Mona
 * @Date: 2021-05-28 17:56:21
 * @LastEditTime: 2021-05-31 11:38:17
 */

import { createApp } from "vue";
import App from "/@/App.vue";
import store from "./store/store";
import router from "./router/router";

import "/@/index.css";
import "/@/assets/css/reset.css";
import "/@/utils/rem";

import { PullRefresh } from "vant";
import "vant/lib/index.css"; // 全局引入样式

const app = createApp(App);
app.use(store).use(router);
app.use(PullRefresh);
app.mount("#app");
