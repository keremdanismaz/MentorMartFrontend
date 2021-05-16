import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        return (

            // Question Begin 
            <div class="container-fluid content">
                
                <h3 class="text-center m-4 headerH3">
                    <span class="font-weight-bold">
                        <i class="fa fa-user-cog"></i>
                    Mentorunuz</span>
                Tarafından Sizin İçin Belirlenen
                <span class="font-weight-bold">
                        Sorular <i class="fa fa-question-circle"></i>
                    </span>
                </h3>

                <div class="container">

                    <div class="card m-5 questionCard">
                        <div class="card-header text-center"><i class="fa fa-question questionIcon"></i>
                        Nereden Başlamalıyız Kısmını Tamamladın mı?</div>
                        <div class="card-body">
                            <form class="text-center card-text">
                                <textarea class="form-control" name="" type="text" value=""
                                    placeholder="Cevabınızı Yazınız" required></textarea>
                                <button class="btn  questionbtn" type="submit"><i class="fa fa-paper-plane"></i>
                                Cevabını Gönder</button>
                            </form>
                        </div>
                    </div>
                    <div class="card m-5 questionCard">
                        <div class="card-header text-center"><i class="fa fa-question questionIcon"></i>
                        Hey Kerem, veri Yapıları Bitti mi?</div>
                        <div class="card-body">
                            <form class="text-center card-text">
                                <textarea class="form-control" name="" type="text" value=""
                                    placeholder="Cevabınızı Yazınız" required></textarea>
                                <button class="btn  questionbtn" type="submit"><i class="fa fa-paper-plane"></i>
                                Cevabını Gönder</button>
                            </form>
                        </div>
                    </div>
                    <div class="card m-5 questionCard">
                        <div class="card-header text-center"><i class="fa fa-question questionIcon"></i>
                        Nereden Başlamalıyız Kısmını Tamamladın mı?</div>
                        <div class="card-body">
                            <form class="text-center card-text">
                                <textarea class="form-control" name="" type="text" value=""
                                    placeholder="Cevabınızı Yazınız" required></textarea>
                                <button class="btn  questionbtn" type="submit"><i class="fa fa-paper-plane"></i>
                                Cevabını Gönder</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            // Question End 

        )
    }
}
