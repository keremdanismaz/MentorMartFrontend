import React, { Component } from 'react'
import Logo from "../../../images/Logo.PNG"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
// import RegisterMentee from "../Register Mentee/RegisterMentee"
import { GoogleLogin } from 'react-google-login'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileObject: {},
            redirect: false,
        };
    }

    render() {
        const clientId = "31232930414-s4elaa84d5rnu7rp479b4p6ds5b4vn12.apps.googleusercontent.com";

        function onSuccess(res) {
            console.log(res.profileObj);
            this.setState({ redirect: true });
            console.log(this.state.redirect)
        };

        function onFailure(res) {
            console.log('[Login Failed] res:', res)
        };

        if (this.state.redirect) {
            return(<Redirect to={'/'} />);
        };

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
                            <div class="d-flex justify-content-center mt-3 login_container">
                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Google İle Kaydol."
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    style={{ marginTop: '100px' }}
                                    isSignedIn={true}
                                />
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="d-flex justify-content-center ">
                                Kayıtlı değil misin? <Link to="/RegisterOption" class="ml-2 links">  <i
                                    class="fa fa-user-plus"></i>
                                    Kayıt ol</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
