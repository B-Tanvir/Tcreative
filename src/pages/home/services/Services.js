import React from 'react';
import session from '../../../photos/photo-session.svg'
import fashion from '../../../photos/fashion-photography.svg'
import product from '../../../photos/product-photography.svg'

const Services = () => {
    return (
        <>
            <div className="py-16 bg-purple-100">
                <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                        <div className="bg-white rounded-2xl shadow-xl px-8 pt-12 pb-4 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold text-purple-900">Fashion Photopraphy</h3>
                                <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,</p>
                                <a href="#" className="block font-medium text-purple-600">Know more</a>
                            </div>
                            <img src={fashion} className="w-2/3 ml-auto -mb-12" alt="illustration"
                                 loading="lazy" width="900" height="600"/>

                            {/*pricing starts*/}
                            <div className="relative mt-2 px-6 py-2 space-y-8 bg-purple-100 rounded-3xl">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl text-gray-700 font-semibold">Price </h5>
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
                                <h3 className="text-2xl font-semibold text-purple-900">Product Photography</h3>
                                <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,.</p>
                                <a href="#" className="block font-medium text-purple-600">Know more</a>
                            </div>
                            <img src={product} className="w-2/3 ml-auto" alt="illustration" loading="lazy"
                                 width="900" height="600"/>

                            {/*pricing starts*/}
                            <div className="relative mt2 px-6 py-2 space-y-8 bg-purple-100 rounded-3xl">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl text-gray-700 font-semibold">Price </h5>
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
                                <h3 className="text-2xl font-semibold text-purple-900">Photography Session</h3>
                                <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum.</p>
                                <a href="#" className="block font-medium text-purple-600">Know more</a>
                            </div>
                            <img src={session} className="w-2/3 ml-auto " alt="illustration" loading="lazy"
                                 width="900" height="600"/>

                            {/*pricing starts*/}
                            <div className="relative mt-2 px-6 py-2 space-y-8 bg-purple-100 rounded-3xl">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl text-gray-700 font-semibold">Price </h5>
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
                    </div>
                </div>
            </div>
        </>

);
};

export default Services;