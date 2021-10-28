import React from 'react';

// Ana Sayfa Componentleri
import Navbar from "../Home Page/Navbar/Navi"
import AboutSection from "../Home Page/About Section/AboutSection"
import WhyUsSection from '../Home Page/Why Us Section/WhyUsSection';
import WhatMentorCity from '../Home Page/What MentorCity/WhatMentorCity';
import Footer from '../Home Page/Footer Section/Footer';
import Carousel from '../Home Page/Carousel/Carousel';

// Kayıt Ol sayfaları Componentleri
import RegisterOption from '../Register Page/Register Option/RegisterOption';
import RegisterMentee from '../Register Page/Register Mentee/RegisterMentee';
import RegisterMentor from '../Register Page/Register Mentor/RegisterMentor';

// Giriş sayfaları Componentleri
import Login from '../Login Page/Login';
import Register from '../Register Page/Register Mentee/Register';
import Role from '../Role Page/Role';

// Mentee sayfaları Componentleri
import MenteeLeftSidebar from '../Mentee Pages/LeftSidebar';
import MenteeCorporationInfo from '../Mentee Pages/CorporationInfo';
import MenteeNavbar from '../Mentee Pages/Navbar';
import MenteeSettings from '../Mentee Pages/Settings';
import MenteeMeetings from '../Mentee Pages/Meetings';
import MenteeQuestion from '../Mentee Pages/Questions';
import MenteeNotes from '../Mentee Pages/Notes';
import MentorInfo from '../Mentee Pages/MentorInfo';

// Mentor sayfaları Componentleri
import MentorLeftSidebar from '../Mentor Pages/LeftSidebar';
import MentorCorporationInfo from '../Mentor Pages/CorporationInfo';
import MentorNavbar from '../Mentor Pages/Navbar';
import MentorNotes from '../Mentor Pages/Notes';
import MentorQuestion from '../Mentor Pages/Question';
import MentorMeetings from '../Mentor Pages/Meetings';
import MentorSettings from '../Mentor Pages/Settings';
import MenteeInfo from '../Mentor Pages/MenteeInfo';
import PersonelInformation from '../Mentor Pages/PersonelInformation';

// Diğer Sayfalar
import Solutions from '../Solutions Page/Solutions ';
import Pricing from '../Pricing Page/Pricing';
import ScreenShot from '../ScreenShot Page/ScreenShot';


// React-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>

        {/* Bütün Kullanıcıların Ulaşabildiği sayfalar- Login Olmasına gerek yok */}
        <Route exact path="/">
          <Navbar />
          <Carousel />
          <AboutSection />
          <WhyUsSection />
          <WhatMentorCity />
          <Footer />
        </Route>

        <Route exact path="/Solutions">
          <Navbar />
          <Solutions />
          <Footer />
        </Route>

        <Route exact path="/Pricing">
          <Navbar />
          <Pricing />
          <Footer />
        </Route>

        <Route exact path="/Screenshots">
          <Navbar />
          <ScreenShot />
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

        <Route exact path="/Register">
          <Register />
        </Route>

        <Route exact path="/Role">
          <Role />
        </Route>

        {/* Sadece Menteeler Ulaşabilir. */}
        <Route exact path="/Mentee/CorporationInfo">
          <div class="d-flex" id="wrapper">
            <MenteeLeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <MenteeCorporationInfo />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentee/Notes">
          <div class="d-flex" id="wrapper">
            <MenteeLeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <MenteeNotes />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentee/Questions">
          <div class="d-flex" id="wrapper">
            <MenteeLeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <MenteeQuestion />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentee/Meetings">
          <div class="d-flex" id="wrapper">
            <MenteeLeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <MenteeMeetings />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentee/MentorInfo">
          <div class="d-flex" id="wrapper">
            <MenteeLeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <MentorInfo />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentee/Settings">
          <div class="d-flex" id="wrapper">
            <MenteeLeftSidebar />
            <div id="page-content-wrapper">
              <MenteeNavbar />
              <MenteeSettings />
            </div>
          </div>
        </Route>

        {/* Sadece Mentorlar Ulaşabilir. */}
        <Route exact path="/Mentor/CorporationInfo">
          <div class="d-flex" id="wrapper">
            <MentorLeftSidebar />
            <div id="page-content-wrapper">
              <MentorNavbar />
              <MentorCorporationInfo />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentor/Notes">
          <div class="d-flex" id="wrapper">
            <MentorLeftSidebar />
            <div id="page-content-wrapper">
              <MentorNavbar />
              <MentorNotes />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentor/Questions">
          <div class="d-flex" id="wrapper">
            <MentorLeftSidebar />
            <div id="page-content-wrapper">
              <MentorNavbar />
              <MentorQuestion />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentor/Meetings">
          <div class="d-flex" id="wrapper">
            <MentorLeftSidebar />
            <div id="page-content-wrapper">
              <MentorNavbar />
              <MentorMeetings />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentor/MenteesInfo">
          <div class="d-flex" id="wrapper">
            <MentorLeftSidebar />
            <div id="page-content-wrapper">
              <MentorNavbar />
              <MenteeInfo />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentor/PersonelInformation">
          <div class="d-flex" id="wrapper">
            <MentorLeftSidebar />
            <div id="page-content-wrapper">
              <MentorNavbar />
              <PersonelInformation />
            </div>
          </div>
        </Route>

        <Route exact path="/Mentor/Settings">
          <div class="d-flex" id="wrapper">
            <MentorLeftSidebar />
            <div id="page-content-wrapper">
              <MentorNavbar />
              <MentorSettings />
            </div>
          </div>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
