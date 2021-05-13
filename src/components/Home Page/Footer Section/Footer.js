import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            // <!-- Footer Begin -->
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>MentorCity</h3>
                                <p>
                                    Ankara, Turkiye <br />
                                    <strong>Phone:</strong><a href="tel://05534423783">+90 553 442 3783</a><br />
                                    <strong>Email:</strong><a href="mailto:danismaz2000@gmail.com">danismaz2000@gmail.com</a><br />
                                </p>
                            </div>

                            <div class="col-lg-2 col-md-6">
                                <h4>Hızlı Linkler</h4>
                                <ul>
                                    <li><i class="fa fa-arrow-right"></i><Link to="/">Ana Sayfa</Link></li>
                                    <li><i class="fa fa-arrow-right"></i><Link to="/RegisterOption">Kayıt Ol</Link></li>
                                    <li><i class="fa fa-arrow-right"></i><Link to="/Login">GirişYap</Link></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <h4>Hizmetlerimiz</h4>
                                <ul>
                                    <li><i class="fa fa-chevron-right"></i> Kurum için mentorluk</li>
                                    <li><i class="fa fa-chevron-right"></i> Toplantı ayarları</li>
                                    <li><i class="fa fa-chevron-right"></i> Mentee listeleri</li>
                                    <li><i class="fa fa-chevron-right"></i> Kullanışlı formlar</li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <h4>Neler Yapabilirsiniz ?</h4>
                                <p>Kurumsal mentorluk programları</p>
                                <p>Mentorluk, danışmanlık, eğitmenlik, koçluk arasındaki farklar.</p>
                                <p>Mentor, danışman, koç olmak istiyorum.</p>
                                <p>Mentor, danışman, koç arıyorum.</p>
                                <p>Mentorluk koçluk ile ilgili bir girişim yapmak istiyorum.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container d-md-flex py-4">

                    <div class="me-md-auto text-center text-md-start">
                        <div class="copyright">
                            &copy; Copyright <strong><span>MentorCity</span></strong>. All Rights Reserved
                </div>
                        <div class="credits text-center">
                            Designed by <a href="http://keydi.herokuapp.com/">Keydi</a>
                        </div>
                    </div>
                    <div class="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="https://twitter.com/keremdanismaz" class="twitter"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/kerem.heybe/" class="facebook"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/keremdnsmaz/?hl=tr" class="instagram"><i
                            class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/kerem-dani%C5%9Fmaz-289b2319a/" class="linkedin"><i
                            class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        )
    }
}
