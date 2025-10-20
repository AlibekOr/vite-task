import {createBrowserRouter, Navigate} from "react-router";
import {lazy} from "react";
import Cookies from "js-cookie";

const Login = lazy(() => import("@/features/auth/ui/Login"));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard.tsx'))

const cookie = Cookies.get('Token')

export const router = createBrowserRouter([
  {
    path: '/',
    element: cookie ? <Dashboard/> : <Navigate to={'/login'} replace/>,
    children:[
      {

      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
])
