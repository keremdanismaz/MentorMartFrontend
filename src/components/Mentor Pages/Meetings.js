/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import calendar from "../../images/Calendar.PNG";
import axios from "axios";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export default class Meetings extends Component {
  state = {
    meetings: [],
    meetingLocations: [],
    mentees: [],
    filteredMeeting: [],
    meetingId: 2,
    filterMentee: "",

    mentorId: -1,
    menteeId: -1,
    meetingTopic: "",
    meetingLocationId: -1,
    meetingLink: "",
    meetingDate: "",
    meetingStartingTime: "",
    meetingEndingTime: "",
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
        axios
          .get("https://localhost:44385/filter/" + response.data.id)
          .then((response) => {
            this.setState({ mentees: response.data });
          });
        if (response.data.roleId && response.data.roleId === 1) {
          this.setState({ mentorId: response.data.id });
          axios
            .get("https://localhost:44385/meeting/mentorId/" + response.data.id)
            .then((response) => {
              this.setState({ meetings: response.data });
              axios
                .get("https://localhost:44385/meetingLocations")
                .then((response) => {
                  const meetingLocations = response.data;
                  this.setState({ meetingLocations });
                });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterMeeting = (id, fullName) => {
    this.setState({ filterMentee: fullName });
    if (id === -1) {
      this.componentDidMount();
      return;
    }
    axios
      .get("https://localhost:44385/meeting/menteeId/" + id)
      .then((response) => {
        this.setState({ meetings: response.data });
      });
  };

  removeMeeting = (meetingId) => {
    axios
      .delete("https://localhost:44385/meeting/" + meetingId)
      .then((response) => {
        alertify.warning("Toplantı başarıyla iptal edildi. ");
        this.callComponentAgain();
      });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    document.getElementById("closeAdd").click();
    axios
      .post("https://localhost:44385/Meeting", this.state)
      .then((response) => {
        alertify.warning("Toplantı isteği oluşturuldu. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        alertify.error("Toplantı isteği oluşturulamadı. ");
        console.log(error);
      });
  };

  initialValue = (meetingId) => {
    this.setState({ meetingId: meetingId });
    axios
      .get("https://localhost:44385/Meeting/" + meetingId)
      .then((response) => {
        this.setState({
          mentorId: response.data[0].mentorId,
          menteeId: response.data[0].menteeId,
          meetingTopic: response.data[0].meetingTopic,
          meetingLocationId: response.data[0].meetingLocationId,
          meetingLink: response.data[0].meetingLink,
          meetingDate: response.data[0].meetingDate,
          meetingStartingTime: response.data[0].meetingStartingTime,
          meetingEndingTime: response.data[0].meetingEndingTime,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  callComponentAgain = () => {
    this.componentDidMount();
  };

  updateMeeting = (e) => {
    e.preventDefault();
    document.getElementById("closeUpdate").click();
    axios
      .put(
        "https://localhost:44385/Meeting/" + this.state.meetingId,
        this.state
      )
      .then((response) => {
        alertify.warning("Toplantı bilgileri güncellendi. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {/* Meeting- Toplantılar buraya yerleştirilecek -Get */}
        <div class="container-fluid content">
          <h3 class="text-center m-4 headerH3">
            <span class="font-weight-bold">
              <i class="fa fa-user-cog"></i>
              Sayın Mentor
            </span>{" "}
            Menteelerinize Özel{" "}
            <span class="font-weight-bold">
              {" "}
              Toplantılar <i class="fa fa-calendar"></i>{" "}
            </span>{" "}
            Oluşturun
          </h3>

          <div class="d-flex justify-content-end m-3">
            <div class="justify-content-start m-2">
              <h4 className="font-weight-light">
                {this.state.filterMentee
                  ? this.state.filterMentee
                  : "Tüm Toplantılar"}
              </h4>
            </div>
            <div class="dropdown m-2">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="ToplantilarMenteeSec"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mentee Seç
              </button>
              <div class="dropdown-menu" aria-labelledby="ToplantilarMenteeSec">
                <a
                  class="dropdown-item"
                  onClick={() => this.filterMeeting(-1, "Tüm Toplantılar")}
                >
                  <b>Tüm Toplantılar</b>
                </a>
                {this.state.mentees.map((mentee) => (
                  <a
                    class="dropdown-item"
                    onClick={() =>
                      this.filterMeeting(
                        mentee.id,
                        mentee.firstName + " " + mentee.lastName
                      )
                    }
                  >
                    {mentee.firstName + " " + mentee.lastName}
                  </a>
                ))}
              </div>
            </div>
            <div class="m-2">
              <button
                type="button"
                class="btn btn-secondary"
                data-toggle="modal"
                data-target="#ToplantiEkleModal"
              >
                <i class="fa fa-plus"></i> Toplantı Oluştur
              </button>
            </div>
          </div>

          <div class="container">
            {this.state.meetings.length > 0 ? (
              this.state.meetings.map((meeting) => (
                <div class="card m-5 toplantiCard">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-4 text-center ">
                        <h5>Toplantı Bilgileri</h5>
                        <p>
                          <span>Toplantı Zamanı: </span>
                          {meeting.meetingStartingTime
                            .split(":")[0]
                            .split("T")[1] +
                            ":" +
                            meeting.meetingStartingTime.split(":")[1]}{" "}
                          -{" "}
                          {meeting.meetingEndingTime
                            .split(":")[0]
                            .split("T")[1] +
                            ":" +
                            meeting.meetingEndingTime.split(":")[1]}
                        </p>
                        <p>
                          <span>Toplantı Günü: </span>
                          {meeting.meetingDate.split("T")[0]}
                        </p>
                        <p>
                          <span>Toplantı Yeri: </span>
                          {this.state.meetingLocations.map((locations) =>
                            locations.id === meeting.meetingLocationId
                              ? locations.name
                              : null
                          )}
                        </p>
                      </div>
                      <div class="col-md-4 text-center">
                        <img
                          class="img-fluid toplant"
                          alt="toplantıİmg"
                          src={calendar}
                        />
                      </div>
                      <div class="col-md-4 text-center">
                        <h5>Mentee</h5>
                        <p>
                          <span>Toplantı Konusu: </span>
                          {meeting.meetingTopic}
                        </p>
                        <p>
                          <span>Mentee: </span>
                          {this.state.mentees.map((mentee) =>
                            mentee.id === meeting.menteeId
                              ? mentee.firstName + " " + mentee.lastName
                              : null
                          )}
                        </p>
                        <p>
                          <span>Toplantı Linki: </span>
                          <a href={meeting.meetingLink} target="blank">
                            Toplantı Linkimiz
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn btn-secondary m-2 btn-sm"
                        data-toggle="modal"
                        data-target="#ToplantiGuncelleModal"
                        onClick={() => this.initialValue(meeting.id)}
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary m-2 btn-sm"
                        data-toggle="modal"
                        data-target="#ToplantiSilModal"
                        id="deleteMeeting"
                        onClick={() => this.setState({ meetingId: meeting.id })}
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="container">
                <div class="jumbotron">
                  <h1 class="display-6">Toplantınız Yok!</h1>
                  <p class="lead">
                    Toplantı oluştur kısmına giderek hemen menteeleriniz ile
                    toplantılar oluşturabilir onlar ile doyasıya
                    konuşabilirsiniz. Öğrenmenin keyfine varın :)
                  </p>
                  <hr class="my-4" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Toplantı ekle- Post dersi */}
        {/* <!-- Toplantı Ekle Modal Begin --> */}
        <div
          class="modal fade"
          id="ToplantiEkleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ToplantiEkleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="ToplantiEkleModalLabel">
                  <i class="fa fa-plus"></i> Toplantı Oluştur
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
                    <label for="ToplantiKonusu" class="col-form-label">
                      Toplantının Konusu *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="ToplantiKonusu"
                      placeholder="Toplantınızın Konusu Nedir ?"
                      name="meetingTopic"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="ToplantiGunu" class="col-form-label">
                      Toplantının Gününü Belirleyin *
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="ToplantiGunu"
                      name="meetingDate"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="form-row">
                    <div class="col form-group">
                      <label for="ToplantiBaslamaZamani" class="col-form-label">
                        Toplantı Kaçta Başlayacak ? *
                      </label>
                      <input
                        type="datetime-local"
                        class="form-control"
                        id="ToplantiBaslamaZamani"
                        name="meetingStartingTime"
                        onChange={this.changeHandler}
                        required
                      />
                    </div>
                    <div class="col form-group">
                      <label for="ToplantiBitisZamani" class="col-form-label">
                        Toplantı Kaçta Bitecek ? *
                      </label>
                      <input
                        type="datetime-local"
                        class="form-control"
                        id="ToplantiBitisZamani"
                        name="meetingEndingTime"
                        onChange={this.changeHandler}
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="ToplantiMentee" class="col-form-label">
                      Toplantıyı Hangi Mentee ile Yapacağınızı Seçin *
                    </label>
                    <select
                      name="menteeId"
                      onChange={this.changeHandler}
                      id="ToplantiMentee"
                      class="form-control"
                      required
                    >
                      {this.state.mentees.map((mentee) => (
                        <option class="dropdown-item" value={mentee.id}>
                          {mentee.firstName + " " + mentee.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="ToplantiYeri" class="col-form-label">
                      Toplantı Nerede Olcak ? *
                    </label>
                    <select
                      name="meetingLocationId"
                      onChange={this.changeHandler}
                      id="ToplantiYeri"
                      class="form-control"
                      required
                    >
                      {this.state.meetingLocations.map((locations) => (
                        <option value={locations.id}>{locations.name}</option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="ToplantiLinki" class="col-form-label">
                      Toplantının Linkini Girin *
                    </label>
                    <input
                      type="url"
                      class="form-control"
                      id="ToplantiLinki"
                      placeholder="Toplantınızın Linki Nedir ?"
                      name="meetingLink"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn closeModal"
                      data-dismiss="modal"
                      id="closeAdd"
                    >
                      <i class="fa fa-times"></i> Kapat
                    </button>
                    <button type="submit" class="btn submitModal">
                      <i class="fa fa-plus"></i>
                      Toplantı Oluştur
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Toplantı Ekle Modal End --> */}

        {/* Toplantı güncelle- put */}
        {/* <!-- Toplantı Güncelle Modal Begin --> */}
        <div
          class="modal fade"
          id="ToplantiGuncelleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ToplantiGuncelleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="ToplantiGuncelleModalLabel">
                  <i class="fa fa-edit"></i> Toplantıyı Güncelle
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
                <form onSubmit={this.updateMeeting}>
                  <div class="form-group">
                    <label for="ToplantiKonusu" class="col-form-label">
                      Toplantının Konusu *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="ToplantiKonusu"
                      placeholder="Toplantınızın Konusu Nedir ?"
                      value={this.state.meetingTopic}
                      name="meetingTopic"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="ToplantiGunu" class="col-form-label">
                      Toplantının Gününü Belirleyin *
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="ToplantiGunu"
                      value={this.state.meetingDate}
                      name="meetingDate"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="form-row">
                    <div class="col form-group">
                      <label for="ToplantiBaslamaZamani" class="col-form-label">
                        Toplantı Kaçta Başlayacak ? *
                      </label>
                      <input
                        type="datetime-local"
                        class="form-control"
                        id="ToplantiBaslamaZamani"
                        value={this.state.meetingStartingTime}
                        name="meetingStartingTime"
                        onChange={this.changeHandler}
                        required
                      />
                    </div>
                    <div class="col form-group">
                      <label for="ToplantiBitisZamani" class="col-form-label">
                        Toplantı Kaçta Bitecek ? *
                      </label>
                      <input
                        type="datetime-local"
                        class="form-control"
                        id="ToplantiBitisZamani"
                        value={this.state.meetingEndingTime}
                        name="meetingEndingTime"
                        onChange={this.changeHandler}
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="ToplantiMentee" class="col-form-label">
                      Toplantıyı Hangi Mentee ile Yapacağınızı Seçin *
                    </label>
                    <select
                      value={this.state.menteeId}
                      name="menteeId"
                      onChange={this.changeHandler}
                      id="ToplantiMentee"
                      class="form-control"
                      required
                    >
                      {this.state.mentees.map((mentee) => (
                        <option class="dropdown-item" value={mentee.id}>
                          {mentee.firstName + " " + mentee.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="ToplantiYeri" class="col-form-label">
                      Toplantı Nerede Olcak ? *
                    </label>
                    <select
                      value={this.state.meetingLocationId}
                      name="meetingLocationId"
                      onChange={this.changeHandler}
                      id="ToplantiYeri"
                      class="form-control"
                      required
                    >
                      {this.state.meetingLocations.map((locations) => (
                        <option value={locations.id}>{locations.name}</option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="ToplantiLinki" class="col-form-label">
                      Toplantının Linkini Girin *
                    </label>
                    <input
                      type="url"
                      class="form-control"
                      id="ToplantiLinki"
                      placeholder="Toplantınızın Linki Nedir ?"
                      value={this.state.meetingLink}
                      name="meetingLink"
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
                      <i class="fa fa-edit"></i> Toplantıyı Güncelle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Toplantı Güncelle Modal End --> */}

        {/* Toplantı sil -delete */}
        {/* <!-- Toplantı Sil Modal Begin --> */}
        <div
          class="modal fade"
          id="ToplantiSilModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ToplantiSilModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ToplantiSilModalLabel">
                  Emin Misin?
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
                Toplantıyı İptal Etmek İstediğine Emin Misin?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn closeModal"
                  data-dismiss="modal"
                >
                  <i class="fa fa-times"></i> Kapat
                </button>

                <button
                  onClick={() => this.removeMeeting(this.state.meetingId)}
                  type="button"
                  class="btn submitModal"
                  data-dismiss="modal"
                >
                  <i class="fa fa-check"></i> İptal Et
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Toplantı Sil Modal End --> */}
      </div>
    );
  }
}
