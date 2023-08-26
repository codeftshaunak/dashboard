import Image from 'next/image';
import React from 'react';
import user from '../assets/user.jpeg'
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary desktop" style={{ height: '70px' }}>
                <div className="container-fluid px-5">
                    <a className="navbar-brand dashboard" href="#">Dashboard</a>

                    <div className="user">
                        <Image
                            width={42}
                            height={42}
                            src={user}
                        />
                        <div className="content text-black">
                            <h5>Dr. Abbas</h5>
                        </div>
                    </div>
                </div>
            </nav >

            <nav className='navbar navbar-expand mobile justify-content-between px-3'>
                <a href="/" className="d-flex link-dark text-decoration-none">
                    <Image
                        src={logo}
                        alt="logo"
                        width={180}
                        height={50}
                        quality={100}
                    />
                </a>
                <div style={{ color: "#005B96", fontSize: "1.5rem" }}>
                    <FaBars />
                </div>
            </nav>
        </>

    );
};

export default Navbar;
