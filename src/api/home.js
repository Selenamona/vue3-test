import axios from "/@/utils/axios.js";

export function createList(params) {
  return axios.get("/mock/getHomeList.json", params);
}
export function getPersonalInfo(params) {
  return axios.get("/mock/getPersonal.json", params);
}
