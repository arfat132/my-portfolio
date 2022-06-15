import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBlog } from 'react-icons/fa';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { VscServerProcess } from 'react-icons/vsc';
import { MdWork } from 'react-icons/md';
import '../Projects/Projects'

const Navbar = () => {
    return (
        <div class="bg-[#090119] border border-1 border-pink-700 text-pink-700 py-6 lg:w-18  right-0 z-50 rounded-full fixed my-56 mr-3">
            <ul class="navbar-end w-full">
                <li><Link to="/" tooltip="Home" flow="left"><FaHome className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/about" tooltip="About" flow="left"><FaUserGraduate className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/skills" tooltip="Skills" flow="left"><HiOutlineLightBulb className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/services" tooltip="Services" flow="left"><VscServerProcess className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/projects" tooltip="Projects" flow="left"><MdWork className='text-2xl lg:text-4xl m-4' /></Link></li>
                <li><Link to="/blogs" tooltip="Blogs" flow="left"><FaBlog className='text-2xl lg:text-3xl m-4' /></Link></li>
                <li><Link to="/contact" tooltip="Contact" flow="left"><BiMessageRoundedDots className='text-2xl lg:text-4xl m-4' /></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;