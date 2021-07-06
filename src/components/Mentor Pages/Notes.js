/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios';
import alertify from "alertifyjs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userAction";
import * as noteActions from "../../redux/actions/noteActions";
import * as getUserByIdActions from "../../redux/actions/getUserByIdAction";
import * as getNoteByIdActions from "../../redux/actions/getNotesByIdAction";


// #notun güncellemesi ve silinmesi kaldı
class Notes extends Component {

    componentDidMount(userId) {
        this.props.actions.getUser(4);
        this.props.actions.getNotes();
        this.props.actions.getUserById(40);
    }

    constructor(props) {
        super(props);
        this.state = {
            // mentorId: '',
            menteeId: '',
            noteTitle: '',
            noteDescription: '',
            noteLinkName: '',
            noteLink: '',
            noteEndingTime: '',
            //userId: ''
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {

        e.preventDefault();

        console.log(this.state)
        axios.post("https://localhost:44385/AddNote", this.state)
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log(error)
            })
        alertify
            .alert("Notunuz Başarıyla Eklenmiştir.", function () {
                alertify.warning('Sayın Mentor Notunuzu Başarıyla Eklediniz. ');
            });
    }

    GetNoteById = (noteId) => {
        this.props.actions.getNoteById(noteId)
    }

    render() {
        const { noteTitle, noteDescription, noteLinkName, noteLink, noteEndingTime } = this.state
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
                        {/* <div class="dropdown m-2">

                            <form onSubmit={this.submitHandler}>
                                <select
                                    name="menteeId"
                                    onChange={this.changeHandler}
                                    class="btn btn-secondary"
                                    required>
                                    <option class="dropdown-menu" value="" selected disabled hidden>Mentee Seç</option>
                                    {this.props.users.map(user => (
                                        <option style={{ backgroundColor: "#fff", color: "#000" }} value={user.id} key={user.id}>{user.firstName}</option>
                                    ))}
                                </select>
                            </form>

                        </div> */}
                        <div class="m-2">
                            <button type="button" class="btn btn-secondary" data-toggle="modal"
                                data-target="#NotEkleModal"><i class="fa fa-plus"></i> Not Ekle</button>
                        </div>
                    </div>

                    <ul class="stickyul">

                        {this.props.notes.map(note => (

                            < li class="stickyli" >
                                <div class="stickya">
                                    <h2 class="stickyh2">{note.noteTitle}</h2>
                                    <p class="stickyp">{note.noteDescription}</p>
                                    <ul class="stickyInfoUl">
                                        <li class="stickyInfoLi">
                                            <span class="stickyInfoSpan">Konu İçin Yardımcı Kaynak </span>
                                            <a class="stickyInfoA" href={note.noteLink}>{note.noteLinkName}</a>
                                        </li>
                                        <li class="stickyInfoLi">
                                            <span class="stickyInfoSpan">Bitiş Tarihi </span>
                                            <input class="stickyInfoInput" type="datetime" name="" value={note.noteEndingTime}
                                                disabled />
                                        </li>
                                        <li class="stickyInfoLi">
                                            <span class="stickyInfoSpan">Güncelle-Sil </span>

                                            <button
                                                type="button"
                                                class="btn btn-secondary m-2 btn-sm"
                                                data-toggle="modal"
                                                onClick={() => this.GetNoteById(note.Id)}
                                                data-target="#NotGuncelleModal">
                                                <i class="fa fa-edit"></i>
                                            </button>

                                            <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal"
                                                data-target="#NotSilModal"><i class="fa fa-times"></i></button>
                                        </li>
                                        <li class="stickyInfoLi">
                                            <span class="stickyInfoSpan">Gönderilen Mentee </span>
                                            <p class="NotMenteeName" >
                                                {this.props.getUserByIds.map(note => (<div>{note.firstName + " " + note.lastName}</div>))}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        ))}

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

                                <form onSubmit={this.submitHandler}>

                                    <div class="form-group">
                                        <label htmlFor="NotBaslik" class="col-form-label">Not Başlığı *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="NotBaslik"
                                            placeholder="Not Başlığı Ekleyin."
                                            value={noteTitle}
                                            onChange={this.changeHandler}
                                            name="noteTitle"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotMesaj" class="col-form-label">Notunu Yaz *</label>
                                        <textarea
                                            class="form-control"
                                            id="NotMesaj"
                                            type="text"
                                            placeholder="Not ya da Bilgilendirici Mesajlar Yazın."
                                            value={noteDescription}
                                            onChange={this.changeHandler}
                                            name="noteDescription"
                                            required
                                        ></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotMentee" class="col-form-label">Gönderilecek Menteeyi Seçin *</label>
                                        <select
                                            name="menteeId"
                                            onChange={this.changeHandler}
                                            class="form-control"
                                            required>
                                            <option value="" selected disabled hidden>Notu Kime Göndermek İstersiniz? *</option>
                                            {this.props.users.map(user => (
                                                <option value={user.id} key={user.id}>{user.firstName}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotLink" class="col-form-label">Link Koyun *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="NotLink"
                                            placeholder="Notunuzu Destekleyici Link Bırakın*"
                                            value={noteLink}
                                            onChange={this.changeHandler}
                                            name="noteLink"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotLinkName" class="col-form-label">Linkinze İsim Verin *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="NotLinkName"
                                            placeholder="Linkinizin Daha Anlaşılır Olması İçin İsim Verin."
                                            value={noteLinkName}
                                            onChange={this.changeHandler}
                                            name="noteLinkName"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotDate" class="col-form-label">Notunuz En Son Ne Zamana Yapılmalı? *</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                            id="NotDate"
                                            value={noteEndingTime}
                                            onChange={this.changeHandler}
                                            name="noteEndingTime"
                                            required
                                        />
                                    </div>

                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn closeModal"
                                            data-dismiss="modal">
                                            <i class="fa fa-times"></i> Kapat</button>

                                        <button
                                            type="submit"
                                            class="btn submitModal">
                                            <i class="fa fa-plus"></i> Not Ekle</button>
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

                                <form onSubmit={this.submitHandler}>
                                                
                                    <div class="form-group">
                                        <label htmlFor="NotBaslik" class="col-form-label">Not Başlığı *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="NotBaslik"
                                            placeholder="Not Başlığı Ekleyin."
                                            value={noteTitle}
                                            onChange={this.changeHandler}
                                            name="noteTitle"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotMesaj" class="col-form-label">Notunu Yaz *</label>
                                        <textarea
                                            class="form-control"
                                            id="NotMesaj"
                                            type="text"
                                            placeholder="Not ya da Bilgilendirici Mesajlar Yazın."
                                            value={noteDescription}
                                            onChange={this.changeHandler}
                                            name="noteDescription"
                                            required
                                        ></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotMentee" class="col-form-label">Gönderilecek Menteeyi Seçin *</label>
                                        <select
                                            name="menteeId"
                                            onChange={this.changeHandler}
                                            class="form-control"
                                            required>
                                            <option value="" selected disabled hidden>Notu Kime Göndermek İstersiniz? *</option>
                                            {this.props.users.map(user => (
                                                <option value={user.id} key={user.id}>{user.firstName}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotLink" class="col-form-label">Link Koyun *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="NotLink"
                                            placeholder="Notunuzu Destekleyici Link Bırakın*"
                                            value={noteLink}
                                            onChange={this.changeHandler}
                                            name="noteLink"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotLinkName" class="col-form-label">Linkinze İsim Verin *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="NotLinkName"
                                            placeholder="Linkinizin Daha Anlaşılır Olması İçin İsim Verin."
                                            value={noteLinkName}
                                            onChange={this.changeHandler}
                                            name="noteLinkName"
                                            required
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="NotDate" class="col-form-label">Notunuz En Son Ne Zamana Yapılmalı? *</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                            id="NotDate"
                                            value={noteEndingTime}
                                            onChange={this.changeHandler}
                                            name="noteEndingTime"
                                            required
                                        />
                                    </div>

                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn closeModal"
                                            data-dismiss="modal">
                                            <i class="fa fa-times"></i> Kapat</button>

                                        <button
                                            type="submit"
                                            class="btn submitModal">
                                            <i class="fa fa-edit"></i> Notu Güncelle</button>
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

            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userListReducer,
        notes: state.noteListReducer,
        getUserByIds: state.getUserByIdListReducer,
        getNoteByIds: state.getNoteByIdListReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getUser: bindActionCreators(userActions.getUser, dispatch),
            getUserById: bindActionCreators(getUserByIdActions.getUserById, dispatch),
            getNotes: bindActionCreators(noteActions.getNotes, dispatch),
            getNoteById: bindActionCreators(getNoteByIdActions.getNoteById, dispatch),

        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);