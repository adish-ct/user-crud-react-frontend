import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SignupForm from '../components/Forms/SignupForm'
import Layout from '../components/Navbar/Layout'

function SignupPage() {
    return (
        <Layout title='Auth site | signup' content='Sign up for my auth site'>
            <SignupForm />
        </Layout>
    )
}

export default SignupPage
