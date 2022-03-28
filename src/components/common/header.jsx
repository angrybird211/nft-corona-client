import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ auth }) => {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src="./images/logo-mini.svg" alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="mdi mdi-menu"></span>
                </button>
                <ul className="navbar-nav w-100">
                    <li className="nav-item w-100">
                        <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                            <input type="text" className="form-control" placeholder="Search products" />
                        </form>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown d-none d-lg-block">
                        <a className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-bs-toggle="dropdown" aria-expanded="false" href="/dashboard">+ Create New Art</a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                            <h6 className="p-3 mb-0">Projects</h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="/dashboard">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-file-outline text-primary"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Software Development</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="/dashboard">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-web text-info"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">UI Development</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="/dashboard">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-layers text-danger"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Software Testing</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <p className="p-3 mb-0 text-center">See all projects</p>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/dashboard" data-bs-toggle="dropdown">
                            <i className="mdi mdi-bell"></i>
                            <span className="count bg-danger"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <h6 className="p-3 mb-0">Notifications</h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="/dashboard">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-calendar text-success"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Event today</p>
                                    <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="/dashboard">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-settings text-danger"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Settings</p>
                                    <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="/dashboard">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-link-variant text-warning"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Launch Admin</p>
                                    <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <p className="p-3 mb-0 text-center">See all notifications</p>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <button className="nav-link bg-transparent border-0" id="profileDropdown" href="#" data-bs-toggle="dropdown" onClick={() => setShowProfile(!showProfile)}>
                            <div className="navbar-profile">
                                <img className="img-xs rounded-circle" src={auth.avatar} alt="" />
                                <p className="mb-0 d-none d-sm-block navbar-profile-name">{auth.userName}</p>
                                <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                            </div>
                        </button>

                        <div className={`dropdown-menu dropdown-menu-right navbar-dropdown preview-list ${showProfile ? 'show' : ''}`} aria-labelledby="profileDropdown">
                            <h6 className="p-3 mb-0">Profile</h6>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item preview-item" to="/settings">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-settings text-success"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Settings</p>
                                </div>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item preview-item" to="/login" onClick={() => { localStorage.clear() }}>
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-logout text-danger"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Log out</p>
                                </div>
                            </Link>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-format-line-spacing"></span>
                </button>
            </div>
        </nav >
    )
}

Header.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Header);