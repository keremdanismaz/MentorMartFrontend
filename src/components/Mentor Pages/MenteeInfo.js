import React, { Component } from 'react'

export default class MenteeInfo extends Component {
    render() {
        return (

            // Mentor kendi menteelerinin bilgilerini burada görecektir.
            <div class="container-fluid content">

                <h3 class="text-center m-4 headerH3">
                    <span class="font-weight-bold">
                        <i class="fa fa-user-cog"></i> Sayın Mentor</span> Menteelerinizi İnceleyin
                </h3>

                <div class="container">
                    <table id="Meentes">
                        <tr>
                            <th><i class="fa fa-envelope-open-text"></i> Email </th>
                            <th><i class="fa fa-signature"></i> İsim </th>
                            <th><i class="fa fa-sign"></i> Soyisim</th>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismaz2000@gmail.com">danismaz2000</a></td>
                            <td>Kerem Danışmaz</td>
                            <td>Danışmaz</td>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismaz2000@gmail.com">danismaz2000</a></td>
                            <td>Christina Berglund</td>
                            <td>Berglund</td>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismaz20sd00@gmail.com">danismasdz2000</a></td>
                            <td>Francisco Chang</td>
                            <td>Chang</td>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismazsada2000@gmail.com">danismsdaz2000</a></td>
                            <td>Roland Mendel</td>
                            <td>Mendel</td>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismaz20sd00@gmail.com">danismaz20sd00</a></td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismaz200sd0@gmail.com">danismaz20sd00</a></td>
                            <td>Philip Cramer</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismaz20sd00@gmail.com">danismaasdz20sad00</a></td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td><a href="mailto:danismaz2sds0@gmail.com">danismaz2as000</a></td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr>
                    </table>
                </div>
            
            </div>
        )
    }
}
