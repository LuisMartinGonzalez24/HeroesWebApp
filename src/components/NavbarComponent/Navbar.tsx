import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

const Navbar = () => {

    const navigationPaths: { name: string, to: string }[] = [
        { name: 'Marvel', to: '/marvel' },
        { name: 'DC', to: '/dc' },
        { name: 'Search', to: '/search' },
    ];

    const history = useHistory();
    const { authState, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut();
        history.replace('/login')
    }

    return (
        <nav className='bg-gray-900 '>
            <div className='flex px-6 py-3'>

                <div className='flex items-center'>
                    <div>
                        <Link className='text-3xl font-bold text-white' to="/">Asociaciones</Link>
                    </div>
                </div>

                <div className='w-full flex items-center justify-between'>

                    <div className='flex px-2 py-3'>
                        {navigationPaths.map((path, index) => (
                            <NavLink 
                                key={index} 
                                to={path.to}
                                className='text-white font-medium py-1 px-2 text-lg mx-2 rounded-md  hover:bg-gray-700'
                                activeClassName='bg-gray-700'
                            >{path.name}</NavLink>
                        ))}
                    </div>

                    <div className='flex items-center justify-between w-2/12'>
                        <p className='text-white text-lg font-medium'>{authState.name}</p>
                        <button
                            id='btn-login'
                            onClick={handleLogout}
                            className='text-white text-base font-bold rounded-lg bg-blue-900 py-2 px-3 hover:bg-blue-700 transition-colors duration-300'
                        >Log out</button>
                    </div>
                </div>

            </div>
        </nav>
    )
};


export default Navbar;