/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import '../../../css/Register/Register.css';
import { Link } from "react-router-dom";

class RegisterMentor extends Component {
    render() {
        return (

            <div class="container mt-3">
                <div class="row justify-content-center">
                    <div class="col-md-10" >
                        <div class="card">

                            <header class="card-header">
                                <h4 class="card-title mt-2 text-center"><Link to="/"><img class="img-fluid img-res"
                                    src="https://mashatu.com/wp-content/uploads/2014/07/MashatuIcons-76.png"
                                    alt="logo" /></Link>Mentor Olarak Kayıt Olun</h4>
                            </header>

                            <article class="card-body">
                                <article class="card-body" >
                                    <div class="row">
                                        <div class="col-md-7">
                                            <h6 class="m-2"><i class="fa fa-list"></i> Mentor Olarak Kayıt Olmak İçin Aşağıdaki Adımları Uygulayın. </h6>
                                            <h6 class="m-2"><a style={{ color: "#B00021" }} href="mailto:danismaz2000@gmail.com"><i class="fa fa-envelope"></i> Mail adresimize</a> bilgilerinizi gönderin. </h6>
                                            <ol>
                                                <li class="mt-3 font-weight-bold"> Bir Kurum Açmanız Gerekmektedir.</li>
                                                <ol>
                                                    <li class="mt-2 font-weight-bold">1. Kurum Bilgilerinizden Bahsedin.</li>
                                                    <ul>
                                                        <li>Kurumunuzun Adı</li>
                                                        <li>Kurumunuzu neden açmak istiyorsunuz?</li>
                                                        <li>Kurumda ne tür eğitimler verilecek? </li>
                                                        <li>Kurum hizmetleriniz nelerdir?</li>
                                                        <li>Kurum hedefleriniz nelerdir?</li>
                                                    </ul>
                                                    <li class="mt-2 font-weight-bold">2. Kişisel Bilgilerinizden Bahsedin.</li>
                                                    <ul>
                                                        <li>Adınız</li>
                                                        <li>Soyadınız</li>
                                                        <li>Kendinizden Bahsedin(Eğitim, proje vs.) </li>
                                                        <li>Adresiniz</li>
                                                        <li>Mail Adresiniz</li>
                                                    </ul>
                                                </ol>
                                                <li class="mt-3 font-weight-bold"> Bütün bilgileriniz en kısa sürede değerlendirilecektir.</li>
                                                <li class="mt-3 font-weight-bold"> Size olumlu ya da olumsuz bir dönüş yapılacaktır.</li>
                                                <li class="mt-3 font-weight-bold"> Size verilecek olan şifre ile sisteme giriş yapıp menteelerinize hizmet vermeye başlayabilirsiniz. </li>
                                            </ol>
                                        </div>
                                        <div class="col-md-5">
                                            <img src="https://eminimind.com/wp-content/uploads/2011/11/helping.png" alt="Responsive-image" class="img-fluid" />
                                            <p class="mt-2 font-weight-bold" style={{ color: "#B00021" }}>MentorMart- Mentorluk Programı</p>
                                        </div>
                                    </div>
                                </article>
                            </article>

                            <div class="border-top card-body text-center">Zaten Hesabınız Var mı?
                            <Link to="/Login" class="AgainLogin"> <i class="fa fa-sign-in-alt"></i> Giriş Yap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisterMentor
