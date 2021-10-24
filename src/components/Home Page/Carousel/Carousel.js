import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';
import { Link } from "react-router-dom";
export default class Carousel extends Component {
    render() {
        return (
            <section id="hero" class="d-flex justify-content-center align-items-center">
                <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Bugünün Öğrenenleri,<br />Yarının Liderleri</h1>
                    <h2>Mentorluk, koçluk veya danişmanlik ağinizi zahmetsi̇zce oluşturun</h2>
                    <Link class="btn-get-started" to="/Login"><i class="fa fa-gift"></i> Ücretsiz Deneyin</Link>
                </div>
            </section>
        )
    }
}
