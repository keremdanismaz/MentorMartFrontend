import React, { Component } from 'react'
import Corporations from "../../images/ScreenShots/Corporations.PNG"
import Meeting from "../../images/ScreenShots/Meeting.PNG"
import Mentees from "../../images/ScreenShots/Mentees.PNG"
import Notes from "../../images/ScreenShots/Notes.PNG"
import Question from "../../images/ScreenShots/Questions.PNG"
import '../../css/ScreenShot Page/ScreenShot.css';
import { Link } from "react-router-dom";

export default class ScreenShot extends Component {
    render() {
        return (
            <div>
                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div class="breadcrumbs" data-aos="fade-in">
                    <div class="container">
                        <h1>Mentorluk Sistemi Hakkında Daha Fazla Bilgi Edinin</h1>
                        <i>Ekran görüntülerini inceleyin ve hemen ücretsiz denemenizi başlatın.</i>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                <section id="ScreenShot">
                    <div class="container">

                        <div class="row p-3">
                            <div class="col-lg-8 order-1 order-lg-2">
                                <img src={Corporations} class="img-fluid"
                                    alt="MentorCity" />
                            </div>
                            <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1">
                                <h2 class="text-center mt-5">Kurum Bilgileri Nedir, Ne işime yarar?</h2>
                                <p class="mt-5">
                                    Kurum bilgileri kurumunuz hakkında menteelerinize daha fazla bilgi ve destek sunmanızı sağlar. 
                                </p>
                            </div>
                        </div>

                        <div class="row mt-5 p-3">
                            <div class="col-lg-8 order-2 order-lg-1">
                                <img src={Meeting} class="img-fluid"
                                    alt="MentorCity" />
                            </div>
                            <div class="col-lg-4 pt-4 pt-lg-0 order-1 order-lg-2">
                                <h2 class="text-center mt-5">Menteeleriniz ile toplantı günleri düzenleyin.</h2>
                                <p class="mt-5">
                                  Notlarını ve sorularını tamamlayan menteeleriniz ile toplantı düzenleyin. Toplantılar herhangi bir platformda olabilir.
                                </p>
                            </div>
                        </div>

                        <div class="row mt-5 p-3">
                            <div class="col-lg-8 order-1 order-lg-2">
                                <img src={Mentees} class="img-fluid"
                                    alt="MentorCity" />
                            </div>
                            <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1">
                                <h2 class="text-center mt-5">Sizden mentorlıuk eğitimi alan kullanıcılarınızı görün</h2>
                                <p class="mt-5">
                                Sizden mentorluk eğitimi alan kullanıcılarınıza kolayca ulaşın ve mail gönderin.
                                </p>
                            </div>
                        </div>

                        <div class="row mt-5 p-3">
                            <div class="col-lg-8 order-2 order-lg-1">
                                <img src={Notes} class="img-fluid"
                                    alt="MentorCity" />
                            </div>
                            <div class="col-lg-4 pt-4 pt-lg-0 order-1 order-lg-2">
                                <h2 class="text-center mt-5">Menteelerinizin çalışmalarını takip edin, onları eğitin</h2>
                                <p class="mt-5">
                                    Menteelerinize yönelik yeni notlar oluşturun, çalışma zamanlarını planlayın ve kaynak dosyaları yükleyin.
                                </p>
                            </div>
                        </div>

                        <div class="row mt-5 p-3">
                            <div class="col-lg-8 order-1 order-lg-2">
                                <img src={Question} class="img-fluid"
                                    alt="MentorCity" />
                            </div>
                            <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1">
                                <h2 class="text-center mt-5">Menteelerinizden gelen soruları karşılayın, onlara kolayca soru sorun.</h2>
                                <p class="mt-5">
                                   Menteeleriniz ile bire bir soru cevap yapın, onlar ile iletişime geçin
                                </p>
                            </div>
                        </div>
                            <hr/>
                        <div class="row p-3 ">
                            <div class="col-lg-4 order-2 order-lg-1">
                            <Link class="btn-get-started" to="/Pricing"><i class="fa fa-gift"></i> Ücretsiz Deneyin</Link>
                            </div>
                            <div class="col-lg-8 pt-4 pt-lg-0 order-1 order-lg-2">
                                <h1 class="text-center">
                                    Mentorluk programınız için en etkili yolu keşfedin!</h1>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
