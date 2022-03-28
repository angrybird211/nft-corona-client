import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../redux/action/authActions';
import { SignupSchema } from '../../schema/auth';

const Register = () => {
    let dispatch = useDispatch();

    const onSubmit = (info) => {
        let userData = { email: info.email, password: window.btoa(info.password), firstName: info.firstName, lastName: info.lastName };
        dispatch(registerUser(userData));
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="row w-100 m-0">
                    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                        <div className="card col-lg-4 mx-auto">
                            <div className="card-body px-5 py-5">
                                <h3 className="card-title text-left mb-3">Register</h3>
                                <Formik initialValues={{
                                    email: '',
                                    password: '',
                                    password2: '',
                                    name: ''
                                }}
                                    validationSchema={SignupSchema}
                                    onSubmit={onSubmit}>
                                    <Form>
                                        <div className="form-group row">
                                            <div className="col">
                                                <label>First Name</label>
                                                <Field id="firstName" name="firstName" className="form-control p_input" />
                                            </div>

                                            <div className="col">
                                                <label>Last Name</label>
                                                <Field id="lastName" name="lastName" className="form-control p_input" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <Field id="email" name="email" className="form-control p_input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field type="password" id="password" name="password" className="form-control p_input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <Field type="password" id="password2" name="password2" className="form-control p_input" />
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block enter-btn mb-0 mt-3">Register</button>
                                        </div>
                                        <p className="sign-up text-center">Already have an Account?<Link to="/login"> Sign In</Link></p>
                                        <p className="terms">By creating an account you are accepting our<Link to="/login"> Terms & Conditions</Link></p>
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

export default Register;