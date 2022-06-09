import React from 'react';
import { Link } from 'react-router-dom';
import { GoCloudDownload } from 'react-icons/go';
const Navbar = () => {
    return (
        <div class="navbar bg-transparent fixed z-50 text-pink-700 lg:px-12 py-6">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact me</Link></li>
                        <li>  <button> <a href="https://drive.google.com/uc?id=1Yr48N1H5T5-aJkeI3rqARSq7WTRpXQWO&export=download" download className='flex items-center border border-1 border-pink-700 px-6 py-3 text-pink-700'>DownLoad Resume<GoCloudDownload className='ml-3' /></a></button></li>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">Arfat Begum</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-lg uppercase">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact me</Link></li>
                    <li>  <button> <a href="https://drive.google.com/uc?id=1Yr48N1H5T5-aJkeI3rqARSq7WTRpXQWO&export=download" download className='flex items-center border border-1 border-pink-700 px-6 py-2 text-pink-700'>DownLoad Resume<GoCloudDownload className='ml-3' /></a></button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;