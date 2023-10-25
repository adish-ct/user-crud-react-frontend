import React from 'react'
import moduleName from '../Forms/SignupForm.css'

function SignupForm() {
    return (
        <div>
            <form action="" className=''>
                <div className="signup-form">
                    <input type="text" placeholder='name' className='' />
                    <input type="text" placeholder='last name' className='' />
                    <input type="email" placeholder='email' className='' />
                    <input type="password" placeholder='password' />
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
