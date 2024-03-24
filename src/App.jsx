import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Payment from "./pages/Payment/Payment";
import Budget from "./pages/Budget/Budget";
import Report from "./pages/Report/Report";
import Analytics from "./pages/Analytics/Analytics";
import SideBar from "./components/Sidebar/SideBar";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Settings from "./pages/Settings/Settings";
import ShowModal from "./components/ShowModal/ShowModal";
import LoadingBar from "react-top-loading-bar";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loader } from "./utilities/Redux/loadingSlice";
import PrivateRoute from "./utilities/PrivateRoute";
import { fetchUserDetails, user } from "./utilities/Redux/userSlice";
import NavBar from "./components/NavBar/NavBar";
function App() {
  const location = useLocation();
  const shouldShowSidebar = () => {
    const { pathname } = location;
    return !["/login", "/signup"].includes(pathname);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // Setting up routes of pages with react-router-dom

    <div className="home">
      {" "}
      {/* giving css to the div beceause sidebar takes whole screen and makes main page invisible DON'T MESS ANYTHING HERE IF POSSIBLE!!!*/}
      <LoadingBar color="#37689A" height={4} progress={useSelector(loader)} />
      <Toaster />
      {shouldShowSidebar() && <SideBar />}
      {shouldShowSidebar() && <ShowModal />}
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        {/* These are the private routes which can be accessed only if user is logged in */}
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/payments" element={<Payment />} />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/budget" element={<Budget />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/setting" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
