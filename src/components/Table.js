import React, { useState } from 'react';
import Image from 'next/image';
import user from '../assets/user.jpeg';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { userData } from '../utility/userdata';

const Table = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleDropdown = (index) => {
        if (expandedRow === index) {
            setExpandedRow(null);
        } else {
            setExpandedRow(index);
        }
    };
    return (
        <div className='full-table'>
            <div className="table-title d-flex table-title-mobile">
                <h5 className='active-title'>Upcoming</h5>
                <h5>Completed</h5>
                <h5>Canceled</h5>
            </div>
            <br />

            <div className="table table-desktop">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Fee</th>
                            <th scope="col">Date & Time</th>
                            <th scope="col">Specialization</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userData?.map((item, index) => {
                                return <tr style={{ position: 'relative' }}>
                                    <td className="align-middle" style={{ width: "220px" }}>
                                        <Image
                                            width={32}
                                            height={32}
                                            src={user}
                                            className='mr-2'
                                        />

                                        Dr. Abbas
                                    </td>
                                    <td className="align-middle" style={{ width: "150px" }}>5000 PKR</td>
                                    <td className="align-middle" style={{ width: "280px" }}>13 Aug, 12:00 PM</td>
                                    <td className="align-middle" style={{ width: "100px" }}>Cardiologist</td>
                                    <td className="align-middle">5.0</td>
                                    <td className="align-middle btns hidetab" style={{ width: "440px", marginRight: "auto" }}>
                                        <button className='btn'>Cancel</button>
                                        <button className='btn'>Join</button>
                                        <button className='btn'>View Details</button>
                                    </td>
                                    <td style={{ fontSize: "1rem" }} onClick={() => toggleDropdown(index)} className='desktop-icons'>
                                        <BiDotsVerticalRounded />
                                    </td>
                                    {expandedRow === index && (
                                        <td style={{ position: 'absolute', top: '1.9rem', right: '1rem', zIndex: '1000', backgroundColor: '#F3F3F3' }}>
                                            <p className='p-0 m-1'>Cancel</p>
                                            <p className='p-0 m-1'>Join</p>
                                            <p className='p-0 m-1'>View Details</p>
                                        </td>
                                    )}

                                </tr>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr className='p-5' style={{ padding: "20px" }}>
                            <td style={{ height: "2.5rem" }}></td>
                            <span style={{ position: 'absolute', right: "153px" }}>Row per page:</span>
                            <span style={{ position: 'absolute', right: "273px" }}> Pages: 1 - 10 of 854</span>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="table-mobile">
                {
                    userData?.map((data, index) => {
                        return <div className="bg-white mb-4">
                            <div className="top-section">
                                <div className="img">
                                    <Image src={user} />
                                    <p className='title'>Dr. Abbas</p>
                                </div>
                                <div className="content">
                                    <p className='title'>Fee: 500PKR</p>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="spec">
                                    <p className='title'>Specialization</p>
                                    <p>Family Physician</p>
                                </div>
                                <div className="date">
                                    <p className='title'>Date & Time</p>
                                    <p>09 Dec, 2023, 4:00 PM</p>
                                </div>
                                <div className="rating">
                                    <p className='title'>Rating</p>
                                    <p>5.0</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <button className='details'>View Details</button>
                                <button className='join'>Join</button>
                                <button className='cancel'>Cancel</button>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Table;
