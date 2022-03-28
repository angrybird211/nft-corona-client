import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import axios from '../../api';
import UserList from "../elements/userList";

const Admin = ({ auth }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // dispatch(getUsers());
        axios.get("/users").then(res => {
            setUsers(res.data);
        })
    }, [])

    return (
        <Route
            render={props => auth.isAdmin ? (
                <div className="content-wrapper admin-page">
                    <div className="row ">
                        <div className="col-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Users</h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    {/* <th>
                                                        <div className="form-check form-check-muted m-0">
                                                            <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" />
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                    </th> */}
                                                    <th> Name </th>
                                                    <th> Email </th>
                                                    <th> City </th>
                                                    <th> Country </th>
                                                    <th> Wallet Address </th>
                                                    <th> Role </th>
                                                    <th> Status </th>
                                                    <th style={{ width: "100px" }}></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map((user, index) =>
                                                        <UserList key={`user-${index}`} user={user} />
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) :
                (<Redirect to="/dashboard"></Redirect>)
            } />
    )
}

Admin.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Admin);