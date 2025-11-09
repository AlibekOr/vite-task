import {useForm} from "react-hook-form";
import type {IUser} from "@/features/auth/type/authType.ts";
import {AuthUi} from "@/features/auth/ui/AuthUi.tsx";
import {useLogin} from "@/features/auth/query/authQuery.ts";

function Login() {
  const mutation = useLogin()
  const {handleSubmit, register, formState: {errors, isSubmitting}} = useForm<IUser>()
  const onSubmit = (e: IUser) => {
    mutation.mutate(e)

  }


  return (
    <AuthUi onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors}
            isSubmitting={isSubmitting}/>
  )
}

export default Login;
