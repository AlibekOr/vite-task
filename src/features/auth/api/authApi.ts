import type {IUser} from "@/features/auth/type/authType.ts";
import axios from "axios";
import {BASE_URL} from "@/app/config/http.ts";
import Cookies from "js-cookie";


export const authApi = {

  login: async (body: IUser) => {
    const response = await axios.post(`${BASE_URL}/game-api/token/`, body)
    if (response.status === 200) {
      Cookies.set("Token", response.data.access);
      Cookies.set("Refresh", response.data.refresh);
    } else {
      return Promise.reject(response)
    }
  },


  getMe: async () => {
    const response = await axios.get(`${BASE_URL}/game-api/employees/me/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("Token")}`,
      }
    });
    if (response.status !== 200) {
      return Promise.reject({
        status: response.status,
        ...(await response.json()),
      })
    }
    return await response.data;
  }
}
