import React, { Children } from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

function Layout({ title, content, children }) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Helmet>
            <Navbar />
            <div className="container mt-5">
                {children}
            </div>
        </>
    );
}

export default Layout;
