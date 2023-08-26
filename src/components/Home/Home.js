import React from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import DashboardLayout from '../DashboardLayout';
import Table from '../Table';

const HomeComp = () => {
    return (
        <DashboardLayout>
            <Table />
        </DashboardLayout>
    )
}

export default HomeComp;
