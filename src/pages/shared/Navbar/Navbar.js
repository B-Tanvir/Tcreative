import React, {useState} from 'react';
import logo from '../../../photos/cover (1).png'
import {Link} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {signOut} from 'firebase/auth'
import {NavHashLink} from 'react-router-hash-link';

const Navbar = () => {
    const [state, setState] = useState(false)
    const [user, loading, error] = useAuthState(auth);

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Services", path: "/#services" },
        { title: "Blogs", path: "/blogs" },
        { title: "About", path: "/about" }
    ]
    return (
        <header>
            <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between">
                    <Link to="/">
                        <img
                            src={logo}
                            width={120}
                            height={50}
                            alt="Logo"
                        />
                    </Link>
                    <button className="text-gray-500 outline-none md:hidden"
                            onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? '' : 'hidden'}`}>
                    <li className="order-2 pb-5 md:pb-0">
                        {
                            user?
                                <button onClick={() => signOut(auth)} className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline">Sign Out</button>
                                :
                                <Link to="/signin" className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline">
                                    Sign In
                                </Link>
                        }
                    </li>
                    <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-900 hover:text-indigo-600" key={idx}>
                                    <NavHashLink smooth to={item.path}>{item.title}</NavHashLink>
                                </li>
                            ))
                        }
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;