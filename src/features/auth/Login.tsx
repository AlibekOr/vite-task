import {Box, Container, VStack, Heading, Stack, Field, Input, Button} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useState} from "react";

interface LoginProps {
  login: string,
  password: string,
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {handleSubmit, register, formState: {errors, isSubmitting}} = useForm<LoginProps>()
  const onSubmit = (e: LoginProps) => {
    console.log(e)
  }
  return (
    <Box minH={"100vh"} bg={"white"} direction={"flex"} alignItems={"center"} alignContent={'center'}
         justifyContent={"center"}>
      <Container maxW={'lg'} py={15}>
        <Box p={8} borderRadius={'xl'} boxShadow={'md'}>
          <VStack gap={6} align={'stretch'}>
            <VStack gap={2}>
              <Heading size="xl" color={'black'} textAlign="center">
                Sign In
              </Heading>

            </VStack>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={4}>
                <Field.Root invalid={!!errors.login}>
                  <Field.Label color={'black'} fontWeight={'medium'}>Email</Field.Label>
                  <Input type={'text'}
                         placeholder="login"
                         size="lg"
                         color="black"
                         {...register('login', {
                           required: "required",
                         })}
                  />

                </Field.Root>

                <Field.Root invalid={!!errors.password}>
                  <Field.Label color="gray.700" fontWeight="medium">
                    Parol
                  </Field.Label>
                  <Box w={'100%'} position="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Parolingizni kiriting"
                      size="lg"
                      w={'100%'}
                      pr="12"
                      color="black"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters long',
                        },
                      })}
                    />
                    <Button
                      position="absolute"
                      right="2"
                      top="50%"
                      bg={'transparent'}
                      transform="translateY(-50%)"
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </Button>
                  </Box>

                </Field.Root>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  loading={isSubmitting}
                  w="full"
                  mt={4}
                >
                  Kirish
                </Button>
              </Stack>

            </form>

          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Login;
