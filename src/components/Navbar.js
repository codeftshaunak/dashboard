import Image from 'next/image';
import React, { useState } from 'react';
import user from '../assets/user.jpeg'
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [openMobileNavbar, setOpenMobileNavbar] = useState(false);

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
                <div style={{ color: "#005B96", fontSize: "1.5rem" }} onClick={() => setOpenMobileNavbar(!openMobileNavbar)}>
                    {
                        openMobileNavbar ? <AiOutlineClose /> : <FaBars />

                    }
                </div>
                {
                    openMobileNavbar && <>
                        <div className="bg-white open-navbar">
                            <h3>Guest User</h3>
                            <p>You are using account as Guest User . To book appointment
                                you need to login or sign up to continue
                            </p>
                            <div className="singin">
                                <button className='login'>login</button>
                                <button className='signin'>Sign Up</button>
                            </div>

                            <br />
                            <div className="item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_137)">
                                        <path d="M17.5 20H11.6667V14.5833H8.33333V20H2.5V11.25C2.5 11.02 2.68625 10.8333 2.91667 10.8333C3.14708 10.8333 3.33333 11.02 3.33333 11.25V19.1667H7.5V13.75H12.5V19.1667H16.6667V11.6667C16.6667 11.4367 16.8529 11.25 17.0833 11.25C17.3137 11.25 17.5 11.4367 17.5 11.6667V20Z" fill="black" />
                                        <path d="M19.5833 11.25C19.4796 11.25 19.3762 11.2117 19.2954 11.1346L9.99998 2.24333L0.704567 11.1346C0.538317 11.2933 0.274567 11.2879 0.115401 11.1217C-0.0437661 10.9554 -0.0375161 10.6917 0.128317 10.5325L9.99998 1.09L19.8712 10.5321C20.0371 10.6912 20.0433 10.955 19.8842 11.1212C19.8025 11.2067 19.6933 11.25 19.5833 11.25Z" fill="black" />
                                        <path d="M16.25 6.25C16.0195 6.25 15.8333 6.06333 15.8333 5.83333V3.33333H13.3333C13.1029 3.33333 12.9166 3.14667 12.9166 2.91667C12.9166 2.68667 13.1029 2.5 13.3333 2.5H16.6666V5.83333C16.6666 6.06333 16.4804 6.25 16.25 6.25Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_137">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-black">
                                    Dashboard
                                </p>
                            </div>
                            <hr />
                            <div className="item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_137)">
                                        <path d="M17.5 20H11.6667V14.5833H8.33333V20H2.5V11.25C2.5 11.02 2.68625 10.8333 2.91667 10.8333C3.14708 10.8333 3.33333 11.02 3.33333 11.25V19.1667H7.5V13.75H12.5V19.1667H16.6667V11.6667C16.6667 11.4367 16.8529 11.25 17.0833 11.25C17.3137 11.25 17.5 11.4367 17.5 11.6667V20Z" fill="black" />
                                        <path d="M19.5833 11.25C19.4796 11.25 19.3762 11.2117 19.2954 11.1346L9.99998 2.24333L0.704567 11.1346C0.538317 11.2933 0.274567 11.2879 0.115401 11.1217C-0.0437661 10.9554 -0.0375161 10.6917 0.128317 10.5325L9.99998 1.09L19.8712 10.5321C20.0371 10.6912 20.0433 10.955 19.8842 11.1212C19.8025 11.2067 19.6933 11.25 19.5833 11.25Z" fill="black" />
                                        <path d="M16.25 6.25C16.0195 6.25 15.8333 6.06333 15.8333 5.83333V3.33333H13.3333C13.1029 3.33333 12.9166 3.14667 12.9166 2.91667C12.9166 2.68667 13.1029 2.5 13.3333 2.5H16.6666V5.83333C16.6666 6.06333 16.4804 6.25 16.25 6.25Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_137">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-black">
                                    Dashboard
                                </p>
                            </div>
                            <hr />
                            <div className="item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_137)">
                                        <path d="M17.5 20H11.6667V14.5833H8.33333V20H2.5V11.25C2.5 11.02 2.68625 10.8333 2.91667 10.8333C3.14708 10.8333 3.33333 11.02 3.33333 11.25V19.1667H7.5V13.75H12.5V19.1667H16.6667V11.6667C16.6667 11.4367 16.8529 11.25 17.0833 11.25C17.3137 11.25 17.5 11.4367 17.5 11.6667V20Z" fill="black" />
                                        <path d="M19.5833 11.25C19.4796 11.25 19.3762 11.2117 19.2954 11.1346L9.99998 2.24333L0.704567 11.1346C0.538317 11.2933 0.274567 11.2879 0.115401 11.1217C-0.0437661 10.9554 -0.0375161 10.6917 0.128317 10.5325L9.99998 1.09L19.8712 10.5321C20.0371 10.6912 20.0433 10.955 19.8842 11.1212C19.8025 11.2067 19.6933 11.25 19.5833 11.25Z" fill="black" />
                                        <path d="M16.25 6.25C16.0195 6.25 15.8333 6.06333 15.8333 5.83333V3.33333H13.3333C13.1029 3.33333 12.9166 3.14667 12.9166 2.91667C12.9166 2.68667 13.1029 2.5 13.3333 2.5H16.6666V5.83333C16.6666 6.06333 16.4804 6.25 16.25 6.25Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_137">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-black">
                                    Dashboard
                                </p>
                            </div>
                            <hr />
                            <div className="item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_137)">
                                        <path d="M17.5 20H11.6667V14.5833H8.33333V20H2.5V11.25C2.5 11.02 2.68625 10.8333 2.91667 10.8333C3.14708 10.8333 3.33333 11.02 3.33333 11.25V19.1667H7.5V13.75H12.5V19.1667H16.6667V11.6667C16.6667 11.4367 16.8529 11.25 17.0833 11.25C17.3137 11.25 17.5 11.4367 17.5 11.6667V20Z" fill="black" />
                                        <path d="M19.5833 11.25C19.4796 11.25 19.3762 11.2117 19.2954 11.1346L9.99998 2.24333L0.704567 11.1346C0.538317 11.2933 0.274567 11.2879 0.115401 11.1217C-0.0437661 10.9554 -0.0375161 10.6917 0.128317 10.5325L9.99998 1.09L19.8712 10.5321C20.0371 10.6912 20.0433 10.955 19.8842 11.1212C19.8025 11.2067 19.6933 11.25 19.5833 11.25Z" fill="black" />
                                        <path d="M16.25 6.25C16.0195 6.25 15.8333 6.06333 15.8333 5.83333V3.33333H13.3333C13.1029 3.33333 12.9166 3.14667 12.9166 2.91667C12.9166 2.68667 13.1029 2.5 13.3333 2.5H16.6666V5.83333C16.6666 6.06333 16.4804 6.25 16.25 6.25Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_137">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-black">
                                    Dashboard
                                </p>
                            </div>
                            <hr />
                        </div>
                    </>
                }
            </nav>
        </>

    );
};

export default Navbar;
