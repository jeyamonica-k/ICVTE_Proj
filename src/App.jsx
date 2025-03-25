import React from 'react'

import { BrowserRouter, Routes,Route } from 'react-router-dom'


import MainAbout from './About Us/MainAbout'
import MainContact from './ContactUs/MainContact'
import MainCourse from "./Course_sec/MainCourse"
import MainHome from './Home/MainHome'
import InstituteLogin from './institute_login/InstituteLogin'
import AdminLogin from "./institute_login/AdminLogin"


function App() {
  return (
 <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainHome/>}></Route> 
  <Route path="/About" element={<MainAbout/>}></Route>
  <Route path="/Courses" element={<MainCourse/>}></Route>
  <Route path="/Contact" element={<MainContact/>}></Route>
  <Route path="/Institutelogin" element={<InstituteLogin/>}></Route>
  <Route path="/Adminlogin" element={<AdminLogin/>}></Route>
</Routes>
</BrowserRouter>
 </>
  )
}

export default App

