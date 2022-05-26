import React, { Component } from "react";
import "../../css/Login/Login.css";
import { Link, Redirect } from "react-router-dom";
import alertify from "alertifyjs";
import Logo from "../../images/Logo.PNG";
import axios from "axios";
import Cookies from "universal-cookie";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      error: "",
      loginStatus: false,
      roleId: 0,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const cookies = new Cookies();
    cookies.remove("jwt");
  }

  mess;
  submitHandler = (e) => {
    this.setState({ error: "" });
    e.preventDefault();
    axios
      .post("https://localhost:44385/Login", this.state, {
        Credentials: "include",
      })
      .then((response) => {
        if (response.data.error) {
          alertify.error(response.data.error);
        } else if (response.data.message) {
          const cookies = new Cookies();
          cookies.set("jwt", response.data.message, { path: "/" });
          this.mess = response.data.message;

          let jwt = cookies.get("jwt");
          axios
            .get("https://localhost:44385/Login/user", {
              headers: {
                "Content-Type": "application/json",
                Authorization: jwt,
              },
            })
            .then((user) => {
              alertify.success("Başarıyla giriş yapıldı.");
              this.setState({ roleId: user.data.roleId });
              this.setState({ loginStatus: true });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { mail, password } = this.state;

    if (this.state.loginStatus) {
      if (this.state.roleId === 1) {
        return <Redirect to="/Mentor/CorporationInfo" />;
      } else if (this.state.roleId === 2) {
        return <Redirect to="/Mentee/CorporationInfo" />;
      } else {
        return <Redirect to="/" />;
      }
    }

    return (
      <div class="container h-100 mt-5">
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <a href="AnaSayfa.html">
                  <Link to="/">
                    <img src={Logo} class="brand_logo" alt="Logo" />
                  </Link>
                </a>
              </div>
            </div>
            <div class="d-flex justify-content-center form_container">
              <form onSubmit={this.submitHandler}>
                <h4 class="text-center m-5">
                  <span class="MentorCity">MentorMart</span> Üyesi Hoş Geldin
                </h4>

                <div class="form-group input-group mb-3 mt-5">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>

                  <input
                    type="email"
                    name="mail"
                    value={mail}
                    onChange={this.changeHandler}
                    className="form-control input_user"
                    placeholder="Email*"
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-key"></i>
                    </span>
                  </div>

                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                    className="form-control input_pass"
                    placeholder="Şifre*"
                    required
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" className="btn login_btn">
                    <i className="fa fa-sign-in-alt"></i> Giriş Yap
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center ">
                Kayıtlı değil misin?{" "}
                <Link to="/RegisterOption" className="ml-2 links">
                  {" "}
                  <i className="fa fa-user-plus"></i>
                  Kayıt ol
                </Link>
              </div>
              {/* <div class="justify-content-center d-flex alert alert-danger mt-3" role="alert">
                                Hata Giriş Yapılamadı!
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
