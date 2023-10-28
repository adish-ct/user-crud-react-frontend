import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../components/Api/Api';
import Layout from '../components/Navbar/Layout';


function HomePage() {

    // const [data, setData] = useState('');

    // const fetchTempData = async () => {
    // }

    // useEffect(() => {
    //     fetchTempData();
    // }, [])

    return (
        <Layout title='Auth site | Home' content='Home page'>

        </Layout>
    )
}

export default HomePage
