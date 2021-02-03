import axios from "/@/utils/axios.js";

export function createList(params) {
  return axios.get("/getList", params);
}
