/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Notes extends Component {
    render() {
        return (
            <div>

                {/* Noteların geleceği kısım - Get */}
                <div class="container-fluid content">

                    <h3 class="text-center m-4 headerH3">
                        <span class="font-weight-bold">
                            <i class="fa fa-user-cog"></i> Sayın Mentor</span> Menteeleriniz İçin <span class="font-weight-bold">
                            Notlar <i class="fa fa-check-square"></i>
                        </span> Ekleyin
                    </h3>

                    <div class="d-flex justify-content-end m-3 ">
                        <div class="dropdown m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="NotMenteeSec"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mentee Seç
                            </button>
                            <div class="dropdown-menu" aria-labelledby="NotMenteeSec">
                                <a class="dropdown-item" href="#" selected>Ahmet Duman</a>
                                <a class="dropdown-item" href="#">Ferit Soymaz</a>
                                <a class="dropdown-item" href="#">Ayşecan Atacan</a>
                                <a class="dropdown-item" href="#">Hülya Koçyiğit</a>
                            </div>
                        </div>
                        <div class="m-2">
                            <button type="button" class="btn btn-secondary" data-toggle="modal"
                                data-target="#NotEkleModal"><i class="fa fa-plus"></i> Not Ekle</button>
                        </div>
                    </div>

                    <ul class="stickyul">

                        <li class="stickyli">
                            <div class="stickya">
                                <h2 class="stickyh2">1 Algoritmaları Öğrenme</h2>
                                <p class="stickyp">Algoritmalar bilgisayar programları yazmaya yararlar. Programı bir yemeğe
                                benzetirsek, algoritmaya o yemeğin tarifi diyebiliriz. Kodlama ise tarifin,
                                bilgisayarın anlayacağı bir programlama dili ile hazırlanmasına karşılık geliyor.
                                Kodlamayı hakkıyla yapabilmek için öncelikle algoritma mantığını öğrenmek gerekiyor.
                                </p>
                                <ul class="stickyInfoUl">
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Konu İçin Yardımcı Kaynak </span>
                                        <a class="stickyInfoA" href="https://www.w3schools.com/">Algoritma Analizi</a>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Bitiş Tarihi </span>
                                        <input class="stickyInfoInput" type="datetime" name="" value="24-07-2021"
                                            disabled />
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Güncelle-Sil </span>
                                        <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                            data-target="#NotGuncelleModal"><i class="fa fa-edit"></i></button>
                                        <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal"
                                            data-target="#NotSilModal"><i class="fa fa-times"></i></button>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Gönderilen Mentee </span>
                                        <p class="NotMenteeName">Ahmet Duman
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="stickyli">
                            <div class="stickya">
                                <h2 class="stickyh2">2 Veri Yapıları Neden Önemli ?</h2>
                                <p class="stickyp">Data Structure ve Algoritma konusu yazılım geliştirme sürecinde belki de
                                en önemli yapı taşlarından birisidir. Çoğumuzun teğet geçtiği bu çok önemli konu
                                hakkında bir yazı dizisi hazırlamaya karar verdim. Data Structure And Algorithms In Java
                                , Robert LaFore, kitabının rehberliğinde okuduğum bölümleri sırasıyla sizlerle
                                paylaşacağım.
                                Öncelikle Data Structure ve Algoritma dediğimizde zihnimizde ne canlanmalı? Data
                                Structure ları bilmemizin ve uygulamamızın bize ne gibi katkıları olacak (Amazon,Google
                                ‘da çalışma fırsatı :)
                            </p>
                                <ul class="stickyInfoUl">
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Konu İçin Yardımcı Kaynak </span>
                                        <a class="stickyInfoA" href="#">Algoritma Analizi</a>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Bitiş Tarihi </span>
                                        <input class="stickyInfoInput" type="datetime" name="" value="24-07-2021"
                                            disabled />
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Güncelle-Sil </span>
                                        <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                            data-target="#NotGuncelleModal"><i class="fa fa-edit"></i></button>
                                        <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal"
                                            data-target="#NotSilModal"><i class="fa fa-times"></i></button>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Gönderilen Mentee </span>
                                        <p class="NotMenteeName">Ahmet Duman
                                    </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="stickyli">
                            <div class="stickya">
                                <h2 class="stickyh2">3 Web Programlama Bilgisi Edin</h2>
                                <p class="stickyp">Özel bir web sitesi oluşturmak için ilk etapta HTML, CSS gibi temel ve
                                web tasarım teknolojilerine ihtiyaç duyulur. Tabii ki bu buz dağının görünen yüzüdür.
                                İşte bu kısımlarla sayfa açıldığında yüklenen tasarım, renkler, font ebatları,
                                kullanıcı deneyimi vb. Front-End Developer ilgilenir.

                                Eğer web sitesinde kullanıcı etkileşimi olacak ise üye girişi, form, sayaç, içerik
                                yönetim sistemi vs. bu durumda web programlama devreye girer. Bu kısımla ilgilenen
                                uzmana Back-End Developer denir.

                            </p>
                                <ul class="stickyInfoUl">
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Konu İçin Yardımcı Kaynak </span>
                                        <a class="stickyInfoA" href="#">Algoritma Analizi</a>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Bitiş Tarihi </span>
                                        <input class="stickyInfoInput" type="datetime" name="" value="24-07-2021"
                                            disabled />
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Güncelle-Sil </span>
                                        <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                            data-target="#NotGuncelleModal"><i class="fa fa-edit"></i></button>
                                        <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal"
                                            data-target="#NotSilModal"><i class="fa fa-times"></i></button>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Gönderilen Mentee </span>
                                        <p class="NotMenteeName">Ahmet Duman
                                    </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="stickyli">
                            <div class="stickya">
                                <h2 class="stickyh2">4 Pyhton Nedir?</h2>
                                <p class="stickyp">Python programlama dili veri bilimi, makine öğrenimi, sistem otomasyonu,
                                web ve API geliştirme ve daha fazlası için bir temel yapıdır.
                                1991'den beri Python programlama dili sadece gereksiz programlar için tamamlayıcı bir
                                dil olarak değerlendiriliyordu. Hatta “Automate the Boring Stuff” Türkçe'ye "Sıkıcı
                                Şeyleri Otomatikleştiren" olarak çevirebileceğimiz popüler bir kitap adında bir kitap
                                dahi yayınlanmıştır.
                            </p>
                                <ul class="stickyInfoUl">
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Konu İçin Yardımcı Kaynak </span>
                                        <a class="stickyInfoA" href="#">Algoritma Analizi</a>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Bitiş Tarihi </span>
                                        <input class="stickyInfoInput" type="datetime" name="" value="24-07-2021"
                                            disabled />
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Güncelle-Sil </span>
                                        <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                            data-target="#NotGuncelleModal"><i class="fa fa-edit"></i></button>
                                        <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal"
                                            data-target="#NotSilModal"><i class="fa fa-times"></i></button>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Gönderilen Mentee </span>
                                        <p class="NotMenteeName">Ahmet Duman
                                    </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="stickyli">
                            <div class="stickya">
                                <h2 class="stickyh2">5 Algoritmaları Analizi</h2>
                                <p class="stickyp">Algoritmalar bilgisayar programları yazmaya yararlar. Programı bir yemeğe
                                benzetirsek, algoritmaya o yemeğin tarifi diyebiliriz. Kodlama ise tarifin,
                                bilgisayarın anlayacağı bir programlama dili ile hazırlanmasına karşılık geliyor.
                                Kodlamayı hakkıyla yapabilmek için öncelikle algoritma mantığını öğrenmek gerekiyor.
                            </p>
                                <ul class="stickyInfoUl">
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Konu İçin Yardımcı Kaynak </span>
                                        <a class="stickyInfoA" href="#">Algoritma Analizi</a>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Bitiş Tarihi </span>
                                        <input class="stickyInfoInput" type="datetime" name="" value="24-07-2021"
                                            disabled />
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Güncelle-Sil </span>
                                        <button type="button" class="btn btn-secondary m-2 btn-sm" data-toggle="modal"
                                            data-target="#NotGuncelleModal"><i class="fa fa-edit"></i></button>
                                        <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal"
                                            data-target="#NotSilModal"><i class="fa fa-times"></i></button>
                                    </li>
                                    <li class="stickyInfoLi">
                                        <span class="stickyInfoSpan">Gönderilen Mentee </span>
                                        <p class="NotMenteeName">Ahmet Duman
                                    </p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>

                </div>

                {/* <!-- Not Ekle Modal Begin --> */}
                {/* Not ekleme yapılacak post işlemi */}
                <div class="modal fade" id="NotEkleModal" tabindex="-1" role="dialog" aria-labelledby="NotEkleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="NotEkleModalLabel"><i class="fa fa-plus"></i> Not Ekle</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="NotBaslik" class="col-form-label">Not Başlığı *</label>
                                        <input type="text" class="form-control" id="NotBaslik"
                                            placeholder="Not Başlığı Ekleyin." value="" name="" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="NotMesaj" class="col-form-label">Notunu Yaz *</label>
                                        <textarea class="form-control" id="NotMesaj" type="text"
                                            placeholder="Not ya da Bilgilendirici Mesajlar Yazın." value="" name=""
                                            required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="NotMentee" class="col-form-label">Gönderilecek Menteeyi Seçin *</label>
                                        <select name="" id="NotMentee" class="form-control" required>
                                            <option>Ahmet Duran</option>
                                            <option>Ferit Soymaz</option>
                                            <option>Keydi Mentorluk</option>
                                            <option>India</option>
                                            <option>Devtest Mentor</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="NotLink" class="col-form-label">Link Koyun</label>
                                        <input type="text" class="form-control" id="NotLink"
                                            placeholder="Notunuzu Destekleyici Link Bırakın" value="" name="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="NotLinkName" class="col-form-label">Linkinze İsim Verin </label>
                                        <input type="text" class="form-control" id="NotLinkName"
                                            placeholder="Linkinizin Daha Anlaşılır Olması İçin İsim Verin." value=""
                                            name="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="NotDate" class="col-form-label">Notunuz En Son Ne Zamana
                                        Yapılmalı?</label>
                                        <input type="date" class="form-control" id="NotDate" value="" name="" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-plus"></i>
                                        Not Ekle</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Not Ekle Modal End --> */}

                {/* <!-- Not Güncelle Modal Begin --> */}
                {/* Not Güncelleme yapılacak put işlemi */}
                <div class="modal fade" id="NotGuncelleModal" tabindex="-1" role="dialog"
                    aria-labelledby="NotGuncelleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="NotGuncelleModalLabel"><i class="fa fa-edit"></i> Not Güncelle
                            </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="NotBaslik" class="col-form-label">Not Başlığı *</label>
                                        <input type="text" class="form-control" id="NotBaslik"
                                            placeholder="Not Başlığı Ekleyin." value="" name="" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="NotMesaj" class="col-form-label">Notunu Yaz *</label>
                                        <textarea class="form-control" id="NotMesaj" type="text"
                                            placeholder="Not ya da Bilgilendirici Mesajlar Yazın." value="" name=""
                                            required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="NotMentee" class="col-form-label">Gönderilecek Menteeyi Seçin *</label>
                                        <select name="" id="NotMentee" class="form-control" required>
                                            <option>Ahmet Duran</option>
                                            <option>Ferit Soymaz</option>
                                            <option>Keydi Mentorluk</option>
                                            <option>India</option>
                                            <option>Devtest Mentor</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="NotLink" class="col-form-label">Link Koyun</label>
                                        <input type="text" class="form-control" id="NotLink"
                                            placeholder="Notunuzu Destekleyici Link Bırakın" value="" name="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="NotLinkName" class="col-form-label">Linkinze İsim Verin </label>
                                        <input type="text" class="form-control" id="NotLinkName"
                                            placeholder="Linkinizin Daha Anlaşılır Olması İçin İsim Verin." value=""
                                            name="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="NotDate" class="col-form-label">Notunuz En Son Ne Zamana
                                        Yapılmalı?</label>
                                        <input type="date" class="form-control" id="NotDate" value="" name="" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                            class="fa fa-times"></i> Kapat</button>
                                        <button type="submit" class="btn submitModal"><i class="fa fa-edit"></i>
                                        Not Güncelle</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Not Güncelle Modal End --> */}

                {/* <!-- Not Sil Modal Begin --> */}
                {/* İsactive false yap */}
                <div class="modal fade" id="NotSilModal" tabindex="-1" role="dialog" aria-labelledby="NotSilModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="NotSilModalLabel">Emin Misin?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Bu Notu Silmek İstediğine Emin Misin?
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn closeModal" data-dismiss="modal"><i
                                    class="fa fa-times"></i> Kapat</button>
                                <button type="button" class="btn submitModal"><i class="fa fa-check"></i> Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Not Sil Modal End --> */}

            </div>
        )
    }
}
