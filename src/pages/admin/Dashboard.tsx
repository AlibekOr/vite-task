import {Outlet} from 'react-router'
import {Box, Grid, GridItem} from '@chakra-ui/react';
import {SideBar} from "@/pages/admin/sideBar/SideBar.tsx";
import {Header} from "@/pages/admin/header/Header.tsx";

function Dashboard() {

  return (
    <Box bg="gray.900" minH="100vh" p={0}>
      <Grid
        templateColumns="280px 1fr"
        gap={0}
        h="100vh"
      >
        {/* Left Sidebar */}
        <GridItem borderRight="1px solid"
                  borderColor="#404040"
                  p={4} bg="gray.800" w={'100%'}>
          <SideBar/>
        </GridItem>

        {/* Main Content */}
        <GridItem bg="gray.900">
          <Grid
            templateRows="80px 1fr"
            h="full"
          >
            {/* Header */}
            <GridItem borderBottom="1px solid" borderColor="#404040"
                      bg="gray.800" p={4}>
              <Header/>
            </GridItem>
            {/* Content */}

            <GridItem bg="#121212">
              <Outlet/>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Dashboard;
