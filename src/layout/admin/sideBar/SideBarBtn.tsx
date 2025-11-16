import {Box} from "@chakra-ui/react";
import {btnData, type IBtnDataType} from "@/layout/admin/sideBar/btnData.ts";
import {NavLink} from "react-router";


export const SideBarBtn = () => {

  return (
    <Box>
      {btnData.map((item: IBtnDataType) => (
        <Box>
          <Box > <NavLink to={item.path}> {item.title} </NavLink> </Box>
        </Box>
      ))}
    </Box>
  )
}
