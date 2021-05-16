/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    click = () => {
        let a = document.getElementById("wrapper");
        a.classList.toggle("toggled");
    };

    render() {
        return (

            //  Mentee Navbar Start
            <nav class="navbar navbar-expand-lg navbar-light  border-bottom ">

                <button onClick={this.click} class="btn btn-sm" id="menu-toggle">
                    <i class="fa fa-hand-point-left text-light"></i>
                </button>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="fas fa-hand-point-down text-light"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/keremdanismaz"><i class="fa fa-question-circle"></i></a>
                        </li>

                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" href="Open" id="navbarDropdown" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link to="/Settings" class="dropdown-item">Hesap Ayarları</Link>
                                <div class="dropdown-divider"></div>
                                <Link to="/" class="dropdown-item">Çıkış Yap</Link>
                            </div>

                        </li>

                    </ul>
                </div>

            </nav>
            //  Mentee Navbar End

        )
    }
}
