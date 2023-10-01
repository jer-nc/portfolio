import React from 'react'

// Tipar ya que es typescript

interface Props {
    children: React.ReactNode
}
const HomeLayout = ({ children }: Props) => {
    return (
        <div className='max-w-[1200px] min-h-[87vh] mx-auto w-full px-4 md:px-8'>
            {children}
        </div>
    )
}

export default HomeLayout