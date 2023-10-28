import React from 'react'
import LoginForm from '../components/Forms/LoginForm'
import Navbar from '../components/Navbar/Navbar'
import Layout from '../components/Navbar/Layout'

function LoginPage() {
    return (
        <Layout title='Auth site | Login' content='Login page'>
            <LoginForm />
        </Layout>
    );
}

export default LoginPage
