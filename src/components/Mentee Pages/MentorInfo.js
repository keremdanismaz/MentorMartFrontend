import React, { Component } from 'react'

export default class MentorInfo extends Component {
    render() {
        return (

            // MentorInfo Begin 
            <div class="container-fluid content">
                <div class="container">
                    <i class="fa fa-user-cog bilgiicon m-3 "><span> Mentor</span> Kerem DANIŞMAZ</i>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5>Mentor Bilgileri</h5>
                            <h6 class="mt-5">Kurum Adı</h6>
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
                                        <span class="bilgiSpan"> Mentee Sayısı:</span> 10 Mentee
                            </li>
                                    <li>
                                        <span class="bilgiSpan"> Toplantı Sayısı:</span> 220 Toplantı
                            </li>
                                    <li>
                                        <span class="bilgiSpan"> Notlarının Sayısı:</span> 300 Not
                            </li>
                                    <li>
                                        <span class="bilgiSpan"> Sorularının Sayısı:</span> 232 Soru
                            </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            // MentorInfo End 

        )
    }
}
