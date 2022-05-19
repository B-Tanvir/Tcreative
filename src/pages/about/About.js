import React from 'react';
import {Link} from "react-router-dom";
import './About.css'
import photo from '../../photos/tanvir1-modified.png'

const About = () => {
    return (

        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Who I am</h2>

                        <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                            Hi I am Tanvir , Web development Student <a className="font-bold text-blue-600 dark:text-blue-400"
                                                                href="https://programming-hero.com" target={"_blank"}>@Programming Hero</a> , I want to be a full stack web devoloper as I started my journey with Programming hero. I want to learn and explore the field of web development with passion for next few months and take it professionally and contribute to some of the open source projects that help people.
                        </p>

                        <div className="flex items-center mt-6 -mx-2">
                            <a className="mx-2" href="https://www.facebook.com/bahauddintanvir1" target={'_blank'} aria-label="Facebook">
                                <svg
                                    className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/>
                                </svg>
                            </a>

                            <a className="mx-2" href="https://www.github.com/b-tanvir" target={'_blank'} aria-label="Github">
                                <svg
                                    className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2 pr-20 pt-12 mx-auto shape">
                        <div className="flex items-center justify-center lg:justify-end">
                            <div className="max-w-lg">
                                <img className="object-cover object-center w-full h-64 rounded-md shadow"
                                     src={photo}
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;