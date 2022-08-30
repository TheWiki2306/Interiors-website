import React from 'react'

const Account = () => {
    return (
        <div className="container account__container">
            <h3>Create your Account</h3>
            <div className="inputs">
                <input type="text" placeholder='Your Firstname' />
                <input type="text" placeholder='Your Surname' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm password' />

            </div>
            <small>Already have an account? <a href="">Sign in</a></small>
        </div>
    )
}

export default Account;
