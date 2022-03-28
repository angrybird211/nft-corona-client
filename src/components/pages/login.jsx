import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux/action/authActions';

const Login = () => {
    let dispatch = useDispatch();

    const onSubmit = (info) => {
        let userData = { email: info.email, password: window.btoa(info.password) };
        dispatch(loginUser(userData));
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="row w-100 m-0">
                    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                        <div className="card col-lg-4 mx-auto">
                            <div className="card-body px-5 py-5">
                                <h3 className="card-title text-left mb-3">Login</h3>
                                <Formik initialValues={{
                                    email: '',
                                    password: ''
                                }}

                                    onSubmit={onSubmit}>
                                    <Form>
                                        <div className="form-group">
                                            <label>Username or email *</label>
                                            <Field id="email" name="email" placeholder="input your email..." className="form-control p_input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password *</label>
                                            <Field type="password" id="password" name="password" placeholder="input your password..." className="form-control p_input" />
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" /> Remember me <i className="input-helper"></i></label>
                                            </div>
                                            <Link to="/forgot-password" className="forgot-pass">Forgot password</Link>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block enter-btn mb-0">Login</button>
                                        </div>
                                        <p className="sign-up">Don't have an Account?<Link to="/register"> Sign Up</Link></p>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;