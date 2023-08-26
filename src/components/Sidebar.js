import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { AiOutlineHome } from 'react-icons/ai'
import Navbar from './Navbar';

function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 py-3 sidebar" style={{ width: '250px', minHeight: "100vh", maxHeight: 'auto', backgroundColor: "#011f4b" }}>
            <a href="/" className="d-flex mx-auto link-dark text-decoration-none">
                <Image
                    src={logo}
                    alt="logo"
                    width={120}
                    height={40}
                    quality={100}
                />
            </a>
            <br />
            <ul className="nav nav-pills flex-column mb-auto text-center">
                <li className='d-flex justify-content-center align-items-center'>
                    <AiOutlineHome />
                    <a href="#" className="nav-link text-white text-center fw-bold hidetab">
                        Dashboard
                    </a>
                </li>
                <li className='d-flex justify-content-center align-items-center'>
                    <AiOutlineHome />
                    <a href="#" className="nav-link text-white text-center fw-bold hidetab">
                        Dashboard
                    </a>
                </li>
                <li className='d-flex justify-content-center align-items-center'>
                    <AiOutlineHome />
                    <a href="#" className="nav-link text-white text-center fw-bold hidetab">
                        Dashboard
                    </a>
                </li>
                <li className='d-flex justify-content-center align-items-center'>
                    <AiOutlineHome />
                    <a href="#" className="nav-link text-white text-center fw-bold hidetab">
                        Dashboard
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
