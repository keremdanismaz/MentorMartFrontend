import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userAction";
import * as noteActions from "../../redux/actions/noteActions";
import * as getUserByIdActions from "../../redux/actions/getUserByIdAction";
import * as getNoteByIdActions from "../../redux/actions/getNotesByIdAction";
import axios from "axios";
import Cookies from "universal-cookie";

class Notes extends Component {
  state = {
    notes: [],
    mentorName: "",
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
          .get("https://localhost:44385/userInfo/" + response.data.mentorId)
          .then((response) => {
            const mentorName =
              response.data[0].firstName + " " + response.data[0].lastName;
            this.setState({ mentorName });
          });
        if (response.data.roleId && response.data.roleId === 2) {
          axios
            .get("https://localhost:44385/Note/menteeId/" + response.data.id)
            .then((response) => {
              const notes = response.data;
              this.setState({ notes });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="container-fluid content">
        <h3 class="text-center m-4 headerH3">
          <span class="font-weight-bold">
            <i class="fa fa-user-cog"></i> Sayın Mentee
          </span>{" "}
          Mentorunzun Sizin İçin{" "}
          <span class="font-weight-bold">
            Eklediği Notlar <i class="fa fa-check-square"></i>
          </span>
        </h3>

        <ul class="stickyul">
          {this.state.notes.map((note, index) => (
            <li class="stickyli">
              <div class="stickya">
                <h2 class="stickyh2">{index+1 + ') ' + note.noteTitle}</h2>
                <p class="stickyp">{note.noteDescription}</p>
                <ul class="stickyInfoUl">
                  <li class="stickyInfoLi">
                    <span class="stickyInfoSpan">
                      Konu İçin Yardımcı Kaynak{": "}
                    </span>
                    <a class="stickyInfoA" href={note.noteLink}>
                      {note.noteLinkName}
                    </a>
                  </li>
                  <li class="stickyInfoLi">
                    <span class="stickyInfoSpan">Bitiş Tarihi: </span>
                    <input
                      class="stickyInfoInput noteTime"
                      type="datetime"
                      name=""
                      value={note.noteEndingTime}
                      disabled
                    />
                  </li>
                  <li class="stickyInfoLi">
                    <span class="stickyInfoSpan">Mentor: </span>
                    <p class="NotMenteeName">
                      {this.state.mentorName}
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userListReducer,
    notes: state.noteListReducer,
    getUserByIds: state.getUserByIdListReducer,
    getNoteByIds: state.getNoteByIdListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(userActions.getUser, dispatch),
      getUserById: bindActionCreators(getUserByIdActions.getUserById, dispatch),
      getNotes: bindActionCreators(noteActions.getNotes, dispatch),
      getNoteById: bindActionCreators(getNoteByIdActions.getNoteById, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
