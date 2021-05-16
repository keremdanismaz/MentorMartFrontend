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
          <Role/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
