import {Box, } from "@chakra-ui/react";
import  {btnData,type IBtnDataType} from "@/layout/admin/sideBar/btnData.ts";
import {NavLink} from "react-router";


export const SideBarBtn = () => {

  return (
    <Box>
      {btnData.map((item: IBtnDataType) => (
        <Box display={'flex'} gap={'15px'}>
            <Box>{item.icon && <item.icon size={20} />}</Box>
            <Box color={'#C3C3C3'}>  <NavLink to={item.path} > {item.title} </NavLink> </Box>
        </Box>
      ))}
    </Box>
  )
}
