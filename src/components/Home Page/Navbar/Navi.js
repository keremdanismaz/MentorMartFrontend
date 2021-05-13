import React, { Component } from 'react'
import '../../../css/Home Page/HomePage.css';
import { Link } from "react-router-dom";
class Navi extends Component {
    render() {
        return (
            // <!-- Navbar Begin -->
            <header>
                <nav class="mb-3">
                    <div class="nav">
                        <input type="checkbox" id="nav-check" />
                        <div class="nav-header">
                            <div class="nav-title">
                                <Link class="header" to="/"><i class="fas fa-city"></i> MentorCity</Link>
                            </div>
                        </div>
                        <div class="nav-btn">
                            <label for="nav-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>

                        <div class="nav-links-right">
                            <Link class="header" to="/Login"><i class="fa fa-sign-in-alt"></i> Giriş Yap</Link>
                            <Link class="header" to="/RegisterOption"><i class="fa fa-user-plus"></i> Kayıt Ol</Link>

                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Navi