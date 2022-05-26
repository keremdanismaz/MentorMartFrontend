/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export default class CorporationInfo extends Component {
  state = {
    userName: "",
    mentorName: "",
    corporationInfo: [],
    corporations: [],
    corporationInfoText: "",
    corporationServiceOne: "",
    corporationServiceTwo: "",
    corporationServiceThree: "",
    corporationServiceFour: "",
    corporationServiceFive: "",
    corporationServiceSix: "",
  };

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
        if (response.data.roleId && response.data.roleId === 1) {
          const userName =
            response.data.firstName + " " + response.data.lastName;
          this.setState({ userName });
          axios
            .get(
              "https://localhost:44385/corporationInfo/" +
                response.data.coprorationId
            )
            .then((response) => {
              const corporationInfo = response.data[0];
              this.setState({ corporationInfo });
              this.initialState();
              axios
                .get("https://localhost:44385/Corporation")
                .then((response) => {
                  const corporations = response.data;
                  this.setState({ corporations });
                });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  initialState = () => {
    this.setState({   corporationInfoText: this.state.corporationInfo.corporationInfoText,
    corporationServiceOne: this.state.corporationInfo.corporationServiceOne,
    corporationServiceTwo: this.state.corporationInfo.corporationServiceTwo,
    corporationServiceThree: this.state.corporationInfo.corporationServiceThree,
    corporationServiceFour: this.state.corporationInfo.corporationServiceFour,
    corporationServiceFive: this.state.corporationInfo.corporationServiceFive,
    corporationServiceSix: this.state.corporationInfo.corporationServiceSix, });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(
        "https://localhost:44385/Corporation/" + this.state.corporationInfo.id,
        this.state
      )
      .then((response) => {
        alertify.warning("Kurum Bilgileriniz Başarıyla Güncellenmiştir. ");
        document.getElementById("closeModal").click();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {/* Kurum bilgileri, hizmetler gibi değerlerin get işlemleri */}
        <div class="container-fluid content">
          <img
            class="img"
            src="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg"
            alt="image"
          />
          <div class="card m-4">
            <div class="card-header text-center">
              {this.state.corporations.map((corporation) =>
                corporation.id === this.state.corporationInfo.id
                  ? corporation.name
                  : null
              )}{" "}
              - Kurum Bilgileri
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm m-0 "
                  data-toggle="modal"
                  data-target="#KurumBilgileriModal"
                >
                  <i class="fa fa-edit"></i> Güncelle
                </button>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Kurumuna Hoş geldin Sayın{" "}
                <span class="krmBilgiSpan">
                  {this.state.userName} <i class="fa fa-city"></i>
                </span>
              </h5>
              <p class="card-text">
                <span class="krmBilgiSpan">
                  Kurum Bilgileri <i class="fa fa-info-circle"></i>
                </span>
                <br />
                {this.state.corporationInfoText}
              </p>
              <p class="card-text">
                <span class="krmBilgiSpan">
                  Hizmetlerimiz <i class="fa fa-concierge-bell"></i>
                </span>
                <br />
                <ul>
                  <li>{this.state.corporationServiceOne}</li>
                  <li>{this.state.corporationServiceTwo}</li>
                  <li>{this.state.corporationServiceThree}</li>
                  <li>{this.state.corporationServiceFour}</li>
                  <li>{this.state.corporationServiceFive}</li>
                  <li>{this.state.corporationServiceSix}</li>
                </ul>
              </p>
              <p class="card-text">
                <span class="krmBilgiSpan">
                  Mentor Olarak Ne Yapabilirsin? <i class="fa fa-list"></i>
                </span>
                <br />
                <ul>
                  <li>Kurum Bilgilerini Güncelleyebilirsin.</li>
                  <li>Menteelerine özel notlar paylaşabilirsin.</li>
                  <li>
                    Menteelerine sorular sorup cevaplarını takip edebilirsin.
                  </li>
                  <li>Menteelerine özel olarak toplantı oluşturabilirsin.</li>
                  <li>Menteelerini listeleyip takiplerini yapabilirsin</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* // <!-- Edit Kurum Ayarları Modal Begin --> */}
        {/* Kurum Ayarlarını Güncellemede Kullanılacak- Put */}
        <div
          class="modal fade"
          id="KurumBilgileriModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="KurumBilgileriModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="KurumBilgileriModalLabel">
                  <i class="fa fa-edit"></i> Kurum Bilgilerini Güncelle
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.submitHandler}>
                  <div class="form-group">
                    <label for="KurumBilgi" class="col-form-label">
                      Kurum Bilgileri *
                    </label>
                    <textarea
                      class="form-control"
                      id="KurumBilgi"
                      type="text"
                      placeholder="Kurumun Açıklaması"
                      value={this.state.corporationInfoText}
                      name="corporationInfoText"
                      onChange={this.changeHandler}
                      required
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="Hizmet1" class="col-form-label">
                      Hizmet Ekle-1 *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Hizmet1"
                      onChange={this.changeHandler}
                      placeholder="Servis - 1"
                      value={this.state.corporationServiceOne}
                      name="corporationServiceOne"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="Hizmet2" class="col-form-label">
                      Hizmet Ekle-2 *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Hizmet2"
                      placeholder="Servis - 2"
                      onChange={this.changeHandler}
                      value={this.state.corporationServiceTwo}
                      name="corporationServiceTwo"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="Hizmet3" class="col-form-label">
                      Hizmet Ekle-3 *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Hizmet3"
                      placeholder="Servis - 3"
                      onChange={this.changeHandler}
                      value={this.state.corporationServiceThree}
                      name="corporationServiceThree"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="Hizmet4" class="col-form-label">
                      Hizmet Ekle-4
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Hizmet4"
                      placeholder="Servis - 4"
                      onChange={this.changeHandler}
                      value={this.state.corporationServiceFour}
                      name="corporationServiceFour"
                    />
                  </div>
                  <div class="form-group">
                    <label for="Hizmet5" class="col-form-label">
                      Hizmet Ekle-5
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Hizmet5"
                      placeholder="Servis - 5"
                      onChange={this.changeHandler}
                      value={this.state.corporationServiceFive}
                      name="corporationServiceFive"
                    />
                  </div>
                  <div class="form-group">
                    <label for="Hizmet6" class="col-form-label">
                      Hizmet Ekle-6
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Hizmet6"
                      placeholder="Servis - 6"
                      onChange={this.changeHandler}
                      value={this.state.corporationServiceSix}
                      name="corporationServiceSix"
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn closeModal"
                      data-dismiss="modal"
                      id="closeModal"
                    >
                      <i class="fa fa-times"></i> Kapat
                    </button>
                    <button type="submit" class="btn submitModal">
                      <i class="fa fa-edit"></i>
                      Güncelle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
