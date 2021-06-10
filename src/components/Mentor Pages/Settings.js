import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        return (

            // Acount Settings Begin
            <div class="container-fluid content">
                <div class="container">
                    <div class="card m-4">
                        <div class="card-body">
                            <h5><i class="fa fa-user-cog"></i> Hesap Ayarlarını Değiştir</h5>
                            <form class="mt-4">
                                <div class="form-row">
                                    <div class="col form-group">
                                        <input type="text" name="" value="Kerem" class="form-control" required />
                                    </div>
                                    <div class="col form-group">
                                        <input type="text" name="" value="Danışmaz" class="form-control" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <input type="email" name="" value="danismaz2000@gmail.com" class="form-control"
                                        required />
                                </div>

                                <div class="form-group text-right mr-4">
                                    <button type="submit" class="btn btn-secondary"><i class="fa fa-edit"></i>
                                     Güncelle</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card m-4">
                        <div class="card-body">
                            <h5><i class="fa fa-lock"></i> Şifre Değiştir</h5>
                            <form class="mt-4">

                                <div class="form-group">
                                    <input type="email" name="" value="" class="form-control"
                                        placeholder="Eski Şİfreyi Gir" required />
                                </div>

                                <div class="form-row">
                                    <div class="col form-group">
                                        <input type="text" name="" value="" placeholder="Yeni Şİfreyi Gir"
                                            class="form-control" required />
                                    </div>
                                    <div class="col form-group">
                                        <input type="text" name="" value="" placeholder="Yeni Şifreyi Tekrar Gir"
                                            class="form-control" required />
                                    </div>
                                </div>


                                <div class="form-group text-right mr-4">
                                    <button type="submit" class="btn btn-secondary"><i class="fa fa-edit"></i>
                                     Güncelle</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            // Acount Settings End
            
        )
    }
}
