import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';
import '../../../css/Register/RegisterOption.css';
import RegisterOption1 from "../../../images/RegisterOption1.PNG"
import RegisterOption2 from "../../../images/RegisterOption2.PNG"
import { Link } from "react-router-dom";

class RegisterOption extends Component {
    render() {
        return (
            // <!-- Register Option Begin -->
            <section id="events" class="events">
                <div class="container mt-5" data-aos="fade-up">
                    <h3 class="text-center mb-4 h3text">  <Link to="/"><img class="img-fluid img-res"
                        src="https://mashatu.com/wp-content/uploads/2014/07/MashatuIcons-76.png" alt="logo" /></Link>
                     Mentor
                ya da Mentee Olarak Kayıt Olun</h3>
                    <div class="row">
                        <div class="col-md-6 d-flex align-items-stretch">
                            <div class="card">
                                <div class="card-img">
                                    <img src={RegisterOption1}
                                        alt="Menteeİmage" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title"><Link to="/RegisterMentee">Mentee Olarak Kayıt Olun</Link></h4>
                                    <p class="card-text text-center">Mentorların sizin için sunduğu tolantılar, formlar,
                                    bilgilendirmeler ve daha bir çok ayrıcalıklı hizmetten yararlanın. Hemen kurumunuzu
                                seçin ve başlayın. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex align-items-stretch">
                            <div class="card">
                                <div class="card-img">
                                    <img src={RegisterOption2}
                                        alt="Mentorİmages" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title"><Link to="/RegisterMentor">Mentor Olarak Kayıt Olun</Link></h4>
                                    <p class="card-text text-center">Menteelerinize özel toplantı, form, bilgilendirici mesajlar
                                    ve daha fazlasını oluşturun. Binlerce kişiye ulaşın ve koçluk yapın. Kurum adını belirle
                                ve hemen başla.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default RegisterOption