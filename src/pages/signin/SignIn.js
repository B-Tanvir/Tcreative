import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGithub,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const SignIn = () => {
    const [filled, setFilled] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const from = location.state?.from?.pathname || "/";
    console.log(email, password)
    const [
        signInWithEmailAndPassword,
        user3,
        loading3,
        error3,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(
        auth
    );

    useEffect(() => {
        if (error && !loading) {
            toast(error?.message)
        }

        if (error2 && !loading2) {
            toast(error2?.message)
        }
    }, [loading, loading2]);

    if (user || user2 || user3) {
        navigate(from)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        if (!password) {
            toast('Enter your password')
            return
        }
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Enter your email to reset password')
        }
    };

    return (
        <div className="w-full mt-6 max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Sign In</h1>
            {
                error3 && <p className={'text-center text-red-500 mt-2'}>{error3?.message}</p>
            }
            <form className="mt-6" onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="username"
                           className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" required
                           className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password"
                               className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                    </div>

                    <input onBlur={(e) => setPassword(e.target.value)}
                        type="password"
                           className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div className="mt-6">
                    <button type={"submit"}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Sign In
                    </button>
                </div>
            </form>

            <button onClick={resetPassword} className="text-xs mt-3 text-gray-600 dark:text-gray-400 hover:underline">Forget
                Password?</button>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or
                    login with Social Media</a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button onClick={() => signInWithGoogle()} type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

                <button onClick={() => signInWithGithub()}
                   className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z">
                        </path>
                    </svg>
                </button>
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to="/signup"
                                                                                                        className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create
                One</Link></p>
            <ToastContainer/>
        </div>
    );
};

export default SignIn;