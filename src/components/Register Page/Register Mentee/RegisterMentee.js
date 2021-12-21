import React, { Component } from 'react'
import '../../../css/Register/Register.css';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as corporationActions from "../../../redux/actions/corporationAction";

import axios from 'axios';

import alertify from "alertifyjs";

class RegisterMentee extends Component {

    componentDidMount() {
       // this.props.actions.getCorporation();
    }

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mail: '',
            password: '',
            corporationId: '',
            error: '',
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        this.setState({ error: '' })
        e.preventDefault();
        if (this.state.password.length > 6) {
            console.log(this.state)
            axios.post("https://localhost:44385/RegisterMentee", this.state)
                .then(response => {
                    console.log(response)

                })
                .catch(error => {
                    console.log(error)
                })
            alertify
                .alert(this.state.firstName+" "+this.state.lastName+" Başarıyla Eklenmiştir.", function () {
                    alertify.warning('Lütfen Giriş Yapın! ');
                });
        }
        else {
            this.setState({ error: "Şifreniz 6 karekterden az olamaz!" })
        }

    }

    render() {
        const { firstName, lastName, mail, password, error } = this.state
        
        return (
            <div class="container mt-5" id="registermentee">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <header class="card-header">
                                <h4 class="card-title mt-2 text-center"><Link to="/"><img class="img-fluid img-res"
                                    src="https://mashatu.com/wp-content/uploads/2014/07/MashatuIcons-76.png"
                                    alt="logo" /></Link> Mentee Olarak Kayıt Olun</h4>
                            </header>
                            <article class="card-body">

                                <form onSubmit={this.submitHandler}>

                                    <div class="form-group">
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={firstName}
                                            onChange={this.changeHandler}
                                            class="form-control"
                                            placeholder="Ad*"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={lastName}
                                            onChange={this.changeHandler}
                                            class="form-control"
                                            placeholder="Soyad*"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <input
                                            type="email"
                                            name="mail"
                                            value={mail}
                                            onChange={this.changeHandler}
                                            class="form-control"
                                            placeholder="Mail Adresi*"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <select
                                            name="coprorationId"
                                            onChange={this.changeHandler}
                                            class="form-control"
                                            required>
                                            <option value="" selected disabled hidden>Menteelik Almak İstediğiniz Kurum*</option>
                                            {this.props.corporations.map(corporation => (
                                                <option value={corporation.id} key={corporation.id}>{corporation.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.changeHandler}
                                            class="form-control"
                                            placeholder="Şifre Oluştur En az 6 karakter*"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <button
                                            type="submit"
                                            class="btn btn-block">
                                            <i class="fa fa-registered"></i>
                                            Mentee Olarak Kayıt Ol
                                        </button>
                                    </div>
                                   

                                </form>

                                {this.state.error.length > 5 ?
                                    <div class="text-center alert alert-danger" role="alert">
                                        {error}
                                    </div> :
                                    <div />
                                }
                            </article>
                            <div class="border-top card-body text-center">Zaten Hesabınız Var mı?
                            <Link to="/Login" class="AgainLogin"> <i class="fa fa-sign-in-alt"></i> Giriş Yap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        corporations: state.corporationListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCorporation: bindActionCreators(corporationActions.getCorporation, dispatch),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterMentee);