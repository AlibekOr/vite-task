import type {IUser} from "@/features/auth/type/authType.ts";
import axios from "axios";
import {BASE_URL} from "@/app/config/http.ts";


export const authApi = {
  login: async (body: IUser) => {
    const response = await axios.post(`${BASE_URL}/game-api/token/`, body)
    if (response.status !== 200) {
      return Promise.reject(response)
    }
    return response;
  }
}
