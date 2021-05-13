import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';
import MentoringImage from "../../../images/AnaSayfaMentoring.PNG"

class AboutSection extends Component {
    render() {
        return (
            // <!-- ======= About Section ======= -->
            <section id="About">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2">
                            <img src={MentoringImage} class="img-fluid"
                                alt="MentorCity" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                            <h3>Mentorluk ve Gelişim Programlarınızı Kolayca Yürütün</h3>
                            <p>
                                MentorCity, mentorluk, koçluk ve danışmanlık programları için geliştirilmiş bir yönetim ve
                                iletişim sistemdir.
                            </p>
                            <ul>
                                <li><i class="fa fa-check"></i> Girişimcilik ve İnovasyon programları için harika çözümler sunar
                                </li>
                                <li><i class="fa fa-check"></i> Şirketinizde kültürel dönüşüm sağlar, yetenekleri ve gelişim
                                    alanlarınızı açığa çıkarır.</li>
                                <li><i class="fa fa-check"></i> Hem yüz yüze hem de online görüşmeler için uygundur.</li>
                            </ul>
                            <p>
                                <i class="fa fa-info-circle"></i> MentorCity tüm kurum ve organizasyonlarda hemen devreye
                                alınabilir. MentorCity bir danışmanlık
                                şirketi değildir. Mentorluk, koçluk veya eğitim hizmeti sunmaz. Kurum olarak eğitim ve gelişim
                                programlarınız için danışmanlık hizmeti alıyorsanız MentorCity platformunuzu kendi
                                danışmanlarınız ile birlikte yönetebilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default AboutSection
