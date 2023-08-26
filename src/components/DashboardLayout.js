// DashboardLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />
                <div className="mt-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;
