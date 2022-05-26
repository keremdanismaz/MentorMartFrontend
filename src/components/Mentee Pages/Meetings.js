import React, { Component } from "react";
import calendar from "../../images/Calendar.PNG";
import axios from "axios";
import Cookies from "universal-cookie";

export default class Meetings extends Component {
  state = {
    meetings: [],
    meetingLocations: [],
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
            .get("https://localhost:44385/meeting/menteeId/" + response.data.id)
            .then((response) => {
              const meetings = response.data;
              this.setState({ meetings });
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

  render() {
    return (
      // Meetings Begin
      <div class="container-fluid content">
        <h3 class="text-center m-4 headerH3">
          <span class="font-weight-bold">
            <i class="fa fa-user-cog"></i> Mentorunuz
          </span>{" "}
          Tarafından Sizin İçin Belirlenen{" "}
          <span class="font-weight-bold">
            {" "}
            Toplantılar <i class="fa fa-calendar"></i>
          </span>
        </h3>

        <div class="container">
          {this.state.meetings.map((meeting) => (
            <div class="card m-5 toplantiCard">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4 text-center ">
                    <h5>Toplantı Bilgileri</h5>
                    <p>
                      <span>Toplantı Zamanı: </span>
                      {meeting.meetingStartingTime.split(":")[1] +
                        ":" +
                        meeting.meetingStartingTime.split(":")[2]}{" "}
                      -{" "}
                      {meeting.meetingEndingTime.split(":")[1] +
                        ":" +
                        meeting.meetingEndingTime.split(":")[2]}
                    </p>
                    <p>
                      <span>Toplantı Günü: </span>
                      {meeting.meetingDate}
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
                      alt="toplantiImg"
                      src={calendar}
                    />
                  </div>
                  <div class="col-md-4 text-center">
                    <h5>Mentor</h5>
                    <p>
                      <span>Toplantı Konusu: </span>
                      {meeting.meetingTopic}
                    </p>
                    <p>
                      <span>Mentor: </span>
                      {this.state.mentorName}
                    </p>
                    <p>
                      <span>Toplantı Linki: </span>
                      <a href={meeting.meetingLink} target="blank">
                        Toplantı Linkimiz
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      // Meetings End
    );
  }
}
