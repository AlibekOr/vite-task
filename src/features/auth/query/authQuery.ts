import {useMutation} from "@tanstack/react-query";
import {authApi} from "@/features/auth/api/authApi.ts";
import Cookies from "js-cookie";
import {useNavigate} from "react-router";

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: ({data}) => {
      navigate('/')
      Cookies.set("Token", data.access);
      Cookies.set("Refresh", data.refresh);
    }
  })
}
