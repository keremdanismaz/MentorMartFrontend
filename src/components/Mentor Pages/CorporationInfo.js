/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'

export default class CorporationInfo extends Component {
    render() {
        return (
            <div>

                {/* Kurum bilgileri, hizmetler gibi değerlerin get işlemleri */}
                <div class="container-fluid content">
                    <img class="img"
                        src="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg" alt="image" />
                    <div class="card m-4">
                        <div class="card-header text-center">
                            Keydi Mentorluk Hizmetleri - Kurum Bilgileri
                    <div class="text-right">
                                <button type="button" class="btn btn-secondary btn-sm m-0 " data-toggle="modal"
                                    data-target="#KurumBilgileriModal"><i class="fa fa-edit"></i> Güncelle</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Kurumuna Hoş geldin Sayın <span class="krmBilgiSpan">Kerem Danışmaz <i
                                class="fa fa-city"></i></span></h5>
                            <p class="card-text"><span class="krmBilgiSpan">Kurum Bilgileri <i class="fa fa-info-circle"></i></span><br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eos
                        eligendi odit in pariatur voluptates, libero voluptatibus aperiam provident quam consequatur
                        commodi dicta delectus voluptatem corrupti perspiciatis repellendus modi illum. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Dicta quaerat odio dolore, quisquam ea natus
                        perferendis pariatur alias neque voluptas saepe excepturi non velit est aspernatur sunt
                        libero eaque quia!
                    </p>
                            <p class="card-text"><span class="krmBilgiSpan">Hizmetlerimiz <i class="fa fa-concierge-bell"></i></span><br />
                                <ul>
                                    <li>Formalar kısmına bakarak senin için hazırladığım bilgilendirmeleri okuyabilirsin.</li>
                                    <li>Toplantıları takip et ve toplantımızı kaçırma!</li>
                                    <li>Sorular kısmındaki sorulara cevap ver seni tanımama yardımcı ol.</li>
                                </ul>
                            </p>
                            <p class="card-text"><span class="krmBilgiSpan">Mentor Olarak Ne Yapabilirsin?  <i class="fa fa-list"></i></span><br />
                                <ul>
                                    <li>Kurum Bilgilerini Güncelleyebilirsin.</li>
                                    <li>Menteelerine özel notlar paylaşabilirsin.</li>
                                    <li>Menteelerine sorular sorup cevaplarını takip edebilirsin.</li>
                                    <li>Menteelerine özel olarak toplantı oluşturabilirsin.</li>
                                    <li>Menteelerini listeleyip takiplerini yapabilirsin</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                {/* // <!-- Edit Kurum Ayarları Modal Begin --> */}
                {/* Kurum Ayarlarını Güncellemede Kullanılacak- Put */}
                <div class="modal fade" id="KurumBilgileriModal" tabindex="-1" role="dialog"
                    aria-labelledby="KurumBilgileriModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="KurumBilgileriModalLabel"><i class="fa fa-edit"></i> Kurum
                               Bilgilerini
                               Güncelle</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="KurumBilgi" class="col-form-label">Kurum Bilgileri *</label>
                                        <textarea class="form-control" id="KurumBilgi" type="text" placeholder="" value=""
                                            name="" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="Hizmet1" class="col-form-label">Hizmet Ekle-1 *</label>
                                        <input type="text" class="form-control" id="Hizmet1" placeholder="" value="" name=""
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="Hizmet2" class="col-form-label">Hizmet Ekle-2 *</label>
                                        <input type="text" class="form-control" id="Hizmet2" placeholder="" value="" name=""
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="Hizmet3" class="col-form-label">Hizmet Ekle-3 *</label>
                                        <input type="text" class="form-control" id="Hizmet3" placeholder="" value="" name=""
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="Hizmet4" class="col-form-label">Hizmet Ekle-4</label>
                                        <input type="text" class="form-control" id="Hizmet4" placeholder="" value=""
                                            name="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="Hizmet5" class="col-form-label">Hizmet Ekle-5</label>
                                        <input type="text" class="form-control" id="Hizmet5" placeholder="" value=""
                                            name="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="Hizmet6" class="col-form-label">Hizmet Ekle-6</label>
                                        <input type="text" class="form-control" id="Hizmet6" placeholder="" value=""
                                            name="" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-edit"></i>
                                       Güncelle</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
