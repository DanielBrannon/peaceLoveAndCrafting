import React from 'react';
import './Header.css';
import logo from './PLCLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './../../StateProvider'
import { auth } from '../../firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img src={logo} className='logo' alt='PLC Logo'/>
            </Link>

            <div className='headerSearch'> 
                <input className='headerSearchInput' type='text' />
                <SearchIcon className='searchIcon'/>
                
            </div>
            <div className='headerNav'> 
                <Link to={!user && '/login'}>
                    <div className='signIn' onClick={handleAuthentication}>
                        {user ? `Sign Out` : 'Sign In'}
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className='cart'>
                        <ShoppingBasketIcon />
                        <span className='basketNumber'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
    }

    export default Header