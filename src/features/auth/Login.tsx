
import {useForm, type SubmitHandler} from 'react-hook-form'
import {Box, Input} from "@chakra-ui/react";

type Inputs = {
  login: string
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  console.log(watch("login"))
  console.log()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={'Login'} {...register('login')}{...{required: true}}/>
      {errors.login && <span>This field is required</span>}
      <Input placeholder={'Password'} {...register('password')} {...{required: true}}  />
      {errors.password && <Box as={'span'}>This field is required</Box>}
      <input type="submit"/>
    </form>
  )
}

export default Login;
