import React, {useState} from 'react';
import {useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [
        createUserWithEmailAndPassword,
        user3,
        loading3,
        error3,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (error && !loading) {
            toast(error.message)
        }

        if (error2 && !loading2) {
            toast(error2.message)
        }

        if (error3 && !loading3) {
            toast(error3.message);
        }

    }, [loading, loading2, loading3]);

    if (user || user2 || user3) {
        navigate('/')
    }
    return (
        <div className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4">Sign Up with</p>
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={() => signInWithGoogle()}
                                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path
                                            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                        </path>
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={() => signInWithGithub()}
                                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path
                                            d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z">
                                        </path>
                                    </svg>
                                </button>
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        onClick={() => setAgree(!agree)}
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2"
                                    />
                                    <label className="form-check-label inline-block text-gray-800"
                                           htmlFor="exampleCheck2"
                                    >I agree to terms and conditions</label
                                    >
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="button"
                                    disabled={!agree}
                                    onClick={() => createUserWithEmailAndPassword(email, password)}
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Sign Up
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <Link
                                        to="/signin"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Login</Link
                                    >
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;