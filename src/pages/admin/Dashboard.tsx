import {Box} from "@chakra-ui/react";
import {Outlet} from 'react-router'

function Dashboard() {
  return (
    <Box>
      <Outlet/>
    </Box>
  )
}

export default Dashboard;
