import React, { useState } from "react";
import PropTypes from "prop-types";

import axios from "../../api";

const UserList = ({ user }) => {
    const [isApproveOpen, setOpenAprrove] = useState(false);
    const [isRoleOpen, setOpenRole] = useState(false);
    const [isApproved, setApproveStatus] = useState(user.approved);
    const [role, setRole] = useState(user.role);

    const toggleApproveDropdown = () => {
        setOpenAprrove(!isApproveOpen);
    }

    const toggleApproveState = (status) => {
        setApproveStatus(status);
        setOpenAprrove(false);
    }

    const toggleRoleDropdown = () => {
        setOpenRole(!isRoleOpen);
    }

    const setUserRole = (status) => {
        setRole(status);
        setOpenRole(false);
    }

    const updateUserInfo = () => {
        // console.log("user is", user._id);
        // dispatch(updateUser({ id: user._id, userData: { ...user, approved: isApproved, role: role } }));
        axios.put(`/users/${user._id}`, { ...user, approved: isApproved, role: role })
            .then(res => {
                return res;
                // window.location.href = "./login";
            })
            .catch(err => { alert(err.response.data.msg) })
    }

    return (
        <tr className="user-list">
            <td>
                <img src={user.avatar} alt="avatar" />
                <span className="ps-2">{`${user.firstName} ${user.lastName}`}</span>
            </td>
            <td> {user.email} </td>
            <td> {user.city} </td>
            <td> {user.country} </td>
            <td> {user.walletAddress} </td>
            <td>
                <div className="dropdown">
                    <button className="btn btn-outline-success dropdown-toggle" type="button" onClick={toggleRoleDropdown}> {role} </button>
                    <div className={`dropdown-menu ${isRoleOpen ? "show" : ""}`}>
                        <button className="dropdown-item" onClick={() => { setUserRole("admin") }}>Admin</button>
                        <button className="dropdown-item" onClick={() => { setUserRole("customer") }}>Customer</button>
                    </div>
                </div>
            </td>
            <td>
                <div className="dropdown">
                    <button className="btn btn-outline-success dropdown-toggle" type="button" onClick={toggleApproveDropdown}> {isApproved ? "Approved" : "Declined"} </button>
                    <div className={`dropdown-menu ${isApproveOpen ? "show" : ""}`}>
                        <button className="dropdown-item" onClick={() => { toggleApproveState(false) }}>Decline</button>
                        <button className="dropdown-item" onClick={() => { toggleApproveState(true) }}>Approve</button>
                    </div>
                </div>
            </td>
            <td>
                <button type="button" className="btn btn-success btn-md" onClick={updateUserInfo}>Update</button>
            </td>
        </tr>
    )
}

UserList.propTypes = {
    auth: PropTypes.object
};

export default UserList;