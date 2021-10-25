import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router';
import { AuthContext } from '../../context/auth/AuthContext';
import { useForm } from '../../hooks/useForm';

interface LoginScreenProps extends RouteComponentProps { }

const LoginScreen = (props: LoginScreenProps) => {

    const { history } = props;
    const { signIn } = useContext(AuthContext);
    const { form, onChange } = useForm({ name: '' });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const lastPaht = localStorage.getItem('lastPath') || '/';
        signIn(form.name);
        history.replace(lastPaht)
    }

    return (
        <div className='main-container' style={{backgroundColor: '#212121'}}>
            <header className='header-login-form'>
                <p>Heroes Web App</p>
            </header>

            <main className='form-container'>
                <section>
                    <p className='title-login'>Marvel or DC</p>
                    <p className='subtitle-login'>Discover your favorite heroes.</p>
                </section>

                <section className="mt-2">
                    <form className="flex flex-col" onSubmit={handleLogin}>
                        <input
                            type="text"
                            className='input-login'
                            placeholder="Your name"
                            name='name'
                            value={form.name}
                            onChange={e => onChange('name', e.target.value)}
                        />
                        <button className='btn-login' type='submit'>Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default LoginScreen;