import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default class Question extends Component {
  state = {
    questions: [],
    menteeId: 2,
    AskQuestion: "",
    Answer: "",
    questionId: 2,
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
        if (response.data.roleId && response.data.roleId === 2) {
          this.setState({ menteeId: response.data.id });
          axios
            .get(
              "https://localhost:44385/Question/menteeId/" + response.data.id
            )
            .then((response) => {
              const questions = response.data;
              this.setState({ questions });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler = (e) => {
    const updateQuestion = {
      menteeId: this.state.menteeId,
      AskQuestion: this.state.AskQuestion,
      Answer: this.state.Answer,
    };
    axios.put(
      "https://localhost:44385/Question/" + this.state.questionId,
      updateQuestion
    );
  };

  render() {
    return (
      // Question Begin
      <div class="container-fluid content">
        <h3 class="text-center m-4 headerH3">
          <span class="font-weight-bold">
            <i class="fa fa-user-cog"></i> Mentorunuz
          </span>{" "}
          Tarafından Sizin İçin Belirlenen{" "}
          <span class="font-weight-bold">
            {" "}
            Sorular <i class="fa fa-question-circle"></i>
          </span>
        </h3>

        <div class="container">
          {this.state.questions.map((question) => (
            <div class="card m-5 questionCard">
              <div class="card-header text-center">
                <i class="fa fa-question questionIcon"></i>
                {question.askQuestion}
              </div>
              <div class="card-body">
                <form
                  class="text-center card-text"
                  onSubmit={this.submitHandler}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-2">
                        <b>Önceki Cevabınız: </b>{" "}
                      </div>
                      <div className="col-md-10">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Cevabınızı Yazınız"
                          required
                          disabled
                          value={question.answer}
                          id={question.id}
                        />
                      </div>
                    </div>
                  </div>

                  <br />
                  <textarea
                    class="form-control"
                    type="text"
                    placeholder="Cevabınızı Değiştirin"
                    required
                    id={question.id}
                    onChange={(e) => {
                      this.setState({
                        Answer: e.target.value,
                        questionId: question.id,
                        AskQuestion: question.askQuestion,
                      });
                    }}
                  />
                  <button class="btn  questionbtn" type="submit">
                    <i class="fa fa-paper-plane"></i>
                    Cevabını Gönder
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
      // Question End
    );
  }
}
