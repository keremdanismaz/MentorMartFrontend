import React from 'react';
import Navbar from "../Home Page/Navbar/Navi"
import AboutSection from "../Home Page/About Section/AboutSection"
import WhyUsSection from '../Home Page/Why Us Section/WhyUsSection';
import WhatMentorCity from '../Home Page/What MentorCity/WhatMentorCity';
import Footer from '../Home Page/Footer Section/Footer';
import RegisterOption from '../Register Page/Register Option/RegisterOption';
import RegisterMentee from '../Register Page/Register Mentee/RegisterMentee';
import RegisterMentor from '../Register Page/Register Mentor/RegisterMentor';
import Login from '../Login Page/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Role from '../Role Page/Role';
import LeftSidebar from '../Mentee Pages/LeftSidebar';
import CorporationInfo from '../Mentee Pages/CorporationInfo';
import MenteeNavbar from '../Mentee Pages/Navbar';
import Notes from '../Mentee Pages/Notes';
import Question from '../Mentee Pages/Questions';
import Meetings from '../Mentee Pages/Meetings';
import MentorInfo from '../Mentee Pages/MentorInfo';
import Settings from '../Mentee Pages/Settings';


function App() {
  return (
    <Router>
      <Switch>


        <Route exact path="/">
          <Navbar />
          <AboutSection />
          <WhyUsSection />
          <WhatMentorCity />
          <Footer />
        </Route>

        <Route exact path="/RegisterOption">
          <Navbar />
          <RegisterOption />
          <Footer />
        </Route>

        <Route exact path="/RegisterMentee">
          <RegisterMentee />
        </Route>

        <Route exact path="/RegisterMentor">
          <RegisterMentor />
        </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Role">
          <Role />
        </Route>


        <Route exact path="/CorporationInfo">
          <div class="d-flex" id="wrapper">
            <LeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <CorporationInfo />
            </div>
          </div>
        </Route>

        <Route exact path="/Notes">
          <div class="d-flex" id="wrapper">
            <LeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <Notes />
            </div>
          </div>
        </Route>

        <Route exact path="/Questions">
          <div class="d-flex" id="wrapper">
            <LeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <Question />
            </div>
          </div>
        </Route>

        <Route exact path="/Meetings">
          <div class="d-flex" id="wrapper">
            <LeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <Meetings />
            </div>
          </div>
        </Route>

        <Route exact path="/MentorInfo">
          <div class="d-flex" id="wrapper">
            <LeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <MentorInfo />
            </div>
          </div>
        </Route>

        <Route exact path="/Settings">
          <div class="d-flex" id="wrapper">
            <LeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <Settings />
            </div>
          </div>
        </Route>



      </Switch>
    </Router>
  );
}

export default App;
