import React from 'react';
import session from '../../../photos/photo-session.svg'
import fashion from '../../../photos/fashion-photography.svg'
import product from '../../../photos/product-photography.svg'
import {useNavigate} from "react-router-dom";

const Services = () => {
    const navigate = useNavigate()
    const handleBooking = () => {
        navigate('/checkout')
    };
    return (
        <>
            <div id={'services'} className="py-16 bg-purple-100">
                <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">

                        <div className="bg-white rounded-2xl shadow-xl px-8 pt-12 pb-4 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold text-purple-900">Product Photography</h3>
                                <p className="mb-6">Product photography refers to using specific photography techniques to take accurate and attractive photos of your products.</p>
                            </div>
                            <img src={product} className="w-2/3 ml-auto" alt="illustration" loading="lazy"
                                 width="900" height="600"/>

                            {/*pricing starts*/}
                            <div onClick={handleBooking} className="relative mt2 px-6 py-2 space-y-8 bg-purple-100 rounded-3xl cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <p className="text-xl text-gray-700 font-semibold">Proceed Booking </p>
                                    <div className="relative flex justify-around">
                                        <div className="flex">
                                            <span className="-ml-6 text-xl text-sky-500 font-bold">$</span>
                                            <span className="text-4xl text-gray-800 font-bold leading-0">190</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*    pricing end   */}
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl px-8 pt-12 pb-4 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold text-purple-900">Session Photography</h3>
                                <p className="mb-6">An occasion arranged to take photographs of important occasions. Make your events memorable.</p>
                            </div>
                            <img src={session} className="w-2/3 ml-auto " alt="illustration" loading="lazy"
                                 width="900" height="600"/>

                            {/*pricing starts*/}
                            <div onClick={handleBooking} className="relative mt-2 px-6 py-2 space-y-8 bg-purple-100 rounded-3xl cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <p className="text-xl text-gray-700 font-semibold">Proceed Booking </p>
                                    <div className="relative flex justify-around">
                                        <div className="flex">
                                            <span className="-ml-6 text-xl text-sky-500 font-bold">$</span>
                                            <span className="text-4xl text-gray-800 font-bold leading-0">390</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*    pricing end   */}
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl px-8 pt-12 pb-4 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold text-purple-900">Fashion Photopraphy</h3>
                                <p className="mb-6">Fashion photography is a genre of photography which is devoted to displaying clothing and other fashion items.</p>
                            </div>
                            <img src={fashion} className="w-2/3 ml-auto " alt="illustration" loading="lazy"
                                 width="900" height="600"/>

                            {/*pricing starts*/}
                            <div onClick={handleBooking} className="relative mt-2 px-6 py-2 space-y-8 bg-purple-100 rounded-3xl cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <p className="text-xl text-gray-700 font-semibold">Proceed Booking </p>
                                    <div className="relative flex justify-around">
                                        <div className="flex">
                                            <span className="-ml-6 text-xl text-sky-500 font-bold">$</span>
                                            <span className="text-4xl text-gray-800 font-bold leading-0">340</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*    pricing end   */}
                        </div>
                    </div>
                </div>
            </div>
        </>

);
};

export default Services;