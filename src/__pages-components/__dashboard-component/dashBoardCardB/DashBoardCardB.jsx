import React from 'react'
// Card B
import DashboardCardB1 from '../../../components/dashboardComponents/dashboardCards/DashboardCardB1';
import DashboardCardB2 from '../../../components/dashboardComponents/dashboardCards/DashboardCardB2';
import DashboardCardB3 from '../../../components/dashboardComponents/dashboardCards/DashboardCardB3';

const DashBoardCardB = () => {
    return (
        <div className='md:px-16 px-8'>
            <div className='grid grid-cols-12 gap-6 justify-between'>
                <DashboardCardB1
                    className={"md:col-span-4 col-span-12"}
                />
                <DashboardCardB2
                    className={"md:col-span-4 col-span-12"}
                />
                <DashboardCardB3
                    className={"md:col-span-4 col-span-12"}
                />
            </div>
        </div>
    )
}

export default DashBoardCardB