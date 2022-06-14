import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GoCloudDownload } from 'react-icons/go';
import 'animate.css';
const About = () => {
    return (
        <section class="body-font pt-12 lg:pt-40 lg:min-h-screen overflow-hidden bg-[#090119]">
            <div class="mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap-reverse lg:flex-nowrap">
                    <div class="lg:w-1/2 w-full lg:py-6 mb-6 lg:mb-0 px-8 lg:px-0">
                        <h1 className='text-4xl font-semibold text-pink-700 mb-3 uppercase animate__animated animate__fadeInDown animate__fast'>About me</h1>
                        <p className='text-white text-justify animate__animated animate__fadeInUp animate__fast'>I am Arfat. I've been in the Web Development field for the last 1.5 years with enough experience and extensive knowledge in React js, HTML5, CSS, JavaScript, JavaScript ES6, Tailwind CSS, Bootstrap, Firebase, Figma and Adobe Photoshop and Illustrator.</p>
                        <p className='mt-4 mb-10 text-white text-justify animate__animated animate__fadeInUp animate__fast'> For the last 1 year, I am also working as a full-stack developer with back-end technologies like Node js, Express I am highly motivated and I love to get work done in a quick manner. I love learning new skills and I am excited to work with clients. Drop a message and let's get started. I am also available for permanent work.</p>
                        <button> <a href="https://drive.google.com/uc?id=1Yr48N1H5T5-aJkeI3rqARSq7WTRpXQWO&export=download" download className='animate__animated animate__fadeInUp animate__fast flex items-center border border-1 border-pink-700 px-6 py-3 text-pink-700'>DownLoad Resume<GoCloudDownload className='ml-3' /></a></button>
                        <div>
                            <span class="inline-flex mt-12">
                                <a href="https://www.facebook.com/arfat.akter.98/" class="animate__animated animate__fadeInUp animate__fast text-pink-700 border-2 border-pink-700 p-2">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="/" class="ml-3 text-pink-700 border-2 border-pink-700 p-2 animate__animated animate__fadeInUp animate__fast">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a href="https://github.com/arfat132" class="ml-3 text-pink-700 border-2 border-pink-700 p-2 animate__animated animate__fadeInUp animate__fast">
                                <AiFillGithub className='text-xl'/>
                                </a>
                                <a href="https://www.linkedin.com/in/arfat-begum-0b22221b2/" class="ml-3 text-pink-700 border-2 border-pink-700 p-2 animate__animated animate__fadeInUp animate__fast">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="lg:w-1/2 w-full lg:pl-24 lg:py-6 mb-16 lg:mb-0 mx-auto animate__animated animate__fadeInRight animate__slow">
                        <img alt="ecommerce" class="w-96 shadow-lg border-t  border-t-pink-700 shadow-pink-700 px-12 pt-12 mx-auto lg:h-auto object-cover object-center rounded" src="https://i.ibb.co/sQ3JhwJ/me.png" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;