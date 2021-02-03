import axios from "/@/utils/axios.js";

export function createList(params) {
  return axios.get("/mock/getHomeList.json", params);
}
