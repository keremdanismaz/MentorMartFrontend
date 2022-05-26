import React, { Component } from "react";
import axios from "axios";
import alertify from "alertifyjs";
import Cookies from "universal-cookie";

export default class PersonelInformation extends Component {
  state = {
    mentorId: -1,
    mentorName: "",
    About: "",
    Address: "",
    corporations: [],
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
        this.setState({
          mentorId: response.data.id,
          About: response.data.about,
          Address: response.data.address,
          mentorName: response.data.firstName + " " + response.data.lastName,
        });
        axios.get("https://localhost:44385/Corporation").then((response) => {
          const corporations = response.data;
          this.setState({ corporations });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    document.getElementById("closeUpdate").click();
    axios
      .put(
        "https://localhost:44385/UpdateMentorInfo/" + this.state.mentorId,
        this.state
      )
      .then((response) => {
        alertify.warning("Bilgileriniz başarıyla güncellendi. ");
        this.componentDidMount();
      })
      .catch((error) => {
        alertify.error("Bilgileriniz başarıyla güncellenemedi. ");
        console.log(error);
      });
  };

  render() {
    return (
      <div className="mt-5">
        {/* Mentorun Kendi bilgileri buraya gelecek - Get İşlemleri */}
        <div class="container-fluid content">
          <div class="container">
            <i class="fa fa-user-cog bilgiicon m-3 ">
              <span> Mentor</span> {this.state.mentorName}
            </i>
            <div class="card mb-3">
              <div class="card-body">
                <h5>Bilgileriniz</h5>
                <div class="d-flex justify-content-end">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm m-0 "
                    data-toggle="modal"
                    data-target="#KisiselBilgiModal"
                  >
                    <i class="fa fa-edit"></i> Güncelle
                  </button>
                </div>
                <h6 class="mt-3">Kurumunuzun Adı</h6>
                <p>
                  {" "}
                  {this.state.corporations.map((corporation) =>
                    corporation.id === this.state.mentorId
                      ? corporation.name
                      : null
                  )}
                </p>
                <hr />
                <h6 class="mt-3">Hakkımda</h6>
                <p>{this.state.About}</p>
                <hr />
                <h6 class="mt-3">Adres</h6>
                <p>{this.state.Address}</p>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Edit Bilgilerim Modal Begin --> */}
        <div
          class="modal fade"
          id="KisiselBilgiModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="KisiselBilgiModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="KisiselBilgiModalLabel">
                  <i class="fa fa-edit"></i>
                  Bilgilerinizi Güncelleyin
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
                    <label for="Hakkımda" class="col-form-label">
                      Hakkımda *
                    </label>
                    <textarea
                      class="form-control"
                      id="Hakkımda"
                      type="text"
                      placeholder="Kendinizden Bahsedin"
                      value={this.state.About}
                      name="About"
                      onChange={this.changeHandler}
                      required
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="Adres" class="col-form-label">
                      Adres *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Adres"
                      placeholder="Adresinizi Girin"
                      value={this.state.Address}
                      name="Address"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn closeModal"
                      data-dismiss="modal"
                      id="closeUpdate"
                    >
                      <i class="fa fa-times"></i> Kapat
                    </button>
                    <button type="submit" class="btn submitModal">
                      <i class="fa fa-edit"></i>
                      Bilgilerimi Güncelle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Edit Bilgilerim Modal End --> */}
      </div>
    );
  }
}
