import {Navigate} from "react-router";
import Cookies from "js-cookie";


export const ProtectedRoute = ({children}: { children: React.ReactNode }) => {

  const isAuthenticated = () => !!Cookies.get('Token');

  return isAuthenticated() ? children : <Navigate to="/login" replace/>;
};
