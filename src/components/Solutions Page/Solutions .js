import React, { Component } from 'react'
import '../../css/Solutions Page/Solutions.css';
import Attorney from "../../images/Solutions/Attorney.jpg";
import Career from "../../images/Solutions/Career.jpg";
import Community from "../../images/Solutions/Community.jpg";
import Employee from "../../images/Solutions/Employee.jpg";
import Entrepreneur from "../../images/Solutions/Entrepreneur.jpg";
import Group from "../../images/Solutions/Group.jpg";
import Medical from "../../images/Solutions/Medical.jpg";
import Mother from "../../images/Solutions/Mother.jpg";
import Reverse from "../../images/Solutions/Reverse.jpg";
import Student from "../../images/Solutions/Student.jpg";
import Veteran from "../../images/Solutions/Veteran.jpg";
import Women from "../../images/Solutions/Women.jpg";

export default class Solutions extends Component {
    render() {
        return (
            <div>
                <div class="breadcrumbs">
                    <div class="container">
                        <h1>Mentorluk Yazılım Çözümleri, Mentorluk Araçları ve Mentorluk Programı Hizmetleri</h1>
                    </div>
                </div>

                <section id="trainers" class="trainers">
                    <div class="container" data-aos="fade-up">

                        <div class="row" data-aos="zoom-in" data-aos-delay="100">

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Çalışan Mentorluğu</h2>
                                        <hr />
                                        <img src={Employee} class="img-fluid" alt="Employee" />
                                        <h4>
                                            Şirketler veya Devlet Kurumları İçin
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Girişimci Mentorluğu</h2>
                                        <hr />
                                        <img src={Entrepreneur} class="img-fluid" alt="Entrepreneur" />
                                        <h4>
                                            Hızlandırıcılar, İnkübatörler, Ortak Çalışma Alanları için
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Öğrenci Mentorluğu</h2>
                                        <hr />
                                        <img src={Student} class="img-fluid" alt="Student" />
                                        <h4>
                                            Üniversiteler, Mezun Ağları, Liseler İçin
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Gençler İçin Mentorluk</h2>
                                        <hr />
                                        <img src={Reverse} class="img-fluid" alt="Reverse" />
                                        <h4>
                                            Genç Mentorunuzun Gücünü Ortaya Çıkaralım
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Kadın Mentorluğu</h2>
                                        <hr />
                                        <img src={Women} class="img-fluid" alt="Women" />
                                        <h4>
                                            Kadın Kuruluşları veya Programları İçin
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Grup Mentorluğu</h2>
                                        <hr />
                                        <img src={Group} class="img-fluid" alt="Group" />
                                        <h4>
                                            Mentorlar ve Gruplar veya Projeler İçin En İyi Çözüm
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Kıdemli Mentorluk</h2>
                                        <hr />
                                        <img src={Veteran} class="img-fluid" alt="Veteran" />
                                        <h4>
                                            Bir Kıdemli Mentee ile Kıdemli Mentor Arasında
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Avukat Mentorluğu</h2>
                                        <hr />
                                        <img src={Attorney} class="img-fluid" alt="Attorney" />
                                        <h4>
                                            Avukatlar ve Avukat Organizasyonları İçin
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Tıbbi Mentorluğu</h2>
                                        <hr />
                                        <img src={Medical} class="img-fluid" alt="Medical" />
                                        <h4>
                                            Doktorlar ve Sağlık Kuruluşları İçin
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Kariyer Mentorluğu</h2>
                                        <hr />
                                        <img src={Career} class="img-fluid" alt="Career" />
                                        <h4>
                                            Yeni Çalışanlar veya İş Arayanlar İçin Mentorluk
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Anne Mentorluğu</h2>
                                        <hr />
                                        <img src={Mother} class="img-fluid" alt="Mother" />
                                        <h4>
                                            Anneler ve Annelik Programları
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Topluluk Mentorluğu</h2>
                                        <hr />
                                        <img src={Community} class="img-fluid" alt="Community" />
                                        <h4>
                                            Dernekler, Gruplar, STK'lar, Hayır Kurumları için
                                        </h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            </div>
        )
    }
}
