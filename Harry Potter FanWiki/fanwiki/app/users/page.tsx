"use client"
import { useState } from 'react';
import loginHD from '../../images/loginHD.png'
import Image from 'next/image';
import { login, signup } from '@/session-management/actions';
import { useFormState } from 'react-dom';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [loginErrors, loginAction] = useFormState<any, FormData>(login, undefined)
    const [SignupErrors, signupAction] = useFormState<any, FormData>(signup, undefined)

    return (
        <div className='mt-28 md:mt-16'>
            <div className='invisible xl:visible'>
            <Image src={loginHD} alt='Login' quality={100} fill style={{ zIndex: "-1", opacity: "0.8" }} />
            </div>
            <div className="m-8 md:mt-10 md:w-1/4 md:m-auto xl:text-white">
                <div className="container">
                    <h1 className="text-center mb-4">Join The Community</h1>
                    <div className="tabs flex justify-center mb-4">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`tab-button px-4 py-2 rounded-l ${isLogin ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-black'}`}
                        > Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`tab-button px-4 py-2 rounded-r ${!isLogin ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-black'}`}
                        > Signup
                        </button>
                    </div>
                    {isLogin ? (
                        <div id="login-form" className="form">
                            <form action={loginAction}>
                                <div className="mb-4">
                                    <label htmlFor="login-name" className="block text-lg mb-2">Wizard Name</label>
                                    <input id="login-name" name='login-name' type="text" className="w-full px-4 py-2 border rounded text-gray-600" placeholder="Your Wizard Name" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="login-password" className="block text-lg mb-2">Password</label>
                                    <input id="login-password" name='login-password' type="password" className="w-full px-4 py-2 border rounded text-gray-600" placeholder="Your password" />
                                </div>
                                <button type="submit" className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Login</button>
                                {loginErrors?.error && <p>{loginErrors.error}</p>}
                            </form>
                        </div>
                    ) : (
                        <div id="signup-form" className="form">
                            <form action={signupAction}>
                                <div className="mb-4">
                                    <label htmlFor="signup-name" className="block text-lg mb-2">Wizard Name</label>
                                    <input id="signup-name" name='signup-name' type="text" className="w-full px-4 py-2 border rounded text-gray-600" placeholder="Your Wizard Name" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="signup-email" className="block text-lg mb-2">Email</label>
                                    <input id="signup-email" name="signup-email" type="email" className="w-full px-4 py-2 border rounded text-gray-600" placeholder="you@hogwarts.com" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="signup-password" className="block text-lg mb-2">Password</label>
                                    <input id="signup-password" name="signup-password" type="password" className="w-full px-4 py-2 border rounded text-gray-600" placeholder="Your password" />
                                </div>
                                <button type="submit" className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Signup</button>
                                {SignupErrors?.error && <p>{SignupErrors.error}</p>}
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}