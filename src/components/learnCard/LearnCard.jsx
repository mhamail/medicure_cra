import React from 'react'
import CustomDropdown from '../customDropdown/CustomDropdown'

const LearnCard = ({ image, title }) => {
    return (
        <div className='flex flex-col space-y-10 max-w-sm'>
            <img
                src={image}
                alt='Connect with people who can help'
            />
            <h1 className='md:text-4xl text-3xl font-extralight'>
                {title}
            </h1>

            <CustomDropdown />
        </div>
    )
}

export default LearnCard