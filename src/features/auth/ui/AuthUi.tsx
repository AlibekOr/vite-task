import {Box, Button, Container, Field, Heading, Input, Stack, VStack} from "@chakra-ui/react";
import {useState} from "react";
import type {IUser} from "@/features/auth/type/authType.ts";
import type {FieldErrors, UseFormHandleSubmit, UseFormRegister} from "react-hook-form";

interface IProps {
  onSubmit: (e: IUser) => void;
  handleSubmit: UseFormHandleSubmit<IUser, IUser>;
  register: UseFormRegister<IUser>;
  errors: FieldErrors;
  isSubmitting: boolean;
}

export const AuthUi = (props: IProps) => {
  const {register, onSubmit, handleSubmit, errors, isSubmitting} = props
  const [showPassword, setShowPassword] = useState(false);

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
                <Field.Root invalid={!!errors.phone_number}>
                  <Field.Label color={'black'} fontWeight={'medium'}>Phone number</Field.Label>
                  <Input type={'text'}
                         placeholder="Phone number"
                         size="lg"
                         color="black"
                         {...register('phone_number', {
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
                  Sig in
                </Button>
              </Stack>

            </form>

          </VStack>
        </Box>
      </Container>
    </Box>

  )
}
