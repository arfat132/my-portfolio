import React from 'react';
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div class="-z-50 hero min-w-screen min-h-screen bg-[url(https://i.ibb.co/HV63Lv9/12-min.jpg)]">
            <div class="hero-content text-center text-neutral-content w-full">
                <div>
                    <h1 className='text-xl lg:text-2xl text-white font-medium animate__animated animate__fadeInDown animate__slow'>Hello</h1>
                    <h1 className='text-2xl lg:text-5xl font-bold mt-3 text-white animate__animated animate__fadeInDown animate__slow'>I'AM ARFAT BEGUM</h1>
                    <h1 className='text-pink-700 text-4xl lg:text-7xl font-bold mt-3'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Frontend Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Web Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("React Js Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Frontend Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Web Developer")
                                    .start();
                            }}
                        />
                    </h1>
                </div>
            </div>
        </div>

    );
};

export default Banner;