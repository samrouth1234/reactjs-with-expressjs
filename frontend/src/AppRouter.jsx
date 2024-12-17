import {
  Route,
  Routes,
} from "react-router-dom";

import { ABOUT_US_PAGE, BLOG_PAGE, CONTACT_PAGE, LANDING_PAGE, LOGIN_PAGE, REGISTER_PAGE, SERVICE_PAGE } from "./constants/Routes";

import AboutUs from "./page/about-us/AboutUs";
import ContactPage from "./page/contact/ContactPage";
import Langding from "./page/landing/Langding";
import Service from "./page/service/Service";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import BlogPage from "./page/blog/BlogPage";

const AppRouter = () =>{
  return (
    <Routes>
      <Route path={LANDING_PAGE} element={<Langding/>} />
      <Route path={ABOUT_US_PAGE} element={<AboutUs/>} />
      <Route path={SERVICE_PAGE} element={<Service/>} />
      <Route path={CONTACT_PAGE} element={<ContactPage/>} />
      <Route path={BLOG_PAGE} element={<BlogPage/>} />
      <Route path={LOGIN_PAGE} element={<Login/>} />
      <Route path={REGISTER_PAGE} element={<Register/>} />
    </Routes>
  )
}

export default AppRouter;