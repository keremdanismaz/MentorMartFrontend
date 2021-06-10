import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as roleActions from "../../redux/actions/roleActions";
import '../../css/Home Page/HomePage.css';

class Role extends Component {

    componentDidMount() {
        this.props.actions.getRoles();
    }

    render() {
        return (
            <section class="role">
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Rolün İsmi</th>
                                <th scope="col">Aktif Mi ?</th>
                                <th scope="col">Oluşturulma Zamanı</th>
                                <th scope="col">Güncellenme Zamanı</th>
                                <th scope="col">Role Tipi Ne ?</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.roles.map(role => (
                                <tr key={role.id}>
                                    <th scope="row">{role.id}</th>
                                    <td>{role.name}</td>
                                    <td>{role.isActive.toString()}</td>
                                    <td>{role.createdDate}</td>
                                    <td>{role.updatedTime}</td>
                                    <td>{role.roleType}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        roles: state.roleListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getRoles: bindActionCreators(roleActions.getRoles, dispatch),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);