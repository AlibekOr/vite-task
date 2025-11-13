import {Box, Image} from "@chakra-ui/react";
import {Input, InputGroup, Circle,} from "@chakra-ui/react"
import {LuSearch} from "react-icons/lu"
import IconRing from '@/assets//icon/Bell.svg'


export const Header = () => {
  return (
    <Box display={'flex'} flexDir={'row'} justifyContent={'space-between'} padding={'0 25px'} alignItems={'center'}>
      <Box>
        <InputGroup width={'417px'} flex="1" startElement={<LuSearch color={'#ffffff'} size={'18px'}/>}>
          <Input placeholder="Search contacts" borderRadius={'100px'} borderColor={'#404040'}    transition="all 1s ease"
                 _focus={{
                     color: "white",
                     borderColor: "blue.400",
                     boxShadow: "0 0 0 2px rgba(66,153,225,0.6)",
                 }}/>
        </InputGroup>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'20px'}>
        <Box display={'flex'} flexDir={'row'} justifyContent={'space-between'} border={'1px solid #404040'}
             borderRadius={'100px'} padding={'0 15px'} alignItems={'center'} alignContent={'center'} bg=""
             width={'135px'} height={'45px'}>
          <Box position={'relative'}>
            <Image width={'24px'} height={'24px'} src={IconRing} alt="Softium"/>
            <Circle size="2" bg="red" color="white" position={'absolute'} top={'-1.5'} right={'-1'}>
            </Circle>
          </Box>
          <Box color={'#ffffff'}>
            2 новых
          </Box>
        </Box>
        <Box height={'30px'} border={'1px solid #404040'}> </Box>
      </Box>
    </Box>
  )
}
