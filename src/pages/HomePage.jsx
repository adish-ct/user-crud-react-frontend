import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../components/Api/Api';


function HomePage() {

    const [data, setData] = useState('');

    const fetchTempData = async () => {

        const res = await axios.get(`${BACKEND_BASE_URL}/api/users/data/`)
        console.log(res.data);
        setData(res.data)
    }
    useEffect(() => {
        fetchTempData();
    }, [])

    return (
        <div>
            <div className="">
                <Navbar />
                {typeof data === 'object' ? (
                    <p>{data.data}</p>
                ) : (
                    <p>{data}</p>
                )}
            </div>
        </div>
    )
}

export default HomePage
