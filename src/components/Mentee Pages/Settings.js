import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export default class Settings extends Component {
  state = {
    userId: null,
    previousPassword: "",
    newPassword: "",
    verifyPassword: "",
  };
  //question güncellemede kaldık.

  componentDidMount() {
    const cookies = new Cookies();
    let jwt = cookies.get("jwt");
    axios
      .get("https://localhost:44385/Login/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: jwt,
        },
      })
      .then((response) => {
        this.setState({ userId: response.data.id });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();

    const updatePass = {
      previousPassword: this.state.previousPassword,
      newPassword: this.state.newPassword,
      verifyPassword: this.state.verifyPassword,
    };
    axios
      .put(
        "https://localhost:44385/UpdatePassword/" + this.state.userId,
        updatePass
      )
      .then((response) => {
        if (response.data.message) {
          alertify.error(response.data.message);
        } else{
          alertify.success("Şifreniz başarı ile değişti.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      // Acount Settings Begin
      <div class="container-fluid content">
        <div class="container">
          <div class="card m-4">
            <div class="card-body">
              <h5>
                <i class="fa fa-lock"></i> Şifre Değiştir
              </h5>
              <form class="mt-4" onSubmit={this.submitHandler}>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Eski Şifreyi Gir"
                    required
                    name="previousPassword"
                    onChange={this.changeHandler}
                  />
                </div>

                <div class="form-row">
                  <div class="col form-group">
                    <input
                      type="password"
                      placeholder="Yeni Şifreyi Gir"
                      class="form-control"
                      required
                      name="newPassword"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div class="col form-group">
                    <input
                      type="password"
                      placeholder="Yeni Şifreyi Tekrar Gir"
                      class="form-control"
                      required
                      name="verifyPassword"
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>

                <div class="form-group text-right mr-4">
                  <button type="submit" class="btn btn-secondary">
                    <i class="fa fa-edit"></i>
                    Güncelle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      // Acount Settings End
    );
  }
}
