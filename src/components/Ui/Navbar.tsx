import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

const Navbar = () => {

    const history = useHistory();
    const { authState, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut();
        history.replace('/login')        
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <Link
                    className="navbar-brand fs-3"
                    to="/"
                >Asociaciones</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                activeClassName='active'
                                className="nav-link fs-5"
                                to="/marvel"
                            >Marvel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName='active'
                                className="nav-link fs-5"
                                to="/DC"
                            >DC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName='active'
                                className="nav-link fs-5"
                                to="/search"
                            >Search</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <p className='nav-link nav-item text-info fs-5'>{authState.name}</p>
                        <button
                            className="btn btn-outline-success"
                            onClick={handleLogout}
                        >Log out</button>
                    </div>
                </div>

            </div>
        </nav>
    )
};


export default Navbar;