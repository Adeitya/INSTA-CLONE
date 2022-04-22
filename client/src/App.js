import React from "react";
import { Link } from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import NavBar from "./components/Navbar";
import Home from "./components/screens/Home";
import Signin from "./components/screens/Signin";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
