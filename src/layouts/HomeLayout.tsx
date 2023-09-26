import React from 'react'

// Tipar ya que es typescript

interface Props {
    children: React.ReactNode
}
const HomeLayout = ({ children }: Props) => {
    return (
        <div className='max-w-[1200px] mx-auto w-full px-8'>
            {children}
        </div>
    )
}

export default HomeLayout