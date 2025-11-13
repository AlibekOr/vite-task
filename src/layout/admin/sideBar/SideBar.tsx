import {Box, Image, Text} from "@chakra-ui/react"
import logo from '@/assets/logo/Softium.jpeg'

export const SideBar = () => {
  return (
    <>
      <Box>
        <Box>
          <Box w={'270px'} height={'64px'} display="flex" flexDirection="row" borderBottom={'1px solid'}
               padding={'25px'} borderColor={'#404040'} alignContent={'flex-start'} gap={4} alignItems="center">

            <Box>
              <Image width={'60px'} height={'60px'} src={logo} alt="Softium"/>
            </Box>

            <Box>
              <Text textStyle={'xl'} color={'#ffffff'}  fontWeight="600" fontFamily="mono" letterSpacing="1px" >Softium</Text>
            </Box>

          </Box>
          </Box>

        <Box>
          hello
        </Box>

      </Box>
    </>
  )
}
