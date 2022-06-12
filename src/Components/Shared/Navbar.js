import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { VscServerProcess } from 'react-icons/vsc';
import { MdWork } from 'react-icons/md';


const Navbar = () => {
    return (
        <div class="bg-[#090119] border border-1 border-pink-700 text-pink-700 py-6 lg:w-18  right-0 z-50 rounded-full fixed mt-28  lg:mt-56 mr-3">
            <ul class="navbar-end w-full">
                <li><Link to="/" ><FaHome className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/about"><FaUserGraduate className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/skills"><HiOutlineLightBulb className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/services"><VscServerProcess className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/projects"><MdWork className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/contact"><BiMessageRoundedDots className='text-2xl lg:text-4xl m-4' /></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;