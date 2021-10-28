import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';
import { Link } from "react-router-dom";
class Navi extends Component {
    render() {
        return (
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">
                    <h1 class="logo me-auto"><a href="/"><i class="fas fa-city"></i> MentorCity</a></h1>
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <Link to="/Login"><i class="fa fa-sign-in-alt"></i> Giriş Yap</Link>
                            <Link to="/RegisterOption"><i class="fa fa-user-plus"></i> Kayıt Ol</Link>
                            <Link to="/Solutions"> Çözümler</Link>
                            <Link to="/Pricing"> Fiyatlandırma</Link>
                            <Link to="/Screenshots">Ekran Görüntüleri</Link>
                            <li><a href="events.html">Müşterilerimiz</a></li>


                            {/* <li class="dropdown"><a href="#"><span>Drop Down <i class="fas fa-caret-down"></i></span> </a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="fas fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li> */}

                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    
                    <Link class="get-started-btn" to="/Pricing"> Ücretsiz Dene</Link>

                </div>
            </header>
        )
    }
}
export default Navi