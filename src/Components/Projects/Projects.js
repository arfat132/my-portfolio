import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./styles.css";
const Projects = () => {
    return (
        <div className="pt-28 lg:max-h-screen">
            <p className="text-center leading-relaxed text-base uppercase text-pink-700  font-bold">Projects</p>
            <h2 class="text-center text-white uppercase font-bold text-[32px]">
                My recent works
            </h2>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-full shadow-lg shadow-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold text-white mb-3">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-xl font-bold text-pink-700 underline">Core Realator</a>
                                <p className="leading-relaxed my-4 text-white">This is a realtor independent website. In this website a realtor provides 3 services.</p>
                                <button className="mt-2 bg-pink-800 text-white px-6 py-3 rounded-lg uppercase">Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Projects;