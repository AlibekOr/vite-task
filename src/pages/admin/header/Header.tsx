import {Box, Image} from "@chakra-ui/react";
import {Input, InputGroup, Circle, Switch} from "@chakra-ui/react"
import {LuSearch} from "react-icons/lu"
import IconRing from '@/assets//icon/Bell.svg'
import Moon from '@/assets/icon/Moon.png'
import Sun from '@/assets//icon/Sun.png'

export const Header = () => {
  return (
    <Box display={'flex'} flexDir={'row'} justifyContent={'space-between'} padding={'0 25px'} alignItems={'center'}>
      <Box>
        <InputGroup width={'417px'} flex="1" startElement={<LuSearch/>}>
          <Input placeholder="Search contacts" borderRadius={'100px'} borderColor={'#404040'}/>
        </InputGroup>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'20px'}>
        <Box display={'flex'} flexDir={'row'} justifyContent={'space-between'} border={'1px solid #404040'}
             borderRadius={'100px'} padding={'0 15px'} alignItems={'center'} alignContent={'center'} bg="bg.emphasized"
             width={'135px'} height={'45px'}>
          <Box position={'relative'}>
            <Image width={'24px'} height={'24px'} src={IconRing} alt="Softium"/>
            <Circle size="2" bg="red" color="white" position={'absolute'} top={'-1.5'} right={'-1'}>
            </Circle>
          </Box>
          <Box>
            2 новых
          </Box>
        </Box>
        <Box height={'30px'} border={'1px solid #404040'}> </Box>
        <Box display={'flex'} flexDir={'row'} justifyContent={'space-between'} border={'1px solid #404040'}
             borderRadius={'100px'} padding={'0 15px'} alignItems={'center'} alignContent={'center'} bg="bg.emphasized"
             width={'95px'} height={'45px'}>

          <Switch.Root colorPalette="blue" size='lg' w={'100px'}>
            <Switch.HiddenInput/>
            <Switch.Control >
              <Switch.Indicator  fallback={<Image width={'22px'} height={'22px'} src={Moon} alt="Softium"/>}>
                <Image width={'22px'} height={'22px'} src={Sun} alt="Softium"/>
              </Switch.Indicator>
            </Switch.Control>
          </Switch.Root>


        </Box>
      </Box>
    </Box>
  )
}
