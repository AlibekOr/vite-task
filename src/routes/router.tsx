import {createBrowserRouter, Navigate} from "react-router";
import {lazy} from "react";
import Cookies from "js-cookie";


const Home = lazy(() => import('@/pages/user/Home'))
const Login = lazy(() => import("@/features/auth/ui/Login"));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard.tsx'))
const Stores = lazy(() => import('@/pages/Stores/Stores'))
const cookie = Cookies.get('Token')

export const router = createBrowserRouter([
  {
    path: '/',
    element: cookie ? <Dashboard/> : <Navigate to={'/login'} replace={true}/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/stores',
        element: <Stores/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
])
