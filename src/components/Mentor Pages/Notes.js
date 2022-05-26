/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
import alertify from "alertifyjs";
import Cookies from "universal-cookie";

class Notes extends Component {
  state = {
    notes: [],
    mentees: [],
    filteredNotes: [],
    noteId: 2,
    filterMentee: "",

    mentorId: -1,
    menteeId: -1,
    noteTitle: "",
    noteDescription: "",
    noteLinkName: "",
    noteLink: "",
    noteEndingTime: "",
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
            .get("https://localhost:44385/Note/mentorId/" + response.data.id)
            .then((response) => {
              this.setState({ notes: response.data });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterNotes = (id, fullName) => {
    this.setState({ filterMentee: fullName });
    if (id === -1) {
      this.componentDidMount();
      return;
    }
    axios
      .get("https://localhost:44385/Note/menteeId/" + id)
      .then((response) => {
        this.setState({ notes: response.data });
      });
  };

  removeNote = (noteId) => {
    axios.delete("https://localhost:44385/Note/" + noteId).then((response) => {
      alertify.warning("Not başarıyla silindi ");
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
      .post("https://localhost:44385/Note", this.state)
      .then((response) => {
        alertify.warning("Notunuz başarıyla oluşturuldu. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        alertify.error("Not oluşturulamadı. ");
        console.log(error);
      });
  };

  initialValue = (noteId) => {
    this.setState({ noteId: noteId });
    axios
      .get("https://localhost:44385/Note/" + noteId)
      .then((response) => {
        this.setState({
          mentorId: response.data[0].mentorId,
          menteeId: response.data[0].menteeId,
          noteTitle: response.data[0].noteTitle,
          noteDescription: response.data[0].noteDescription,
          noteLinkName: response.data[0].noteLinkName,
          noteLink: response.data[0].noteLink,
          noteEndingTime: response.data[0].noteEndingTime,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  callComponentAgain = () => {
    this.componentDidMount();
  };

  updateNote = (e) => {
    e.preventDefault();
    document.getElementById("closeUpdate").click();
    axios
      .put("https://localhost:44385/Note/" + this.state.noteId, this.state)
      .then((response) => {
        alertify.warning("Not bilgileri güncellendi. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {/* Noteların geleceği kısım - Get */}
        <div class="container-fluid content">
          <h3 class="text-center m-4 headerH3">
            <span class="font-weight-bold">
              <i class="fa fa-user-cog"></i> Sayın Mentor
            </span>{" "}
            Menteeleriniz İçin{" "}
            <span class="font-weight-bold">
              Notlar <i class="fa fa-check-square"></i>
            </span>{" "}
            Ekleyin
          </h3>

          <div class="d-flex justify-content-end m-3">
            <div class="justify-content-start m-2">
              <h4 className="font-weight-light">
                {this.state.filterMentee
                  ? this.state.filterMentee
                  : "Tüm Notlar"}
              </h4>
            </div>
            <div class="dropdown m-2">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="NotlarMenteeSec"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mentee Seç
              </button>
              <div class="dropdown-menu" aria-labelledby="NotlarMenteeSec">
                <a
                  class="dropdown-item"
                  onClick={() => this.filterNotes(-1, "Tüm Notlar")}
                >
                  <b>Tüm Notlar</b>
                </a>
                {this.state.mentees.map((mentee) => (
                  <a
                    class="dropdown-item"
                    onClick={() =>
                      this.filterNotes(
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
                data-target="#NotEkleModal"
              >
                <i class="fa fa-plus"></i> Not Oluştur
              </button>
            </div>
          </div>

          <ul class="stickyul">
            {this.state.notes.length > 0 ? (
              this.state.notes.map((note) => (
                <li class="stickyli">
                  <div class="stickya">
                    <h2 class="stickyh2">{note.noteTitle}</h2>
                    <p class="stickyp">{note.noteDescription}</p>
                    <ul class="stickyInfoUl">
                      <li class="stickyInfoLi">
                        <span class="stickyInfoSpan">
                          Konu İçin Yardımcı Kaynak{" "}
                        </span>
                        <a class="stickyInfoA" href={note.noteLink}>
                          {note.noteLinkName}
                        </a>
                      </li>
                      <li class="stickyInfoLi">
                        <span class="stickyInfoSpan">Bitiş Tarihi </span>
                        <input
                          class="stickyInfoInput"
                          type="text"
                          value={note.noteEndingTime.split("T")[0]}
                          disabled
                        />
                      </li>
                      <li class="stickyInfoLi">
                        <span class="stickyInfoSpan">Gönderilen Mentee </span>
                        <p class="NotMenteeName m-0">
                          {this.state.mentees.map((mentee) =>
                            mentee.id === note.menteeId
                              ? mentee.firstName + " " + mentee.lastName
                              : null
                          )}
                        </p>
                      </li>
                      <li class="stickyInfoLi">
                        <span class="stickyInfoSpan">Güncelle-Sil </span>

                        <button
                          type="button"
                          class="btn btn-secondary m-2 btn-sm"
                          data-toggle="modal"
                          data-target="#NotGuncelleModal"
                          onClick={() => this.initialValue(note.id)}
                        >
                          <i class="fa fa-edit"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#NotSilModal"
                          onClick={() => this.setState({ noteId: note.id })}
                        >
                          <i class="fa fa-times"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              ))
            ) : (
              <div className="container">
                <div class="jumbotron">
                  <h1 class="display-6">Notunuz Yok!</h1>
                  <p class="lead">
                    Not oluştur kısmına giderek hemen menteeleriniz için notlar
                    oluşturabilir onlara bilgi aktarımı yapabilirsiniz.
                    Öğrenmenin keyfine varın :)
                  </p>
                  <hr class="my-4" />
                </div>
              </div>
            )}
          </ul>
        </div>

        {/* <!-- Not Ekle Modal Begin --> */}
        <div
          class="modal fade"
          id="NotEkleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="NotEkleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="NotEkleModalLabel">
                  <i class="fa fa-plus"></i> Not Ekle
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
                    <label htmlFor="NotBaslik" class="col-form-label">
                      Not Başlığı *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="NotBaslik"
                      placeholder="Not Başlığı Ekleyin."
                      onChange={this.changeHandler}
                      name="noteTitle"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotMesaj" class="col-form-label">
                      Notunu Yaz *
                    </label>
                    <textarea
                      class="form-control"
                      id="NotMesaj"
                      type="text"
                      placeholder="Not ya da Bilgilendirici Mesajlar Yazın."
                      onChange={this.changeHandler}
                      name="noteDescription"
                      required
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotMentee" class="col-form-label">
                      Gönderilecek Menteeyi Seçin *
                    </label>
                    <select
                      name="menteeId"
                      onChange={this.changeHandler}
                      id="NotMentee"
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
                    <label htmlFor="NotLink" class="col-form-label">
                      Link Koyun *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="NotLink"
                      placeholder="Notunuzu Destekleyici Link Bırakın*"
                      onChange={this.changeHandler}
                      name="noteLink"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotLinkName" class="col-form-label">
                      Linkinze İsim Verin *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="NotLinkName"
                      placeholder="Linkinizin Daha Anlaşılır Olması İçin İsim Verin."
                      onChange={this.changeHandler}
                      name="noteLinkName"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotDate" class="col-form-label">
                      Notunuz En Son Ne Zamana Yapılmalı? *
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="NotDate"
                      value={this.state.noteEndingTime}
                      onChange={this.changeHandler}
                      name="noteEndingTime"
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
                      <i class="fa fa-plus"></i> Not Ekle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Not Ekle Modal End --> */}

        {/* <!-- Not Güncelle Modal Begin --> */}
        <div
          class="modal fade"
          id="NotGuncelleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="NotGuncelleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="NotGuncelleModalLabel">
                  <i class="fa fa-edit"></i> Not Güncelle
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
                <form onSubmit={this.updateNote}>
                  <div class="form-group">
                    <label htmlFor="NotBaslik" class="col-form-label">
                      Not Başlığı *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="NotBaslik"
                      placeholder="Not Başlığı Ekleyin."
                      value={this.state.noteTitle}
                      onChange={this.changeHandler}
                      name="noteTitle"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotMesaj" class="col-form-label">
                      Notunuzu Yazınız *
                    </label>
                    <textarea
                      class="form-control"
                      id="NotMesaj"
                      type="text"
                      placeholder="Not ya da Bilgilendirici Mesajlar Yazın."
                      value={this.state.noteDescription}
                      onChange={this.changeHandler}
                      name="noteDescription"
                      required
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotMentee" class="col-form-label">
                      Gönderilecek Menteeyi Seçin *
                    </label>
                    <select
                      value={this.state.menteeId}
                      name="menteeId"
                      onChange={this.changeHandler}
                      id="NotMentee"
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
                    <label htmlFor="NotLink" class="col-form-label">
                      Link Koyun *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="NotLink"
                      placeholder="Notunuzu Destekleyici Link Bırakın*"
                      value={this.state.noteLink}
                      onChange={this.changeHandler}
                      name="noteLink"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotLinkName" class="col-form-label">
                      Linkinze İsim Verin *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="NotLinkName"
                      placeholder="Linkinizin Daha Anlaşılır Olması İçin İsim Verin."
                      value={this.state.noteLinkName}
                      onChange={this.changeHandler}
                      name="noteLinkName"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="NotDate" class="col-form-label">
                      Notunuz En Son Ne Zamana Yapılmalı? *
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="NotDate"
                      value={this.state.noteEndingTime}
                      onChange={this.changeHandler}
                      name="noteEndingTime"
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
                      <i class="fa fa-edit"></i> Notu Güncelle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Not Güncelle Modal End --> */}

        {/* <!-- Not Sil Modal Begin --> */}
        <div
          class="modal fade"
          id="NotSilModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="NotSilModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="NotSilModalLabel">
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
                Bu Notu Silmek İstediğine Emin Misin?
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
                  type="button"
                  class="btn submitModal"
                  data-dismiss="modal"
                  onClick={() => this.removeNote(this.state.noteId)}
                >
                  <i class="fa fa-check"></i> Sil
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Not Sil Modal End --> */}
      </div>
    );
  }
}

export default Notes;
