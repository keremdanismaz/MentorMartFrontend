import React, { Component } from 'react'
import calendar from '../../images/Calendar.PNG'

export default class Meetings extends Component {
    render() {
        return (

            // Meetings Begin
            <div class="container-fluid content">

                <h3 class="text-center m-4 headerH3">
                    <span class="font-weight-bold">
                        <i class="fa fa-user-cog"></i>
                        Mentorunuz</span>
                    Tarafından Sizin İçin Belirlenen
                    <span class="font-weight-bold">
                        Toplantılar <i class="fa fa-calendar"></i>
                    </span>
                </h3>

                <div class="container">

                    <div class="card m-5 toplantiCard">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 text-center ">
                                    <h5>Toplantı Bilgileri</h5>
                                    <p>
                                        <span>Toplantı Zamanı</span>
                                        16.30-17.30
                                    </p>
                                    <p>
                                        <span>Toplantı Günü</span>
                                        18 Mart 2021 Perşembe
                                    </p>
                                    <p>
                                        <span>Toplantı Yeri</span>
                                        @Google Meet
                                    </p>

                                </div>
                                <div class="col-md-4 text-center">
                                    <img class="img-fluid toplant" alt="toplantıİmg" src={calendar} />
                                </div>
                                <div class="col-md-4 text-center">
                                    <h5>Mentor</h5>
                                    <p>
                                        <span>Toplantı Konusu</span>
                                        Algoritmalar Başlangıcı
                                    </p>
                                    <p>
                                        <span>Mentor</span>
                                        Kerem DANIŞMAZ
                                    </p>
                                    <p>
                                        <span>Toplantı Linki</span>
                                        <a href="https://meet.google.com/hvm-gjvi-aaw">Toplantı Linkimiz</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card m-5 toplantiCard">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 text-center ">
                                    <h5>Toplantı Bilgileri</h5>
                                    <p>
                                        <span>Toplantı Zamanı</span>
                                        16.30-17.30
                                    </p>
                                    <p>
                                        <span>Toplantı Günü</span>
                                        18 Mart 2021 Perşembe
                                    </p>
                                    <p>
                                        <span>Toplantı Yeri</span>
                                        @Jitsi Meet
                                    </p>

                                </div>
                                <div class="col-md-4 text-center">
                                    <img class="img-fluid toplant" alt="toplantıİmg" src={calendar} />
                                </div>
                                <div class="col-md-4 text-center">
                                    <h5>Mentor</h5>
                                    <p>
                                        <span>Toplantı Konusu</span>
                                        Algoritmalar Başlangıcı
                                    </p>
                                    <p>
                                        <span>Mentor</span>
                                        Kerem DANIŞMAZ
                                    </p>
                                    <p>
                                        <span>Toplantı Linki</span>
                                        <a href="https://meet.google.com/hvm-gjvi-aaw">Toplantı Linkimiz</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card m-5 toplantiCard">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 text-center ">
                                    <h5>Toplantı Bilgileri</h5>
                                    <p>
                                        <span>Toplantı Zamanı</span>
                                        16.30-17.30
                                    </p>
                                    <p>
                                        <span>Toplantı Günü</span>
                                        18 Mart 2021 Perşembe
                                    </p>
                                    <p>
                                        <span>Toplantı Yeri</span>
                                        @Zoom
                                    </p>

                                </div>
                                <div class="col-md-4 text-center">
                                    <img class="img-fluid toplant" alt="toplantıİmg" src={calendar} />
                                </div>
                                <div class="col-md-4 text-center">
                                    <h5>Mentor</h5>
                                    <p>
                                        <span>Toplantı Konusu</span>
                                        Algoritmalar Başlangıcı
                                    </p>
                                    <p>
                                        <span>Mentor</span>
                                        Kerem DANIŞMAZ
                                    </p>
                                    <p>
                                        <span>Toplantı Linki</span>
                                        <a href="https://meet.google.com/hvm-gjvi-aaw">Toplantı Linkimiz</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            // Meetings End

        )
    }
}
