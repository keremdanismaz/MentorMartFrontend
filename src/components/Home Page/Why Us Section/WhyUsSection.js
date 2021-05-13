import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';

class WhyUsSection extends Component {
    render() {
        return (
            // <!-- ======= Why Us Section ======= -->
            <section id="why-us" class="why-us">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-4 d-flex ">
                            <div class="content">
                                <h3>Neden MentorCity?</h3>
                                <p>
                                    <i class="fas fa-arrow-right"></i> MentorCity sistemi, girişim merkezlerindeki
                            (hızlandırıcı, kuluçka, teknopark ) mentorluk
                            faaliyetlerinin mentorlar, girişimler ve yönetim için daha verimli, ölçülebilir ve kolay
                            yönetilebilir olmasını sağlar.
                        </p>
                                <p>
                                    <i class="fas fa-arrow-right"></i> Sistem, kurum hakkında bilgi veren ve program kurallarını
                            anlatan bir kullanıcı davetiye sayfası gösterir.
                        </p>

                            </div>
                        </div>
                        <div class="col-lg-8 d-flex">
                            <div class="icon-boxes d-flex flex-column justify-content-center">
                                <div class="row">
                                    <div class="col-xl-4 d-flex align-items-stretch">
                                        <div class="icon-box mt-4 mt-xl-0">
                                            <i class="fas fa-receipt"></i>
                                            <h4>Hem yüz yüze hem de online görüşmeler için uygundur.</h4>
                                            <p>Mentorların belirlediği online görüşme takvimi ve notları menteeler görür.
                                        Toplantılar zamanı gelince gerçekleştirilir.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 d-flex align-items-stretch">
                                        <div class="icon-box mt-4 mt-xl-0">
                                            <i class="fa fa-cube"></i>
                                            <h4>Girişimcilik ve İnovasyon programları için harika çözümler sunar.</h4>
                                            <p>Girişimciler için mentorlar özel şablonlar halinde sorular, bilgilendirici
                                            mesajlar hazırlar. Menteeler bu bilgiler doğrultusunda girişimlerine ışık tutar.
                                    </p>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 d-flex align-items-stretch">
                                        <div class="icon-box mt-4 mt-xl-0">
                                            <i class="fas fa-image"></i>
                                            <h4>Şirketinizde kültürel dönüşüm sağlar, yetenekleri ve gelişim alanlarınızı açığa
                                        çıkarır.</h4>
                                            <p>Kendi hesabınızda kendinizi tanıtabilirsiniz. Böylece gelişim alanlarınızı açığa
                                            çıkar.Sizi mentorların keşfetmesini sağlayın !
                                    </p>
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
export default WhyUsSection
