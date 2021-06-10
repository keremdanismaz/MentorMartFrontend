import React, { Component } from 'react'
import '../../css/Login/Login.css';
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.PNG"

class Login extends Component {
    render() {
        return (

            <div class="container h-100 mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="user_card">
                        <div class="d-flex justify-content-center">
                            <div class="brand_logo_container">
                                <a href="AnaSayfa.html">
                                    <img src={Logo}
                                        class="brand_logo" alt="Logo" /></a>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center form_container">
                            <form>
                                <h4 class="text-center m-5"><span class="MentorCity">MentorCity</span> Üyesi Hoş Geldin</h4>
                                <div class="form-group input-group mb-3 mt-5">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="email" name="" class="form-control input_user"  placeholder="Email*"
                                        required />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input type="password" name="" class="form-control input_pass" placeholder="Şifre*"
                                        required />
                                </div>
                                <div class="d-flex justify-content-center mt-3 login_container">
                                    <Link to="/Mentee/CorporationInfo" type="submit" name="button"
                                        class="btn login_btn"><i class="fa fa-sign-in-alt"></i> Giriş Yap</Link>
                                </div>
                            </form>
                        </div>

                        <div class="mt-4">
                            <div class="d-flex justify-content-center ">
                                Kayıtlı değil misin? <Link to="/RegisterOption" class="ml-2 links">  <i
                                    class="fa fa-user-plus"></i>
                                Kayıt ol</Link>

                            </div>
                            <div class="justify-content-center d-flex alert alert-danger mt-3" role="alert">
                                Hata Giriş Yapılamadı!
                        </div>
                        </div>
                    </div>
                </div>
            </div>
       
       )
    }
}
export default Login
