import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';
import Acordion1 from "../../../images/Acordion1.PNG"
import Acordion2 from "../../../images/Acordion2.PNG"
import Acordion3 from "../../../images/Acordion3.PNG"
import Acordion4 from "../../../images/Acordion4.PNG"
import AnaSayfaYardimlasma from "../../../images/AnaSayfaYardimlasma.PNG"

class WhatMentorCity extends Component {
    Acordion = () => {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    };
    render() {
        return (
            // <!-- Mentorlar ve mentee için MentorCity Nedir? Begin -->
            <section id="Mentorsİnfo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 ">
                            <img src={AnaSayfaYardimlasma} class="img-fluid"
                                alt="Mentor Mentee bilgilendirme" />
                        </div>
                        <div class="col-lg-8 ">
                            <button onClick={() => this.Acordion()} class="accordion">Mentor ya da mentee olarak kayıt olun <i class="fa fa-plus"></i></button>
                            <div class="panel">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <img src={Acordion1}
                                                class="img-fluid" alt="mentor makarası" />
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Mentorlar İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Kurumunuzu ya da programınızı belirleyin. Hangi konuda mentorluk
                                                    yapacaksanız belirtin.
                                                </p>
                                            </div>
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Menteeler İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Kurumunu seç hemen hizmet alamaya başla.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => this.Acordion()} class="accordion">Toplantı günü saati ve yerini belirleyin <i
                                class="fa fa-plus"></i></button>
                            <div class="panel">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <img src={Acordion2}
                                                class="img-fluid" alt="Takvim" />
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Mentorlar İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Menteeleriniz için en uygun günü,zamanı ve yeri belirleyin.Toplantı
                                                    oluşturun.Kolay bir şekilde toplantı oluşturun.
                                                </p>
                                            </div>
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Menteeler İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Mentorların oluşturduğu toplantıları görün hemen katılın konunuzda kendinizi
                                                    bir ileri düzeye taşıyın.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => this.Acordion()} class="accordion">Menteelerinize özel notlar hazırlayın <i class="fa fa-plus"></i></button>
                            <div class="panel">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <img src={Acordion3}
                                                class="img-fluid" alt="" />
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Mentorlar İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Formları oluşturun, sorular sorun bilgilendirme verin.Hızlı ve pratik bir
                                                    şekilde hemen oluştur.
                                                </p>
                                            </div>
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Menteeler İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Soruları cevaplayın,formları görün mentorların sizin için hazırladığı her
                                                    şey elinizde.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => this.Acordion()} class="accordion">Kurum ayarlarını güncelleyin <i class="fa fa-plus"></i></button>
                            <div class="panel">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <img src={Acordion4}
                                                class="img-fluid" alt="" />
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Mentorlar İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Kurum ayarlarını güncelleyin kurumunuz hakkında meteelerinizin bilgisi
                                                    olsun.
                                                </p>
                                            </div>
                                            <div class="headerinfo">
                                                <i class="fas fa-arrow-right"></i>
                                                <h6> Menteeler İçin</h6>
                                            </div>
                                            <div class="contentinfo">
                                                <p class=".paragraf">
                                                    <i class="fas fa-list"></i>
                                                    Kurum ayarlarını görün, mentorlarınızı tanıyın.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default WhatMentorCity