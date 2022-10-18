import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'




const SignUp = () => {
    const googleProvider = new GoogleAuthProvider()
    const [error, setError] = useState(null)
    const [user, setUser] = useState('')
    const { auth, createUser } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value

        if (password !== confirm) {
            setError('Password did not matched')
            return;
        }
        else if (password.length && confirm.length < 6) {
            setError('You should must use 6 character or more')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Ensure string has one special case letter')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Ensure string has two digits')
            return;
        }
        setError('');

        createUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user);
                form.reset()
            })
            .catch((error) => {
                console.error(error)
            })
    }


    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className='form__container'>
            <h3 className='form__title'>Sign Up</h3>
            <form onSubmit={handleSubmit} className='form'>
                <div className='form__control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' required />
                </div>
                <div className='form__control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter your password' required />
                </div>
                <div className='form__control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Enter Confirm Password' required />
                </div>
                {
                    user?.email && <h4 className='success'>Successfully Registered</h4>
                }
                <span className='error__massage'>{error}</span>
                <input className='submit__btn' type="submit" value="Sign Up" />
            </form>
            <p >Already have an account? <Link to='/login'>Login</Link></p>
            <div onClick={handleGoogle} className='google__link'>
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

export default SignUp;