/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import calendar from '../../images/Calendar.PNG'

export default class Meetings extends Component {
    render() {
        return (
            <div>

                {/* Meeting- Toplantılar buraya yerleştirilecek -Get */}
                <div class="container-fluid content">

                    <h3 class="text-center m-4 headerH3">
                        <span class="font-weight-bold">
                            <i class="fa fa-user-cog"></i>
                    Sayın Mentor</span> Menteelerinize Özel <span class="font-weight-bold"> Toplantılar <i class="fa fa-calendar"></i> </span> Oluşturun
                        </h3>

                    <div class="d-flex justify-content-end m-3 ">
                        <div class="dropdown m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="ToplantilarMenteeSec"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mentee Seç
                                </button>
                            <div class="dropdown-menu" aria-labelledby="ToplantilarMenteeSec">
                                <a class="dropdown-item" href="#" selected>Ahmet Duman</a>
                                <a class="dropdown-item" href="#">Ferit Soymaz</a>
                                <a class="dropdown-item" href="#">Ayşecan Atacan</a>
                                <a class="dropdown-item" href="#">Hülya Koçyiğit</a>
                            </div>
                        </div>
                        <div class="m-2">
                            <button type="button" class="btn btn-secondary" data-toggle="modal"
                                data-target="#ToplantiEkleModal"><i class="fa fa-plus"></i> Toplantı Oluştur</button>
                        </div>
                    </div>

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
                                                18 Mart 2021
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
                                        <h5>Mentee</h5>
                                        <p>
                                            <span>Toplantı Konusu</span>
                                                Algoritmalar Başlangıcı
                                            </p>
                                        <p>
                                            <span>Mentee</span>
                                                Ahmet Duman
                                            </p>
                                        <p>
                                            <span>Toplantı Linki</span>
                                            <a href="#">Toplantı Linki</a>
                                        </p>
                                    </div>

                                </div>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#ToplantiGuncelleModal"><i class="fa fa-edit"></i></button>
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#ToplantiSilModal"><i class="fa fa-times"></i></button>
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
                                                18 Mart 2021
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
                                        <h5>Mentee</h5>
                                        <p>
                                            <span>Toplantı Konusu</span>
                                                İnsanlık Nereye Gidiyor
                                            </p>
                                        <p>
                                            <span>Mentee</span>
                                                Ahmet Duman
                                            </p>
                                        <p>
                                            <span>Toplantı Linki</span>
                                            <a href="#">Toplantı Linki</a>
                                        </p>
                                    </div>

                                </div>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#ToplantiGuncelleModal"><i class="fa fa-edit"></i></button>
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#ToplantiSilModal"><i class="fa fa-times"></i></button>
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
                                                18 Mart 2021
                                            </p>
                                        <p>
                                            <span>Toplantı Yeri</span>
                                                @Jitsu Meet
                                            </p>

                                    </div>
                                    <div class="col-md-4 text-center">
                                        <img class="img-fluid toplant" alt="toplantıİmg" src={calendar} />
                                    </div>
                                    <div class="col-md-4 text-center">
                                        <h5>Mentee</h5>
                                        <p>
                                            <span>Toplantı Konusu</span>
                                                Hayvanlar Alemi
                                            </p>
                                        <p>
                                            <span>Mentee</span>
                                                Ahmet Duman
                                            </p>
                                        <p>
                                            <span>Toplantı Linki</span>
                                            <a href="#">Toplantı Linki</a>
                                        </p>
                                    </div>

                                </div>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#ToplantiGuncelleModal"><i class="fa fa-edit"></i></button>
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#ToplantiSilModal"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Toplantı ekle- Post dersi */}
                {/* <!-- Toplantı Ekle Modal Begin --> */}
                <div class="modal fade" id="ToplantiEkleModal" tabindex="-1" role="dialog"
                    aria-labelledby="ToplantiEkleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="ToplantiEkleModalLabel"><i class="fa fa-plus"></i> Toplantı
                                Oluştur</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="ToplantiKonusu" class="col-form-label">Toplantının Konusu *</label>
                                        <input type="text" class="form-control" id="ToplantiKonusu"
                                            placeholder="Toplantınızın Konusu Nedir ?" value="" name="" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiGunu" class="col-form-label">Toplantının Gününü
                                        Belirleyin *</label>
                                        <input type="date" class="form-control" id="ToplantiGunu" value="" name="" required />
                                    </div>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <label for="ToplantiBaslamaZamani" class="col-form-label">Toplantı Kaçta
                                            Başlayacak
                                            ? *</label>
                                            <input type="time" class="form-control" id="ToplantiBaslamaZamani" value=""
                                                name="" required />
                                        </div>
                                        <div class="col form-group">
                                            <label for="ToplantiBitisZamani" class="col-form-label">Toplantı Kaçta Bitecek
                                            ? *</label>
                                            <input type="time" class="form-control" id="ToplantiBitisZamani" value=""
                                                name="" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiMentee" class="col-form-label">Toplantıyı Hangi Mentee ile
                                        Yapacağınızı Seçin *</label>
                                        <select name="" id="ToplantiMentee" class="form-control" required>
                                            <option>Ahmet Duran</option>
                                            <option>Ferit Soymaz</option>
                                            <option>Keydi Mentorluk</option>
                                            <option>India</option>
                                            <option>Devtest Mentor</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiYeri" class="col-form-label">Toplantı Nerede Olcak ? *</label>
                                        <select name="" id="ToplantiYeri" class="form-control" required>
                                            <option>@Google Meet</option>
                                            <option>@Zoom</option>
                                            <option>@Jitsu Meet</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiLinki" class="col-form-label">Toplantının Linkini Girin
                                        *</label>
                                        <input type="url" class="form-control" id="ToplantiLinki"
                                            placeholder="Toplantınızın Linki Nedir ?" value="" name="" required />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-plus"></i>
                                        Toplantı Oluştur</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Toplantı Ekle Modal End --> */}

                {/* Toplantı güncelle- put */}
                {/* <!-- Toplantı Güncelle Modal Begin --> */}
                <div class="modal fade" id="ToplantiGuncelleModal" tabindex="-1" role="dialog"
                    aria-labelledby="ToplantiGuncelleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="ToplantiGuncelleModalLabel"><i class="fa fa-edit"></i>
                                Toplantıyı
                                Güncelle
                            </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="ToplantiKonusu" class="col-form-label">Toplantının Konusu *</label>
                                        <input type="text" class="form-control" id="ToplantiKonusu"
                                            placeholder="Toplantınızın Konusu Nedir ?" value="" name="" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiGunu" class="col-form-label">Toplantının Gününü
                                        Belirleyin *</label>
                                        <input type="date" class="form-control" id="ToplantiGunu" value="" name="" required />
                                    </div>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <label for="ToplantiBaslamaZamani" class="col-form-label">Toplantı Kaçta
                                            Başlayacak
                                            ? *</label>
                                            <input type="time" class="form-control" id="ToplantiBaslamaZamani" value=""
                                                name="" required />
                                        </div>
                                        <div class="col form-group">
                                            <label for="ToplantiBitisZamani" class="col-form-label">Toplantı Kaçta Bitecek
                                            ? *</label>
                                            <input type="time" class="form-control" id="ToplantiBitisZamani" value=""
                                                name="" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiMentee" class="col-form-label">Toplantıyı Hangi Mentee ile
                                        Yapacağınızı Seçin *</label>
                                        <select name="" id="ToplantiMentee" class="form-control" required>
                                            <option>Ahmet Duran</option>
                                            <option>Ferit Soymaz</option>
                                            <option>Keydi Mentorluk</option>
                                            <option>India</option>
                                            <option>Devtest Mentor</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiYeri" class="col-form-label">Toplantı Nerede Olcak ? *</label>
                                        <select name="" id="ToplantiYeri" class="form-control" required>
                                            <option>@Google Meet</option>
                                            <option>@Zoom</option>
                                            <option>@Jitsu Meet</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="ToplantiLinki" class="col-form-label">Toplantının Linkini Girin
                                        *</label>
                                        <input type="url" class="form-control" id="ToplantiLinki"
                                            placeholder="Toplantınızın Linki Nedir ?" value="" name="" required />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-edit"></i>
                                        Toplantıyı Güncelle</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Toplantı Güncelle Modal End --> */}

                {/* Toplantı sil -delete */}
                {/* <!-- Toplantı Sil Modal Begin --> */}
                <div class="modal fade" id="ToplantiSilModal" tabindex="-1" role="dialog"
                    aria-labelledby="ToplantiSilModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ToplantiSilModalLabel">Emin Misin?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Toplantıyı İptal Etmek İstediğine Emin Misin?
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                    class="fa fa-times"></i> Kapat</button>
                                <button type="button" class="btn submitModal"><i class="fa fa-check"></i> İptal Et</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Toplantı Sil Modal End --> */}

            </div>
        )
    }
}
