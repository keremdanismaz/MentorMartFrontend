/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import CorporationInfoImage from '../../images/CorporationInfo.jpg'

export default class CorporationInfo extends Component {
    render() {
        return (
            
            // Corporation Info Page Start
            <div class="container-fluid content">
                <img class="img"
                    src={CorporationInfoImage} alt="responsive-image" />
                <div class="card m-4">
                    <div class="card-header text-center">
                        Keydi Mentorluk Hizmetleri - Kurum Bilgileri
                </div>
                    <div class="card-body">
                        <h5 class="card-title">Kurumumuza Hoş geldin Sayın <span class="krmBilgiSpan">Halil Danışmaz <i
                            class="fa fa-city"></i></span></h5>
                        <p class="card-text">Mentorunuzun Adı: <span class="krmBilgiSpan">Kerem Danışmaz <i
                            class="fa fa-user-cog"></i></span></p>
                        <p class="card-text"><span class="krmBilgiSpan">Kurum Bilgileri
                            <i class="fa fa-info-circle"></i></span><br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eos
                        eligendi odit in pariatur voluptates, libero voluptatibus aperiam provident quam consequatur
                        commodi dicta delectus voluptatem corrupti perspiciatis repellendus modi illum. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Dicta quaerat odio dolore, quisquam ea natus
                        perferendis pariatur alias neque voluptas saepe excepturi non velit est aspernatur sunt
                        libero eaque quia!
                    </p>
                        <p class="card-text"><span class="krmBilgiSpan">Hizmetlerimiz
                            <i class="fa fa-concierge-bell"></i></span><br />
                            <ul>
                                <li>Formalar kısmına bakarak senin için hazırladığım bilgilendirmeleri okuyabilirsin.</li>
                                <li>Toplantıları takip et ve toplantımızı kaçırma!</li>
                                <li>Sorular kısmındaki sorulara cevap ver seni tanımama yardımcı ol.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            // Corporation Info Page End
        )
    }
}
