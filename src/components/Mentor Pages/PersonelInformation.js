import React, { Component } from 'react'

export default class PersonelInformation extends Component {
    render() {
        return (
            <div>

                {/* Mentorun Kendi bilgileri buraya gelecek - Get İşlemleri */}
                <div class="container-fluid content">
                    <div class="container">
                        <i class="fa fa-user-cog bilgiicon m-3 "><span> Mentor</span> Kerem DANIŞMAZ</i>
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5>Bilgileriniz</h5>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary btn-sm m-0 " data-toggle="modal"
                                        data-target="#KisiselBilgiModal"><i class="fa fa-edit"></i> Güncelle</button>
                                </div>
                                <h6 class="mt-5">Kurumunuzun Adı</h6>
                                <p>
                                    Keydi Mentorluk Hizmetleri
                            </p>
                                <hr />
                                <h6 class="mt-3">Hakkımda</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos esse unde ducimus
                                cumque natus pariatur voluptates nemo iusto tempore, consequatur doloribus sequi
                                asperiores voluptate quae rem eligendi dignissimos ipsa.
                            </p>
                                <hr />
                                <h6 class="mt-3">Adres</h6>
                                <p>
                                    Konya,Turkey
                            </p>
                                <hr />
                                <h6 class="mt-3">Email Adresi</h6>
                                <p>
                                    <a href="mailto:danismaz2000@gmail.com">danismaz2000@gmail.com</a>
                                </p>
                                <hr />
                                <h6 class="mt-3">Sayaçlar</h6>
                                <p>
                                    <ul class="font-weight-bold">
                                        <li>
                                            <span class="bilgiSpan"> Menteelerimin Sayısı:</span> 10 Mentee
                                </li>
                                        <li>
                                            <span class="bilgiSpan"> Toplantılarımın Sayısı:</span> 220 Toplantı
                                </li>
                                        <li>
                                            <span class="bilgiSpan"> Notlarımın Sayısı:</span> 300 Not
                                </li>
                                        <li>
                                            <span class="bilgiSpan"> Sorularımın Sayısı:</span> 232 Soru
                                </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mentor Kendi bilgilerini güncelleyebilecek - Put İşlemleri */}
                {/* <!-- Edit Bilgilerim Modal Begin --> */}
                <div class="modal fade" id="KisiselBilgiModal" tabindex="-1" role="dialog"
                    aria-labelledby="KisiselBilgiModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="KisiselBilgiModalLabel"><i class="fa fa-edit"></i>
                                Bilgilerinizi Güncelleyin</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="Hakkımda" class="col-form-label">Hakkımda *</label>
                                        <textarea class="form-control" id="Hakkımda" type="text"
                                            placeholder="Kendinizden Bahsedin" value="" name="" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="Adres" class="col-form-label">Adres *</label>
                                        <input type="text" class="form-control" id="Adres" placeholder="Adresinizi Girin"
                                            value="" name="" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="col-form-label">Mail Adresiniz *</label>
                                        <input type="email" class="form-control" id="email" placeholder="Email Adresiniz"
                                            value="" name="" required />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-edit"></i>
                                        Bilgilerimi Güncelle</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Edit Bilgilerim Modal End --> */}

            </div>
        )
    }
}
