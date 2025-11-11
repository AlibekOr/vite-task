import {useMutation} from "@tanstack/react-query";
import {authApi} from "@/features/auth/api/authApi.ts";


export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,

  })
}
