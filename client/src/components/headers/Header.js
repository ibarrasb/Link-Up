import React, {useContext} from 'react';
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [isAdmin] = state.UserAPI.isAdmin


    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/"
    }

    const adminRouter = () => {
        return(
            <div>
            <li><Link to="/">Option 1</Link></li>
            <li><Link to="/">Option 2</Link></li>
            </div>
        )
    }
    const loggedRouter = () => {
        return(
            <div>
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </div>
        )
    }

    return (
    <header>

        <div className='logo'>
            <h1>
                    <Link to="/">{isAdmin ? 'Admin' : ''}</Link>
            </h1>
        </div>

        <ul>
            {isAdmin && adminRouter()}
            
            {
                isLogged ? loggedRouter() :  ''
            } 

        </ul>   
    </header>
    );
}

export default Header;