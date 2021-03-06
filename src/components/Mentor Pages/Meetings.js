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
        alertify.warning("Toplant?? ba??ar??yla iptal edildi. ");
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
        alertify.warning("Toplant?? iste??i olu??turuldu. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        alertify.error("Toplant?? iste??i olu??turulamad??. ");
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
        alertify.warning("Toplant?? bilgileri g??ncellendi. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {/* Meeting- Toplant??lar buraya yerle??tirilecek -Get */}
        <div class="container-fluid content">
          <h3 class="text-center m-4 headerH3">
            <span class="font-weight-bold">
              <i class="fa fa-user-cog"></i>
              Say??n Mentor
            </span>{" "}
            Menteelerinize ??zel{" "}
            <span class="font-weight-bold">
              {" "}
              Toplant??lar <i class="fa fa-calendar"></i>{" "}
            </span>{" "}
            Olu??turun
          </h3>

          <div class="d-flex justify-content-end m-3">
            <div class="justify-content-start m-2">
              <h4 className="font-weight-light">
                {this.state.filterMentee
                  ? this.state.filterMentee
                  : "T??m Toplant??lar"}
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
                Mentee Se??
              </button>
              <div class="dropdown-menu" aria-labelledby="ToplantilarMenteeSec">
                <a
                  class="dropdown-item"
                  onClick={() => this.filterMeeting(-1, "T??m Toplant??lar")}
                >
                  <b>T??m Toplant??lar</b>
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
                <i class="fa fa-plus"></i> Toplant?? Olu??tur
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
                        <h5>Toplant?? Bilgileri</h5>
                        <p>
                          <span>Toplant?? Zaman??: </span>
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
                          <span>Toplant?? G??n??: </span>
                          {meeting.meetingDate.split("T")[0]}
                        </p>
                        <p>
                          <span>Toplant?? Yeri: </span>
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
                          alt="toplant????mg"
                          src={calendar}
                        />
                      </div>
                      <div class="col-md-4 text-center">
                        <h5>Mentee</h5>
                        <p>
                          <span>Toplant?? Konusu: </span>
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
                          <span>Toplant?? Linki: </span>
                          <a href={meeting.meetingLink} target="blank">
                            Toplant?? Linkimiz
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
                  <h1 class="display-6">Toplant??n??z Yok!</h1>
                  <p class="lead">
                    Toplant?? olu??tur k??sm??na giderek hemen menteeleriniz ile
                    toplant??lar olu??turabilir onlar ile doyas??ya
                    konu??abilirsiniz. ????renmenin keyfine var??n :)
                  </p>
                  <hr class="my-4" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Toplant?? ekle- Post dersi */}
        {/* <!-- Toplant?? Ekle Modal Begin --> */}
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
                  <i class="fa fa-plus"></i> Toplant?? Olu??tur
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
                      Toplant??n??n Konusu *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="ToplantiKonusu"
                      placeholder="Toplant??n??z??n Konusu Nedir ?"
                      name="meetingTopic"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="ToplantiGunu" class="col-form-label">
                      Toplant??n??n G??n??n?? Belirleyin *
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
                        Toplant?? Ka??ta Ba??layacak ? *
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
                        Toplant?? Ka??ta Bitecek ? *
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
                      Toplant??y?? Hangi Mentee ile Yapaca????n??z?? Se??in *
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
                      Toplant?? Nerede Olcak ? *
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
                      Toplant??n??n Linkini Girin *
                    </label>
                    <input
                      type="url"
                      class="form-control"
                      id="ToplantiLinki"
                      placeholder="Toplant??n??z??n Linki Nedir ?"
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
                      Toplant?? Olu??tur
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Toplant?? Ekle Modal End --> */}

        {/* Toplant?? g??ncelle- put */}
        {/* <!-- Toplant?? G??ncelle Modal Begin --> */}
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
                  <i class="fa fa-edit"></i> Toplant??y?? G??ncelle
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
                      Toplant??n??n Konusu *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="ToplantiKonusu"
                      placeholder="Toplant??n??z??n Konusu Nedir ?"
                      value={this.state.meetingTopic}
                      name="meetingTopic"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="ToplantiGunu" class="col-form-label">
                      Toplant??n??n G??n??n?? Belirleyin *
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
                        Toplant?? Ka??ta Ba??layacak ? *
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
                        Toplant?? Ka??ta Bitecek ? *
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
                      Toplant??y?? Hangi Mentee ile Yapaca????n??z?? Se??in *
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
                      Toplant?? Nerede Olcak ? *
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
                      Toplant??n??n Linkini Girin *
                    </label>
                    <input
                      type="url"
                      class="form-control"
                      id="ToplantiLinki"
                      placeholder="Toplant??n??z??n Linki Nedir ?"
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
                      <i class="fa fa-edit"></i> Toplant??y?? G??ncelle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Toplant?? G??ncelle Modal End --> */}

        {/* Toplant?? sil -delete */}
        {/* <!-- Toplant?? Sil Modal Begin --> */}
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
                Toplant??y?? ??ptal Etmek ??stedi??ine Emin Misin?
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
                  <i class="fa fa-check"></i> ??ptal Et
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Toplant?? Sil Modal End --> */}
      </div>
    );
  }
}
