import React from 'react';

import PieChart from '../elements/pieChart';

const Dashboard = props => {
    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Transaction History</h4>
                            <PieChart />
                        </div>
                    </div>
                </div>
                <div className="col-md-8 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-row justify-content-between">
                                <h4 className="card-title mb-1">Open Projects</h4>
                                <p className="text-muted mb-1">Your data status</p>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="preview-list">
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-primary">
                                                    <i className="mdi mdi-file-document"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">Admin dashboard design</h6>
                                                    <p className="text-muted mb-0">Broadcast web app mockup</p>
                                                </div>
                                                <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">15 minutes ago</p>
                                                    <p className="text-muted mb-0">30 tasks, 5 issues </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-success">
                                                    <i className="mdi mdi-cloud-download"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">Wordpress Development</h6>
                                                    <p className="text-muted mb-0">Upload new design</p>
                                                </div>
                                                <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">1 hour ago</p>
                                                    <p className="text-muted mb-0">23 tasks, 5 issues </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-info">
                                                    <i className="mdi mdi-clock"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">Project meeting</h6>
                                                    <p className="text-muted mb-0">New project discussion</p>
                                                </div>
                                                <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">35 minutes ago</p>
                                                    <p className="text-muted mb-0">15 tasks, 2 issues</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-danger">
                                                    <i className="mdi mdi-email-open"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">Broadcast Mail</h6>
                                                    <p className="text-muted mb-0">Sent release details to team</p>
                                                </div>
                                                <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">55 minutes ago</p>
                                                    <p className="text-muted mb-0">35 tasks, 7 issues </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-warning">
                                                    <i className="mdi mdi-chart-pie"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">UI Design</h6>
                                                    <p className="text-muted mb-0">New application planning</p>
                                                </div>
                                                <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">50 minutes ago</p>
                                                    <p className="text-muted mb-0">27 tasks, 4 issues </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h5>Commission</h5>
                            <div className="row">
                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                        <h2 className="mb-0">$32123</h2>
                                        <p className="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                                    </div>
                                    <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
                                </div>
                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                    <i className="icon-lg mdi mdi-codepen text-primary ms-auto"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h5>Sales</h5>
                            <div className="row">
                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                        <h2 className="mb-0">$45850</h2>
                                        <p className="text-success ms-2 mb-0 font-weight-medium">+8.3%</p>
                                    </div>
                                    <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6>
                                </div>
                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                    <i className="icon-lg mdi mdi-wallet-travel text-danger ms-auto"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h5>Transfers</h5>
                            <div className="row">
                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                        <h2 className="mb-0">$2039</h2>
                                        <p className="text-danger ms-2 mb-0 font-weight-medium">-2.1% </p>
                                    </div>
                                    <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>
                                </div>
                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                    <i className="icon-lg mdi mdi-monitor text-success ms-auto"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Artwork Sales</h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check form-check-muted m-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </th>
                                            <th> Artwork Thumb </th>
                                            <th> Artwork Name </th>
                                            <th> Previous Owner </th>
                                            <th> Current Owner </th>
                                            <th> Price Sold </th>
                                            <th> Date </th>
                                            <th> Payment Status </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-muted m-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src="./images/faces/face1.jpg" alt="avatar" />
                                            </td>
                                            <td> Art - 1 </td>
                                            <td> Peter Grill </td>
                                            <td> Henry Klein </td>
                                            <td> 0.02 Ether </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className="badge badge-outline-success">Paypal</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-muted m-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src="./images/faces/face2.jpg" alt="avatar" />
                                            </td>
                                            <td> Art - 2 </td>
                                            <td> Peter Grill </td>
                                            <td> Tomas Petric </td>
                                            <td> 0.01 Ether </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className="badge badge-outline-warning">Stripe</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-muted m-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src="./images/faces/face5.jpg" alt="avatar" />
                                            </td>
                                            <td> Art - 3 </td>
                                            <td> Lucy Abbott </td>
                                            <td> Henry Klein </td>
                                            <td> 0.04 Ether </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className="badge badge-outline-success">Paypal</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-muted m-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src="./images/faces/face1.jpg" alt="avatar" />
                                            </td>
                                            <td> Art - 1 </td>
                                            <td> Peter Grill </td>
                                            <td> Henry Klein </td>
                                            <td> 0.02 Ether </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className="badge badge-outline-success">Paypal</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-muted m-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src="./images/faces/face2.jpg" alt="avatar" />
                                            </td>
                                            <td> Art - 2 </td>
                                            <td> Peter Grill </td>
                                            <td> Tomas Petric </td>
                                            <td> 0.01 Ether </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className="badge badge-outline-warning">Stripe</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;