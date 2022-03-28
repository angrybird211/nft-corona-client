import React, { useEffect, useState } from 'react';
import AvatarEditor from '../elements/avatarEditor';
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Form, Field } from 'formik';

import { updateUser } from '../../redux/action/authActions';
import { UpdateSchema } from '../../schema/auth';
import axios from '../../api';

const Settings = ({ auth }) => {
    const [avatarPath, setAvatarPath] = useState(auth.avatar);
    const [user, setUser] = useState({});
    let dispatch = useDispatch();

    useEffect(() => {
        axios.get(`/users/${auth.id}`).then(res => {
            setUser({ ...res.data, password: window.atob(res.data.password) });
            // setAvatarPath(user.avatar);
        })
    }, [auth.id])

    const onSubmit = (info) => {
        console.log("avatar is", avatarPath);
        let userData = {
            id: info.id, email: info.email, password: window.btoa(info.password), firstName: info.firstName, lastName: info.lastName,
            city: info.city, country: info.country, bio: info.bio, walletAddress: info.walletAddress, avatar: avatarPath
        };
        dispatch(updateUser({ id: auth.id, userData: userData }));
    }

    const onChangeAvatar = (src) => {
        console.log("src is", src)
        setAvatarPath(src);
    }

    return (
        <div className="content-wrapper">
            <div className="col-md-6 grid-margin stretch-card mt-3">
                {
                    user.avatar ?
                        <AvatarEditor avatar={user.avatar} onChangeAvatar={onChangeAvatar} />
                        : ""
                }

                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Profile Details</h4>
                        <Formik initialValues={{
                            firstName: user.firstName,
                            lastName: user.lastName,
                            password: window.btoa(user.password),
                            email: user.email,
                            walletAddress: user.walletAddress,
                            bio: user.bio,
                            city: user.city,
                            country: user.country,
                        }}
                            validationSchema={UpdateSchema}
                            onSubmit={onSubmit}>
                            <Form>
                                <div className="form-group row">
                                    <div className="col">
                                        <label htmlFor="fistNmae">First Name</label>
                                        <Field name="firstName" className="form-control" id="firstName" placeholder={user.firstName} />
                                    </div>

                                    <div className="col">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field placeholder={user.lastName} name="lastName" className="form-control" id="lastName" />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">Email</label>
                                        <Field placeholder={user.email} type="email" name="email" className="form-control" id="email" />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="walletAddress">Wallet Address</label>
                                        <Field placeholder={user.walletAddress} name="walletAddress" className="form-control" id="walletAddress" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col">
                                        <label htmlFor="city">City</label>
                                        <Field placeholder={user.city} name="city" className="form-control" id="city" />
                                    </div>

                                    <div className="col">
                                        <label htmlFor="country">Country</label>
                                        <Field placeholder={user.country} name="country" className="form-control" id="country" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <Field type="password" placeholder={user.password} name="password" className="form-control" id="password1" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="bio">Bio Text</label>
                                    <Field placeholder={user.bio} component="textarea" name="bio" className="form-control" id="bio" />
                                </div>

                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                                <button className="btn btn-dark">Cancel</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

Settings.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Settings);