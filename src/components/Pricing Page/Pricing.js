import React, { Component } from 'react'
import '../../css/Pircing Page/Piricing.css';
import { Link } from "react-router-dom";


export default class Pricing extends Component {
    render() {
        return (
            <div>
                
                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div class="breadcrumbs" data-aos="fade-in">
                    <div class="container">
                        <h1>Mentorluk Yazılım Ücretleri</h1>
                        <i>Programınızı kendi isteğinize göre şekillendirin.</i>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Pricing Section ======= --> */}
                <section id="pricing" class="pricing">
                    <div class="container" data-aos="fade-up">

                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <div class="box">
                                    <h3>Deneme</h3>
                                    <h4><sup>$</sup>0<span> / Aylık</span></h4>
                                    <ul>
                                        <li>10 Kullanıcı Desteği</li>
                                        <li>Admin Paneli Desteği</li>
                                        <li class="na">Yazılım Desteği</li>
                                        <li class="na">Kullanıcı Desteği</li>
                                    </ul>
                                    <div class="btn-wrap">
                                        <Link class="btn-buy" to="/RegisterOption"> Satın Al</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div class="box featured">
                                    <h3>İş Planı</h3>
                                    <h4><sup>$</sup>19<span> / Aylık</span></h4>
                                    <ul>
                                        <li>50 Kullanıcı Desteği</li>
                                        <li>Admin Paneli Desteği</li>
                                        <li class="na">Yazılım Desteği</li>
                                        <li class="na">Kullanıcı Desteği</li>
                                    </ul>
                                    <div class="btn-wrap">
                                        <Link class="btn-buy" to="/RegisterOption"> Satın Al</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div class="box">
                                    <span class="advanced">Limitsiz</span>
                                    <h3>Sınırsız Kullanım </h3>
                                    <h4><sup>$</sup>49<span> / Aylık</span></h4>
                                    <ul>
                                        <li>Sınırsız Kullanıcı Desteği</li>
                                        <li>Admin Paneli Desteği</li>
                                        <li>Yazılım Desteği</li>
                                        <li>Kullanıcı Desteği</li>
                                    </ul>
                                    <div class="btn-wrap">
                                        <Link class="btn-buy" to="/RegisterOption"> Satın Al</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Pricing Section --> */}
            </div>
        )
    }
}
