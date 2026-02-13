import './App.css'
import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import Session from './pages/admin/Session';
import Subject from './pages/admin/Subject';
import Examination from './pages/admin/Examination';
import QuestionBank from './pages/admin/QuestionBank';
import Registration from './pages/Registration';
import UserDashboard from './pages/user/UserDashboard';
import Myexams from './pages/user/Myexams';
import Myresult from './pages/user/Myresult';
import Getexams from './pages/user/Getexams';
import DashboardHome from './pages/user/DashboardHome';
import Message from './pages/user/Message';
import ChangePassword from './pages/user/ChangePassword';
import Examinee from './pages/admin/Examinee';
import ReportGeneration from './pages/admin/ReportGeneration';
import AdminChangepassword from './pages/admin/AdminChangepassword';
import MessageReply from './pages/admin/MessageReply';
import Home from './pages/Home';
import Login from './pages/Login';
import Features from './pages/Features';
import About from './pages/About';
import Course from './pages/Course';
import DashboardHomea from './pages/admin/DashboardHome';
import WebDev from './courses/Webdev';
import Mern from './courses/Mern';
import Contact from './pages/Contact';
import Dsa from './courses/Dsa';
import Ai from './courses/Ai';
import Ml from './courses/Ml';
import Dl from './courses/Deep';
import Cloud from './courses/Cloud';
import Cpp from './courses/C++';
import C from './courses/C';
import Github from './courses/Github';
import Php from './courses/Php';
import CompilerDesign from './courses/Compiler';
import CaNetwork from './courses/Computer';
import Devops from './courses/Devops';
import CoreJava from './courses/Java';
import JavaFullstack from './courses/Javazfullstack';
import Dbms from './courses/Dbms';
import Os from './courses/Os';
import DataAnalyst from './courses/Dataanalyst';
import Mysql from './courses/Mysql';
import Python from './courses/Python';
import JavaScript from './courses/Js';

import Blockchain from './courses/Blockchain';
import Cyber from './courses/Cyber';
function App() {

  return (
    <>
      <Router>
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
           <Route path='/features' element={<Features/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/course' element={<Course/>}></Route>

         <Route path='/register' element={<Registration/>}></Route>
          <Route path='/adlogin' element={<AdminLogin/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          {/* admin routes start */}
        <Route path='/adminDashboard' element={<Dashboard/>}>
    <Route index element={<DashboardHomea/>}></Route>
          <Route path='session' element={<Session/>}></Route>
          <Route path='subject' element={<Subject/>}></Route>
          <Route path='examination' element={<Examination/>}></Route>
          <Route path='question' element={<QuestionBank/>}></Route>
          <Route path='examinee' element={<Examinee/>}></Route>
          <Route path='reportGeneration' element={<ReportGeneration/>}></Route>
          <Route path='changepassword' element={<AdminChangepassword/>}></Route>
          <Route path='messageReply' element={<MessageReply/>}></Route>
        </Route>
          {/* admin routes end */}

          {/* user router start */}
  <Route path='/userDashboard' element={<UserDashboard/>}>
  <Route index element={<DashboardHome/>}></Route>
            <Route path='myexams' element={<Myexams/>}></Route>
            <Route path='myresult' element={<Myresult/>}></Route>
            <Route path='getexam/:id' element={<Getexams/>}></Route>
            <Route path='message' element={<Message/>}></Route>
            <Route path='changepassword' element={<ChangePassword/>}></Route>
        </Route>
          {/* user router end */}
          {/*courses start */}
          <Route path='/courses/webdev' element={<WebDev/>}> </Route>
          <Route path='/courses/mern' element={<Mern/>}> </Route>
          <Route path='/courses/blockchain' element={<Blockchain/>}> </Route>
          
          <Route path='/courses/dsa' element={<Dsa/>}> </Route>
          <Route path='/courses/ai' element={<Ai/>}> </Route>
          <Route path='/courses/ml' element={<Ml/>}> </Route>
          <Route path='/courses/dl' element={<Dl/>}> </Route>
          <Route path='/courses/cloud' element={<Cloud/>}> </Route>
          <Route path='/courses/cyber' element={<Cyber/>}> </Route>
          <Route path='/courses/blockchain' element={<Ai/>}> </Route>
          <Route path='/courses/cpp' element={<Cpp/>}> </Route>
          <Route path='/courses/c' element={<C/>}> </Route>
          <Route path='/courses/github' element={<Github/>}> </Route>
          <Route path='/courses/php' element={<Php/>}> </Route>
          <Route path='/courses/compiler' element={<CompilerDesign/>}> </Route>
          <Route path='/courses/computer' element={<CaNetwork/>}> </Route>
          <Route path='/courses/devops' element={<Devops/>}> </Route>
          <Route path='/courses/java' element={<CoreJava/>}> </Route>
          <Route path='/courses/javascript' element={<JavaScript/>}> </Route>
          <Route path='/courses/javafullstack' element={<JavaFullstack/>}> </Route>
          <Route path='/courses/dbms' element={<Dbms/>}> </Route>
          <Route path='/courses/os' element={<Os/>}> </Route>
          <Route path='/courses/dataanalytics' element={<DataAnalyst/>}> </Route>
          <Route path='/courses/mysql' element={<Mysql/>}> </Route>
          <Route path='/courses/python' element={<Python/>}> </Route>
          {/*courses end */}
        </Routes>
      </Router>
    </>
  )
}

export default App
