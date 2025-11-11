import {createBrowserRouter, Navigate,} from "react-router";
import {lazy} from "react";
import Cookies from "js-cookie";

const isAuthenticated = () => !!Cookies.get('Token');
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const Home = lazy(() => import('@/pages/user/Home'))
const Login = lazy(() => import("@/features/auth/ui/Login"));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard.tsx'))
const Stores = lazy(() => import('@/pages/Stores/Stores'))
const Layout = lazy(() => import('@/layout/Layout.tsx'))
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: (
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        ),
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
      }
    ],
      errorElement: <div>error!</div>
  },
  {
    path: "/login",
    element:isAuthenticated() ? <Navigate to="/" replace /> : <Login />
  }
])
