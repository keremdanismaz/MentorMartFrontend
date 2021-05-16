import React, { Component } from 'react'
import '../../../css/Register/Register.css';
import { Link } from "react-router-dom";

class RegisterMentee extends Component {
    render() {
        return (
            <div class="container mt-5" id="registermentee">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <header class="card-header">
                                <h4 class="card-title mt-2 text-center"><Link to="/"><img class="img-fluid img-res"
                                    src="https://mashatu.com/wp-content/uploads/2014/07/MashatuIcons-76.png"
                                    alt="logo" /></Link> Mentee Olarak Kayıt Olun</h4>
                            </header>
                            <article class="card-body">

                                <form>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <input type="text" name="" class="form-control" placeholder="Ad*" required />
                                        </div>
                                        <div class="col form-group">
                                            <input type="text" name="" class="form-control" placeholder="Soyad*"
                                                required />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <input type="email" name="" class="form-control" placeholder="Email*" required />
                                    </div>

                                    <div class="form-group">
                                        <select name="" class="form-control" required>
                                            <option selected disabled hidden>Menteelik almak istediğiniz kurumu seçiniz.*
                                        </option>
                                            <option>İTÜ Çekirdek</option>
                                            <option>Toyota</option>
                                            <option>Keydi Mentorluk</option>
                                            <option>India</option>
                                            <option>Devtest Mentor</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <input type="password" name="" class="form-control"
                                            placeholder="Şifre Oluştur En az 6 karakter*" required />
                                    </div>

                                    <div class="form-group">
                                        <input type="password" name="" class="form-control"
                                            placeholder="Şifreyi Tekrar Gir*" required />
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-block"><i class="fa fa-registered"></i> Mentee
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
export default RegisterMentee