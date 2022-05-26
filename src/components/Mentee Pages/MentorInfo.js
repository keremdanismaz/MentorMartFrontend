import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default class MentorInfo extends Component {
  state = {
    mentorInfo: [],
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
        if (response.data.roleId && response.data.roleId === 2) {
          axios
            .get("https://localhost:44385/userInfo/" + response.data.mentorId)
            .then((response) => {
              const mentorInfo = response.data[0];
              this.setState({ mentorInfo });
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

  render() {
    return (
      // MentorInfo Begin
      <div class="container-fluid content">
        <div class="container">
          <i class="fa fa-user-cog bilgiicon m-3 ">
            <span> Mentor</span>{" "}
            {this.state.mentorInfo.firstName +
              " " +
              this.state.mentorInfo.lastName}
          </i>

          <div class="card mb-3">
            <div class="card-body">
              <h5>Mentor Bilgileri</h5>
              <h6 class="mt-5">Kurum Adı</h6>
              <p>
                {this.state.corporations.map((corporation) => (
                  <b>
                    {" "}
                    {corporation.id === this.state.mentorInfo.id
                      ? corporation.name
                      : null}{" "}
                  </b>
                ))}
              </p>
              <hr />
              <h6 class="mt-3">Hakkımda</h6>
              <p>{this.state.mentorInfo.about}</p>
              <hr />
              <h6 class="mt-3">Adres</h6>
              <p>{this.state.mentorInfo.address}</p>
              <hr />
              <h6 class="mt-3">Email Adresi</h6>
              <p>
                <a href={this.state.mentorInfo.mail}>
                  {this.state.mentorInfo.mail}
                </a>
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      // MentorInfo End
    );
  }
}
