import React from "react";
import './styles.css'
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
    return (
        <div className="pt-16 lg:min-h-screen bg-[#090119] w-full">
            <p className="text-center lg:text-lg text-base uppercase text-pink-700 mb-4  font-bold animate__animated animate__zoomIn animate__slow">Projects</p>
            <h2 class="text-center text-white uppercase font-bold text-2xl md:text-3xl lg:text-[32px] animate__animated animate__zoomIn animate__slow">
                My recent works
            </h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 justify-center items-center lg:px-20 px-2 overflow-hidden w-full pb-24 lg:pb-0">
                <div class="card h-[600px] lg:h-[730px] sm:mb-12 lg:mb-0 animate__animated animate__zoomIn animate__slow">
                    <div class="box shadow-lg shadow-gray-800 border-opacity-60">
                        <div class="p-[5px] lg:text-justify">
                            <div className="rounded-lg overflow-hidden">
                                <img className="lg:h-60 h-36 object-cover object-center w-full" src="https://i.ibb.co/fDbBc6F/screenshot-1.png" alt="blog" />
                                <div className="p-3">
                                    <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB stripe</h2>
                                    <h1 className="title-font text-xl font-bold text-pink-700">OutLight</h1>
                                    <p className="text-sm lg:text-lg mt-1 mb-5 text-white">This is a menufacturer website. In this website implemented a user-friendly responsive landing page and react routing, signup, signout authentication, payment gateway and MongoDB CRUD operation for products add, manage, and make admin system.
                                    </p>
                                    <div className="flex absolute bottom-6">
                                        <a href="https://github.com/arfat132/outlight-client-side" className="mt-1 text-pink-700 text-4xl uppercase"><AiFillGithub /></a>
                                        <a href="https://github.com/arfat132/outlight-server-side" className="mt-1 text-pink-700 text-4xl uppercase ml-3"><AiFillGithub /></a>
                                        <a href="https://outlight-7c319.web.app/" className="mt-1 text-pink-700 text-4xl uppercase ml-3"><FiExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card h-[600px] lg:h-[730px] sm:mb-12 lg:mb-0 animate__animated animate__zoomIn animate__slow">
                    <div class="box shadow-lg shadow-gray-800 border-opacity-60">
                        <div class="p-[5px] lg:text-justify">
                            <div className="rounded-lg overflow-hidden">
                                <img className="lg:h-60 h-36 object-cover object-center w-full" src="https://i.ibb.co/L1WVdpw/screenshot-2.png" alt="blog" />
                                <div className="p-3">
                                    <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB stripe</h2>
                                    <h1 className="title-font text-xl font-bold text-pink-700">StarBelly</h1>
                                    <p className="text-sm lg:text-lg mt-1 mb-5 text-white">This is a restaurant website. In this website implemented a user-friendly responsive landing page and react routing, signup, signout authentication, payment gateway and MongoDB CRUD operation for products add, manage, and make admin system.
                                    </p>
                                    <div className="flex absolute bottom-6">
                                        <a href="https://github.com/arfat132/starbelly-client-side" className="mt-1 text-pink-700 text-4xl uppercase"><AiFillGithub /></a>
                                        <a href="https://github.com/arfat132/starbelly-server-side" className="mt-1 text-pink-700 text-4xl uppercase ml-3"><AiFillGithub /></a>
                                        <a href="https://starbelly-auth.web.app/" className="mt-1 text-pink-700 text-4xl uppercase ml-3"><FiExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card h-[600px] lg:h-[730px] relative sm:mb-12 lg:mb-0 animate__animated animate__zoomIn animate__slow">
                    <div class="box shadow-lg shadow-gray-800 border-opacity-60">
                        <div class="p-[5px] lg:text-justify">
                            <div className="rounded-lg overflow-hidden">
                                <img className="lg:h-60 h-36 w-full object-cover object-center" src="https://i.ibb.co/Np331GY/screenshot-3.png"  alt="blog" />
                                <div className="p-3">
                                    <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Express MongoDB Mongooes</h2>
                                    <h1 className="title-font text-xl font-bold text-pink-700">ToDo App</h1>
                                    <p className="text-sm lg:text-lg mt-1 mb-5 text-white">This is a task management website. In this website implemented a user-friendly responsive landing page and react routing, and MongoDB CRUD operation for products add, edit, and delete task.
                                    </p>
                                    <div className="flex absolute bottom-6">
                                        <a href="https://github.com/arfat132/todoapp-client-side" className="mt-2 text-pink-700 text-4xl uppercase"><AiFillGithub /></a>
                                        <a href="https://github.com/arfat132/todo-server-side" className="mt-2 text-pink-700 text-4xl uppercase ml-3"><AiFillGithub /></a>
                                        <a href="https://todo-app-1245.netlify.app/" className="mt-2 text-pink-700 text-4xl uppercase ml-2"><FiExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card h-[600px] lg:h-[730px] sm:mb-12 lg:mb-0 animate__animated animate__zoomIn animate__slow">
                    <div class="box shadow-lg shadow-gray-800 border-opacity-60">
                        <div class="p-[5px] lg:text-justify">
                            <div className=" rounded-lg overflow-hidden">
                                <img className="lg:h-60 h-36 w-full object-cover object-center" src="https://i.ibb.co/0f5kvw8/Screenshot-1.jpg" alt="blog" />
                                <div className="p-3">
                                    <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                    <h1 className="title-font text-xl font-bold text-pink-700">Quanta</h1>
                                    <p className="text-sm lg:text-lg mt-1 mb-5 text-white">This is a warehouse management website. In this website implemented a user-friendly responsive landing page and react routing, signup, signout authentication method and MongoDB CRUD operation for inventory add, restock, delivery system.
                                    </p>
                                    <div className="flex absolute bottom-6">
                                        <a href="https://github.com/arfat132/quanta-client-side" className="mt-2 text-pink-700 text-4xl uppercase"><AiFillGithub /></a>
                                        <a href="https://github.com/arfat132/quanta-server-side" className="mt-2 text-pink-700 text-4xl uppercase ml-3"><AiFillGithub /></a>
                                        <a href="https://quanta-auth.web.app/" className="mt-2 text-pink-700 text-4xl uppercase ml-3"><FiExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card  h-[600px] lg:h-[730px] relative sm:mb-12 lg:mb-0 animate__animated animate__zoomIn animate__slow">
                    <div class="box shadow-lg shadow-gray-800 border-opacity-60">
                        <div class="p-[5px] lg:text-justify">
                            <div className="rounded-lg overflow-hidden">
                                <img className="lg:h-60 h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                                <div className="p-3">
                                    <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React React Router Tailwind Firebase</h2>
                                    <h1 className="title-font text-xl font-bold text-pink-700">Core Realator</h1>
                                    <p className="text-sm lg:text-lg mt-1 mb-5 text-white">This is a independent service website. In this website implemented a user-friendly responsive landing page and react routing, signup, signout authentication.
                                    </p>
                                    <div className="flex absolute bottom-6">
                                        <a href="https://github.com/arfat132/core-realtors" className="mt-2 text-pink-700 text-4xl uppercase"><AiFillGithub /></a>
                                        <a href="https://core-realtor-auth.web.app/" className="mt-2 text-pink-700 text-4xl uppercase ml-3"><FiExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card h-[600px] lg:h-[730px] relative sm:mb-12 lg:mb-0 animate__animated animate__zoomIn animate__slow">
                    <div class="box shadow-lg shadow-gray-800 border-opacity-60">
                        <div class="p-[5px] lg:text-justify">
                            <div className="  rounded-lg overflow-hidden">
                                <img className="lg:h-60 h-36 w-full object-cover object-center" src="https://i.ibb.co/ygf3p05/Screenshot-1.jpg" alt="blog" />
                                <div className="p-3">
                                    <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">HTML CSS BOOTSTRAP</h2>
                                    <h1 className="title-font text-xl font-bold text-pink-700">Elite convention</h1>
                                    <p className="text-sm lg:text-lg mt-1 mb-5 text-white">This is a wedding convention website. In this website implemented a user-friendly responsive landing page with bootsrap 5, a event packaging section and a frequently asked question section.
                                    </p>
                                    <div className="flex absolute bottom-6">
                                        <a href="https://github.com/arfat132/elite-convention-center" className="mt-2 text-pink-700 text-4xl uppercase"><AiFillGithub /></a>
                                        <a href="https://elite-convention-center.netlify.app/" className="mt-2 text-pink-700 text-4xl uppercase ml-3"><FiExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;