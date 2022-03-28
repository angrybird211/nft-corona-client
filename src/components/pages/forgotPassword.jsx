import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { resetPassword } from '../../redux/action/authActions';

const ForgotPassword = () => {
    let dispatch = useDispatch();

    const onSubmit = (info) => {
        dispatch(resetPassword({ email: info.email }));
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="row w-100 m-0">
                    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                        <div className="card col-lg-4 mx-auto">
                            <div className="card-body px-5 py-5">
                                <h3 className="card-title text-left mb-3">Reset your password</h3>
                                <Formik initialValues={{
                                    email: ''
                                }}
                                    onSubmit={onSubmit}>
                                    <Form>
                                        <div className="form-group">
                                            <label>Enter your email address so we can reset your password.</label>
                                            <Field id="email" name="email" placeholder="input your email..." className="mt-3 form-control p_input" />
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block enter-btn mb-0">Send</button>
                                        </div>
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

export default ForgotPassword;