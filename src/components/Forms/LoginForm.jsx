import React from 'react'
import '../Forms/LoginForm.css'

function LoginForm() {
    return (
        <div>
            <form action="" className=''>
                <div className="login-form">
                    <input type="text" placeholder='name' className='' />
                    <input type="password" placeholder='password' />
                    <button type='submit'>Login</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
