/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false,
    };
  }
  click = () => {
    let a = document.getElementById("wrapper");
    a.classList.toggle("toggled");
  };

  logOut = () => {
    const cookies = new Cookies();
    cookies.remove("jwt");
    this.setState({ logout: true });
    alertify.success("Başarıyla çıkış yapıldı.");
  };

  render() {
    if (this.state.logout) {
      return <Redirect to="/" />;
    }
    return (
      //  Mentor Navbar Start
      <nav class="navbar navbar-expand-lg navbar-light  border-bottom ">
        <button onClick={this.click} class="btn btn-sm" id="menu-toggle">
          <i class="fa fa-hand-point-left text-light"></i>
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-hand-point-down text-light"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/keremdanismaz">
                <i class="fa fa-question-circle"></i>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="Open"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user"></i>
              </a>

              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/Mentor/Settings" class="dropdown-item">
                  Hesap Ayarları
                </Link>
                <div class="dropdown-divider"></div>
                <button onClick={this.logOut} class="dropdown-item">
                  Çıkış Yap
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      //  Mentor Navbar End
    );
  }
}
