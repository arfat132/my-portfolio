import React from 'react';
import { DiReact } from 'react-icons/di';
import { ImStack } from 'react-icons/im';
import { HiOutlineCode } from 'react-icons/hi';
import { SiWebauthn } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineApi } from 'react-icons/ai';
const Services = () => {
    return (
        <section class="text-white body-font bg-[#090119]">
            <div class="container px-24 py-[112px] mx-auto">
                <p className="text-center leading-relaxed text-base uppercase text-pink-700 font-bold">Services</p>
                <h2 class="text-center text-white mb-6 uppercase font-bold text-[32px]">
                    What services I provide
                </h2>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0">
                        <div className="h-full p-8 rounded-lg shadow-lg shadow-slate-800 border-l-[5px] border-l-pink-700">
                            <div className='flex items-center'>
                                <h1 className='bg-pink-700 px-6 py-2 -ml-12 mr-3'> <CgWebsite className='text-5xl' /></h1>
                                <span className="text-2xl font-bold text-pink-700">Web Development</span>
                            </div>
                            <p className="leading-relaxed mt-5">We printed out the shapes to get an idea of the scale and ensure it wouldn't take over the room or blind you.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0">
                        <div className="h-full p-8 rounded-lg shadow-lg shadow-slate-800 border-l-[5px] border-l-pink-700">
                            <div className='flex items-center'>
                                <h1 className='bg-pink-700 px-6 py-2 -ml-12 mr-3'> <HiOutlineCode className='text-5xl' /></h1>
                                <span className="text-2xl font-bold text-pink-700">Frontend Development</span>
                            </div>
                            <p className="leading-relaxed mt-5">We printed out the shapes to get an idea of the scale and ensure it wouldn't take over the room or blind you.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0">
                        <div className="h-full p-8 rounded-lg shadow-lg shadow-slate-800 border-l-[5px] border-l-pink-700">
                            <div className='flex items-center'>
                                <h1 className='bg-pink-700 px-6 py-2 -ml-12 mr-3'> <DiReact className='text-5xl' /></h1>
                                <span className="text-2xl font-bold text-pink-700">SPA with React</span>
                            </div>
                            <p className="leading-relaxed mt-5">We printed out the shapes to get an idea of the scale and ensure it wouldn't take over the room or blind you.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative">
                        <div className="h-full p-8 rounded-lg shadow-lg shadow-slate-800 border-l-[5px] border-l-pink-700 mt-8">
                            <div className='flex items-center'>
                                <h1 className='bg-pink-700 px-6 py-2 -ml-12 mr-3'> <ImStack className='text-5xl' /></h1>
                                <span className="text-2xl font-bold text-pink-700">Full stack Development</span>
                            </div>
                            <p className="leading-relaxed mt-5">We printed out the shapes to get an idea of the scale and ensure it wouldn't take over the room or blind you.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative ">
                        <div className="h-full p-8 rounded-lg shadow-lg shadow-slate-800 border-l-[5px] border-l-pink-700 mt-8">
                            <div className='flex items-center'>
                                <h1 className='bg-pink-700 px-6 py-2 -ml-12 mr-3'> <AiOutlineApi className='text-5xl' /></h1>
                                <span className="text-2xl font-bold text-pink-700">Rest API</span>
                            </div>
                            <p className="leading-relaxed mt-5">We printed out the shapes to get an idea of the scale and ensure it wouldn't take over the room or blind you.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative">
                        <div className="h-full p-8 rounded-lg shadow-lg shadow-slate-800 border-l-[5px] border-l-pink-700 mt-8">
                            <div className='flex items-center'>
                                <h1 className='bg-pink-700 px-6 py-2 -ml-12 mr-3'> <SiWebauthn className='text-5xl' /></h1>
                                <span className="text-2xl font-bold text-pink-700">Firebase Authentication</span>
                            </div>
                            <p className="leading-relaxed mt-5">We printed out the shapes to get an idea of the scale and ensure it wouldn't take over the room or blind you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;