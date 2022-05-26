/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
import alertify from "alertifyjs";
import Cookies from "universal-cookie";

export default class Question extends Component {
  state = {
    questions: [],
    mentees: [],
    filteredQuestions: [],
    questionId: 2,
    filterMentee: "",

    mentorId: -1,
    menteeId: -1,
    AskQuestion: "",
    Answer: "",
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
            .get(
              "https://localhost:44385/Question/mentorId/" + response.data.id
            )
            .then((response) => {
              this.setState({ questions: response.data });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterQuestion = (id, fullName) => {
    this.setState({ filterMentee: fullName });
    if (id === -1) {
      this.componentDidMount();
      return;
    }
    axios
      .get("https://localhost:44385/Question/menteeId/" + id)
      .then((response) => {
        this.setState({ questions: response.data });
      });
  };

  removeQuestion = (questionId) => {
    axios
      .delete("https://localhost:44385/Question/" + questionId)
      .then((response) => {
        alertify.warning("Soru başarıyla silindi ");
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
      .post("https://localhost:44385/Question", this.state)
      .then((response) => {
        alertify.warning("Sorunuz başarıyla oluşturuldu. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        alertify.error("Soru oluşturulamadı. ");
        console.log(error);
      });
  };

  initialValue = (questionId) => {
    this.setState({ questionId: questionId });
    axios
      .get("https://localhost:44385/Question/" + questionId)
      .then((response) => {
        this.setState({
          mentorId: response.data[0].mentorId,
          menteeId: response.data[0].menteeId,
          AskQuestion: response.data[0].askQuestion,
          Answer: response.data[0].answer,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  callComponentAgain = () => {
    this.componentDidMount();
  };

  updateQuestion = (e) => {
    e.preventDefault();
    document.getElementById("closeUpdate").click();
    axios
      .put(
        "https://localhost:44385/Question/" + this.state.questionId,
        this.state
      )
      .then((response) => {
        alertify.warning("Soru bilgileri güncellendi. ");
        this.callComponentAgain();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {/* Sorular buraya eklenecek */}
        <div class="container-fluid content">
          <h3 class="text-center m-4 headerH3">
            <span class="font-weight-bold">
              <i class="fa fa-user-cog"></i> Sayın Mentor
            </span>{" "}
            Menteeleriniz İçin{" "}
            <span class="font-weight-bold">
              {" "}
              Sorular <i class="fa fa-question-circle"></i>
            </span>{" "}
            Hazırlayın
          </h3>

          <div class="d-flex justify-content-end m-3">
            <div class="justify-content-start m-2">
              <h4 className="font-weight-light">
                {this.state.filterMentee
                  ? this.state.filterMentee
                  : "Tüm Sorular"}
              </h4>
            </div>
            <div class="dropdown m-2">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="SorularMenteeSec"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mentee Seç
              </button>
              <div class="dropdown-menu" aria-labelledby="SorularMenteeSec">
                <a
                  class="dropdown-item"
                  onClick={() => this.filterQuestion(-1, "Tüm Sorular")}
                >
                  <b>Tüm Sorular</b>
                </a>
                {this.state.mentees.map((mentee) => (
                  <a
                    class="dropdown-item"
                    onClick={() =>
                      this.filterQuestion(
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
                data-target="#SoruEkleModal"
              >
                <i class="fa fa-plus"></i> Soru Oluştur
              </button>
            </div>
          </div>

          <div class="container">
            {this.state.questions.length > 0 ? (
              this.state.questions.map((question) => (
                <div class="card m-5 questionCard">
                  <div class="card-header text-center">
                    <i class="fa fa-question questionIcon"></i>
                    {question.askQuestion}
                    <div class="SoruMenteeName d-flex justify-content-end">
                      {this.state.mentees.map((mentee) =>
                        mentee.id === question.menteeId
                          ? mentee.firstName + " " + mentee.lastName
                          : null
                      )}
                    </div>
                  </div>
                  <div class="card-body">
                    <p>
                      {question.answer.length > 0 ? (
                        question.answer
                      ) : (
                        <h6 className="text-center">
                          Menteeniz henüz soruya cevap vermedi.
                        </h6>
                      )}
                    </p>
                    <div class="d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn btn-secondary m-2 btn-sm"
                        data-toggle="modal"
                        data-target="#SoruGuncelleModal"
                        onClick={() => this.initialValue(question.id)}
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary m-2 btn-sm"
                        data-toggle="modal"
                        data-target="#SoruSilModal"
                        onClick={() =>
                          this.setState({ questionId: question.id })
                        }
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
                  <h1 class="display-6">Sorunuz Yok!</h1>
                  <p class="lead">
                    Soru oluştur kısmına giderek hemen menteeleriniz için
                    sorular oluşturabilir onlara kritik sorular sorabilirsiniz.
                    Öğrenmenin keyfine varın :)
                  </p>
                  <hr class="my-4" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <!-- Soru Ekle Modal Begin --> */}
        <div
          class="modal fade"
          id="SoruEkleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="SoruEkleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="SoruEkleModalLabel">
                  <i class="fa fa-plus"></i> Soru Ekle
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
                    <label for="Soru" class="col-form-label">
                      Soru *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Soru"
                      placeholder="Sorunuzu Soru İşareti Kullanarak Buraya Ekleyin."
                      onChange={this.changeHandler}
                      name="AskQuestion"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="SoruMentee" class="col-form-label">
                      Gönderilecek Menteeyi Seçin *
                    </label>
                    <select
                      name="menteeId"
                      onChange={this.changeHandler}
                      id="SoruMentee"
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
                      Soru Ekle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Soru Ekle Modal End --> */}

        {/* <!-- Soru Güncelle Modal Begin --> */}
        <div
          class="modal fade"
          id="SoruGuncelleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="SoruGuncelleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="SoruGuncelleModalLabel">
                  <i class="fa fa-edit"></i> Soru Güncelle
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
                <form onSubmit={this.updateQuestion}>
                  <div class="form-group">
                    <label for="Soru" class="col-form-label">
                      Soru *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Soru"
                      placeholder="Sorunuzu Soru İşareti Kullanarak Buraya Ekleyin."
                      value={this.state.AskQuestion}
                      onChange={this.changeHandler}
                      name="AskQuestion"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="SourMentee" class="col-form-label">
                      Gönderilecek Menteeyi Seçin *
                    </label>
                    <select
                      value={this.state.menteeId}
                      name="menteeId"
                      onChange={this.changeHandler}
                      id="SourMentee"
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
                      Soru Güncelle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Soru Güncelle Modal End --> */}

        {/* <!-- Soru Sil Modal Begin --> */}
        <div
          class="modal fade"
          id="SoruSilModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="SoruSilModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="SoruSilModalLabel">
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
                Bu Soruyu Silmek İstediğine Emin Misin?
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
                  onClick={() => this.removeQuestion(this.state.questionId)}
                >
                  <i class="fa fa-check"></i> Sil
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Soru Sil Modal End --> */}
      </div>
    );
  }
}
