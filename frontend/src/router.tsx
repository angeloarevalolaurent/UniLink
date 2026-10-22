import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import LinkTreeView from "./views/LinkTreeView";
import ProfileView from "./views/ProfileView";


export default function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path="/auth/login" element={<LoginView/>}/>
                <Route path="/auth/register" element={<RegisterView/>}/>
            </Route>

            <Route path="/admin" element={<AppLayout/>}>
                <Route index={true} element={<LinkTreeView/>}/>
                <Route path="profile" element={<ProfileView/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
