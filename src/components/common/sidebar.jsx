import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Sidebar = ({ auth, ...rest }) => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a className="sidebar-brand brand-logo" href="index.html"><img src="./images/logo.svg" alt="logo" /></a>
                <a className="sidebar-brand brand-logo-mini" href="index.html"><img src="./images/logo-mini.svg" alt="logo" /></a>
            </div>
            <ul className="nav">
                <li className="nav-item nav-category">
                    <span className="nav-link">Navigation</span>
                </li>
                <li className="nav-item menu-items">
                    <Link className="nav-link" to="/dashboard">
                        <span className="menu-icon">
                            <i className="mdi mdi-speedometer"></i>
                        </span>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item menu-items">
                    <Link className="nav-link" to="/my-art">
                        <span className="menu-icon">
                            <i className="mdi mdi-table-large"></i>
                        </span>
                        <span className="menu-title">My Art</span>
                    </Link>
                </li>
                <li className="nav-item menu-items">
                    <Link className="nav-link" to="/history">
                        <span className="menu-icon">
                            <i className="mdi mdi-chart-bar"></i>
                        </span>
                        <span className="menu-title">History</span>
                    </Link>
                </li>
                <li className="nav-item menu-items">
                    {
                        auth.isAdmin ?
                            <Link className="nav-link" data-bs-toggle="collapse" to="/admin" aria-expanded="false" aria-controls="auth">
                                <span className="menu-icon">
                                    <i className="mdi mdi-security"></i>
                                </span>
                                <span className="menu-title">Admin</span>
                            </Link>
                            : ""
                    }
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

Sidebar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Sidebar);