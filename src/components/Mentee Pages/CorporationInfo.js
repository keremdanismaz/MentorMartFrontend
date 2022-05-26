/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import CorporationInfoImage from "../../images/CorporationInfo.jpg";
import axios from "axios";
import Cookies from "universal-cookie";

export default class CorporationInfo extends Component {
  state = {
    userName: "",
    mentorName: "",
    corporationInfo: [],
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
          const userName =
            response.data.firstName + " " + response.data.lastName;
          this.setState({ userName });
          axios
            .get("https://localhost:44385/userInfo/" + response.data.mentorId)
            .then((response) => {
              const mentorName =
                response.data[0].firstName + " " + response.data[0].lastName;
              this.setState({ mentorName });
              axios
                .get(
                  "https://localhost:44385/corporationInfo/" +
                    response.data[0].coprorationId
                )
                .then((response) => {
                  const corporationInfo = response.data[0];
                  this.setState({ corporationInfo });
                  axios
                    .get("https://localhost:44385/Corporation")
                    .then((response) => {
                      const corporations = response.data;
                      this.setState({ corporations });
                    });
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
      // Corporation Info Page Start
      <div class="container-fluid content">
        <img class="img" src={CorporationInfoImage} alt="responsive-image" />
        <div class="card m-4">
          <div class="card-header text-center">
            {this.state.corporations.map((corporation) =>
              corporation.id === this.state.corporationInfo.id
                ? corporation.name
                : null
            )}
            - Kurum Bilgileri
          </div>
          <div class="card-body">
            <h5 class="card-title">
              Kurumumuza Hoş geldin Sayın{" "}
              <span class="krmBilgiSpan">
                {this.state.userName} <i class="fa fa-city"></i>
              </span>
            </h5>
            <p class="card-text">
              Mentorunuzun Adı:{" "}
              <span class="krmBilgiSpan">
                {this.state.mentorName} <i class="fa fa-user-cog"></i>
              </span>
            </p>
            <p class="card-text">
              <span class="krmBilgiSpan">
                Kurum Bilgileri
                <i class="fa fa-info-circle"></i>
              </span>
              <br />
              {this.state.corporationInfo.corporationInfoText}
            </p>
            <p class="card-text">
              <span class="krmBilgiSpan">
                Hizmetlerimiz
                <i class="fa fa-concierge-bell"></i>
              </span>
              <br />
              <ul>
                <li>{this.state.corporationInfo.corporationServiceOne}</li>
                <li>{this.state.corporationInfo.corporationServiceTwo}</li>
                <li>{this.state.corporationInfo.corporationServiceThree}</li>
                <li>{this.state.corporationInfo.corporationServiceFour}</li>
                <li>{this.state.corporationInfo.corporationServiceFive}</li>
                <li>{this.state.corporationInfo.corporationServiceSix}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      // Corporation Info Page End
    );
  }
}
