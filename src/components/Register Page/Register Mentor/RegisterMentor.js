import React, { Component } from 'react'
import '../../../css/Register/Register.css';
import { Link } from "react-router-dom";

class RegisterMentor extends Component {
    render() {
        return (
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <header class="card-header">
                                <h4 class="card-title mt-2 text-center"><Link to="/"><img class="img-fluid img-res"
                                    src="https://mashatu.com/wp-content/uploads/2014/07/MashatuIcons-76.png"
                                    alt="logo" /></Link>Mentor Olarak Kayıt Olun</h4>
                            </header>
                            <article class="card-body">

                                <form>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <input type="text" name="" value="" class="form-control" placeholder="Ad*" required />
                                        </div>
                                        <div class="col form-group">
                                            <input type="text" name="" value="" class="form-control" placeholder="Soyad*"
                                                required />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <input type="email" name="" value="" class="form-control" placeholder="Email*" required />
                                    </div>

                                    <div class="form-group">
                                        <input type="text" name="" value="" class="form-control" placeholder="Kurumunuzun Adı*"
                                            required />
                                    </div>

                                    <div class="form-group">
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="" value=""
                                                placeholder="Şifre Oluştur En az 6 karakter*" required />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="form-group">
                                            <input class="form-control" type="password" name="" value=""
                                                placeholder="Şifreyi Tekrar Gir*" required />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-block"><i class="fa fa-registered"></i> Mentor
                                        Olarak Kayıt Ol </button>
                                    </div>

                                    <div class="text-center alert alert-danger" role="alert">
                                        Hatalı Kayıt!
                                </div>

                                </form>
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
