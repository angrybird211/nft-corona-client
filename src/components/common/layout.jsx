import React from 'react';
import Footer from './footer';

import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    return (
        <div className="container-scroller">
            <Sidebar />

            <div className="container-fluid page-body-wrapper">
                <Header />

                <div className="main-panel">
                    {children}

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout;