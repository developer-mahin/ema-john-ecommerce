import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='header__nav'>
            <div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='header__link'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <Link onClick={logOut}>Log Out</Link> :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                }
            </div>
        </div >
    );
};

export default Header;