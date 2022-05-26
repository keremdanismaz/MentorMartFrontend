import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default class MenteeInfo extends Component {
  state = {
    mentees: [],
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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      // Mentor kendi menteelerinin bilgilerini burada görecektir.
      <div class="container-fluid content">
        <h3 class="text-center m-4 headerH3">
          <span class="font-weight-bold">
            <i class="fa fa-user-cog"></i> Sayın Mentor
          </span>{" "}
          Menteelerinizi İnceleyin
        </h3>

        <div class="container">
          <table id="Meentes">
            <tr>
              <th>
                <i class="fa fa-envelope-open-text"></i> Email{" "}
              </th>
              <th>
                <i class="fa fa-signature"></i> İsim{" "}
              </th>
              <th>
                <i class="fa fa-sign"></i> Soyisim
              </th>
            </tr>
            {this.state.mentees.map((mentee) => (
              <tr>
                <td>
                  <a href={"mailto:" + mentee.mail}>{mentee.mail}</a>
                </td>
                <td>{mentee.firstName}</td>
                <td>{mentee.lastName}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
