import React, { Component } from 'react'
import '../../css/Mentee Layout/Mentee.css';
import { Link } from "react-router-dom";

export default class LeftSidebar extends Component {
    render() {
        return (

            // <!-- Sidebar -->
            <div class="border-right " id="sidebar-wrapper">

                <div class="sidebar-heading"><i class="fas fa-city"></i>
                    <Link to="/"> MentorMart</Link>
                </div>

                <div class="list-group list-group-flush">

                    <Link to="/Mentee/CorporationInfo" class="list-group-item list-group-item-action"><i
                        class="fa fa-info-circle"></i>Kurum Bilgileri</Link>

                    <Link to="/Mentee/Notes" class="list-group-item list-group-item-action"><i
                        class="fa fa-check-square"></i>Notlar</Link>

                    <Link to="/Mentee/Questions" class="list-group-item list-group-item-action"><i
                        class="fa fa-question-circle"></i>Sorular</Link>

                    <Link to="/Mentee/Meetings" class="list-group-item list-group-item-action"><i
                        class="fa fa-calendar"></i>Toplantılar</Link>

                    <Link to="/Mentee/MentorInfo" class="list-group-item list-group-item-action"><i
                        class="fa fa-id-badge"></i>Mentor Bilgileri</Link>

                    <div class="social-links list-group-item list-group-item-action ">
                        <a href="https://twitter.com/keremdanismaz" class="twitter"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/kerem.heybe/" class="facebook"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/keremdnsmaz/?hl=tr" class="instagram"><i
                            class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/kerem-dani%C5%9Fmaz-289b2319a/" class="linkedin"><i
                            class="fab fa-linkedin"></i></a>
                        <div class="copyright">
                            2021 &copy;<span>MentorMart</span>
                        </div>
                    </div>

                </div>
            </div>
            // <!-- /#sidebar-wrapper -->
        )
    }
}
