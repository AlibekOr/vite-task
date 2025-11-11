import {useForm} from "react-hook-form";
import type {IUser} from "@/features/auth/type/authType.ts";
import {AuthUi} from "@/features/auth/ui/AuthUi.tsx";
import {useLogin} from "@/features/auth/query/authQuery.ts";
import {useNavigate} from "react-router";

function Login() {
    const navigate = useNavigate();
  const mutation = useLogin()
  const {handleSubmit, register, formState: {errors, isSubmitting}} = useForm<IUser>()
  const onSubmit = (e: IUser) => {
    mutation.mutate(e,{
        onSuccess: () => {
            navigate('/')
        },
        onError: () => {
            alert('Login and password error')
        }
    })
  }


  return (
    <AuthUi onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors}
            isSubmitting={isSubmitting}/>
  )
}

export default Login;
