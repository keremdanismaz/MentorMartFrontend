import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userAction";
import * as noteActions from "../../redux/actions/noteActions";
import * as getUserByIdActions from "../../redux/actions/getUserByIdAction";
import * as getNoteByIdActions from "../../redux/actions/getNotesByIdAction";

class Notes extends Component {
    componentDidMount(userId) {
        this.props.actions.getUser(4);
        this.props.actions.getNotes();
        this.props.actions.getUserById(40);
    }
    render() {
        return (

            <div class="container-fluid content">

                <h3 class="text-center m-4 headerH3">
                    <span class="font-weight-bold">
                        <i class="fa fa-user-cog"></i> Sayın Mentee</span> Mentorunzun Sizin İçin <span class="font-weight-bold">
                        Eklediği Notlar <i class="fa fa-check-square"></i>
                    </span>
                </h3>

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