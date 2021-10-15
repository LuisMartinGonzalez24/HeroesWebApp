import React, { useState, useContext } from 'react'
import { RouteComponentProps } from 'react-router';
import { AuthContext } from '../../context/auth/AuthContext';
import '../../theme/LoginScreenStyle.css';

interface LoginScreenProps extends RouteComponentProps { }

const LoginScreen = (props: LoginScreenProps) => {

    const { history } = props;
    const { signIn } = useContext(AuthContext)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const lastPaht = localStorage.getItem('lastPath') || '/';

        signIn();
        history.replace(lastPaht)
    }

    return (

        <div className='main-container'>
            <header className='header-login-form'>
                <p>Heroes Web App</p>
            </header>

            <main className='form-container'>
                <section>
                    <p className="font-bold text-2xl text-purple-700">Marvel or DC</p>
                    <p className="text-gray-400 pt-2">Discover your favorite heroes.</p>
                </section>

                <section className="mt-2">
                    <form className="flex flex-col" onSubmit={handleLogin}>

                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 my-5 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your name"/>

                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300" type="submit">Sign In</button>
                    </form>
                </section>
            </main>
        </div>

    )
}

export default LoginScreen;