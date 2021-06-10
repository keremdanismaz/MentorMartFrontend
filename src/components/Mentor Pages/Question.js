/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        return (
            <div>

                {/* Sorular buraya eklenecek - Get işlemi  */}
                <div class="container-fluid content">

                    <h3 class="text-center m-4 headerH3">
                        <span class="font-weight-bold">
                            <i class="fa fa-user-cog"></i> Sayın Mentor</span> Menteeleriniz İçin <span class="font-weight-bold"> Sorular <i class="fa fa-question-circle"></i>
                        </span> Hazırlayın
                </h3>

                    <div class="d-flex justify-content-end m-3 ">
                        <div class="dropdown m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="SorularMenteeSec"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mentee Seç
                        </button>
                            <div class="dropdown-menu" aria-labelledby="SorularMenteeSec">
                                <a class="dropdown-item" href="#" selected>Ahmet Duman</a>
                                <a class="dropdown-item" href="#">Ferit Soymaz</a>
                                <a class="dropdown-item" href="#">Ayşecan Atacan</a>
                                <a class="dropdown-item" href="#">Hülya Koçyiğit</a>
                            </div>
                        </div>
                        <div class="m-2">
                            <button type="button" class="btn btn-secondary" data-toggle="modal"
                                data-target="#SoruEkleModal"><i class="fa fa-plus"></i> Soru Ekle</button>
                        </div>
                    </div>

                    <div class="container">
                        <div class="card m-5 questionCard">
                            <div class="card-header text-center"><i class="fa fa-question questionIcon"></i>
                            Nereden Başlamalıyız Kısmını Tamamladın mı?
                            <div class="SoruMenteeName d-flex justify-content-end">
                                    Ahmet Duran
                            </div>
                            </div>
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores amet repellendus,
                                corporis expedita deleniti quo praesentium minima aperiam beatae aliquid porro natus, ut
                                quidem maiores placeat cum debitis autem reiciendis!</p>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#SoruGuncelleModal"><i class="fa fa-edit"></i></button>
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#SoruSilModal"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="card m-5 questionCard">
                            <div class="card-header text-center"><i class="fa fa-question questionIcon"></i>
                            Algoritmalar da CFG Araması Nasıl Yapılır ?
                            <div class="SoruMenteeName d-flex justify-content-end">
                                    Ahmet Duran
                            </div>
                            </div>
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores amet repellendus,
                                corporis expedita deleniti quo praesentium minima aperiam beatae aliquid porro natus, ut
                                quidem maiores placeat cum debitis autem reiciendis!</p>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#SoruGuncelleModal"><i class="fa fa-edit"></i></button>
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#SoruSilModal"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="card m-5 questionCard">
                            <div class="card-header text-center"><i class="fa fa-question questionIcon"></i>
                            Veri Yapıları Nasıl Gidiyor ?
                            <div class="SoruMenteeName d-flex justify-content-end">
                                    Ahmet Duran
                            </div>
                            </div>
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores amet repellendus,
                                corporis expedita deleniti quo praesentium minima aperiam beatae aliquid porro natus, ut
                                quidem maiores placeat cum debitis autem reiciendis!</p>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#SoruGuncelleModal"><i class="fa fa-edit"></i></button>
                                    <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                        data-target="#SoruSilModal"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Soru Ekle- Post işlemi yapılacak  */}
                {/* <!-- Soru Ekle Modal Begin --> */}
                <div class="modal fade" id="SoruEkleModal" tabindex="-1" role="dialog" aria-labelledby="SoruEkleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="SoruEkleModalLabel"><i class="fa fa-plus"></i> Soru Ekle</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="Soru" class="col-form-label">Soru *</label>
                                        <input type="text" class="form-control" id="Soru"
                                            placeholder="Sorunuzu Soru İşareti Kullanarak Buraya Ekleyin." value="" name=""
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="SoruMentee" class="col-form-label">Gönderilecek Menteeyi Seçin *</label>
                                        <select name="" id="SoruMentee" class="form-control" required>
                                            <option>Ahmet Duran</option>
                                            <option>Ferit Soymaz</option>
                                            <option>Keydi Mentorluk</option>
                                            <option>India</option>
                                            <option>Devtest Mentor</option>
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-plus"></i>
                                        Soru Ekle</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Soru Ekle Modal End --> */}

                {/* Soru Güncelleme -Put işlemi yapılacak. */}
                {/* <!-- Soru Güncelle Modal Begin --> */}
                <div class="modal fade" id="SoruGuncelleModal" tabindex="-1" role="dialog"
                    aria-labelledby="SoruGuncelleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="SoruGuncelleModalLabel"><i class="fa fa-edit"></i> Soru
                                Güncelle
                            </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="Soru" class="col-form-label">Soru *</label>
                                        <input type="text" class="form-control" id="Soru"
                                            placeholder="Sorunuzu Soru İşareti Kullanarak Buraya Ekleyin." value="" name=""
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="SourMentee" class="col-form-label">Gönderilecek Menteeyi Seçin *</label>
                                        <select name="" id="SourMentee" class="form-control" required>
                                            <option>Ahmet Duran</option>
                                            <option>Ferit Soymaz</option>
                                            <option>Keydi Mentorluk</option>
                                            <option>India</option>
                                            <option>Devtest Mentor</option>
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-edit"></i>
                                        Soru Güncelle</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Soru Güncelle Modal End --> */}

                {/* Soru silme işlemi yapılacak- Delete */}
                {/* <!-- Soru Sil Modal Begin --> */}
                <div class="modal fade" id="SoruSilModal" tabindex="-1" role="dialog" aria-labelledby="SoruSilModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="SoruSilModalLabel">Emin Misin?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Bu Soruyu Silmek İstediğine Emin Misin?
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                    class="fa fa-times"></i> Kapat</button>
                                <button type="button" class="btn submitModal"><i class="fa fa-check"></i> Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Soru Sil Modal End --> */}

            </div>
        )
    }
}
