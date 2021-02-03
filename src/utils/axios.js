import axios from "axios";
import { Toast } from "vant";

axios.defaults.baseURL =
  process.env.NODE_ENV == "development" ? "http://localhost:3000/" : "";
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["token"] = localStorage.getItem("token") || "";
axios.defaults.headers.post["Content-Type"] = "application/json";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data) {
      return Promise.resolve(response.data);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
