import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';

function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 py-3" style={{ width: '250px', height: '100vh', backgroundColor: "#011f4b" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap" />
                </svg>
                <Image
                    src={logo}
                    alt="logo"
                    width={120}
                    height={40}
                    quality={100}
                />
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto text-center">
                <li>
                    <a href="#" className="nav-link text-white text-center">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Dashboard
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
