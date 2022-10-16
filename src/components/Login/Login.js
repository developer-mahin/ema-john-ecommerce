import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form__container'>
            <h3 className='form__title'>Login</h3>
            <form className='form'>
                <div className='form__control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' required />
                </div>
                <div className='form__control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter your password' required />
                </div>
                <input className='submit__btn' type="submit" value="Login" />
            </form>
            <p >New to Ema-john? <Link to='/register'>Create New Account</Link></p>
            <div className='google__link'>
                <div className='google__logo'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' alt="" />
                </div>
                <div>
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;