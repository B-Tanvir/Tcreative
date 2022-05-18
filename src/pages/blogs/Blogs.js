import React from 'react';

const Blogs = () => {
    const faqsList = [
        {
            q: "Difference between authorization and authentication?",
            a: "Authentication is process of verification the users credential. Authentication determines whether the users are who they say they are. "
        },
        {
            q: " Why are you using firebase? What other options do you have to implement authentication?",
            a: "I use firebase for mostly authentication and web app deployment. It reduce the development time and it is reliable. Some other options for authentication are - Auth(), MongoDB, Okta."
        },
        {
            q: " What other services does firebase provide other than authentication?",
            a: "Some other services are - Hosting, Web Storage, Google Analytics, Cloud Messaging, Cloud firestore."
        },
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all asked questions, Still confused? feel free to contact me.
                </p>
            </div>
            <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <div
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-700 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default Blogs;