import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='mb-8 mt-4'>
            <Link href={"/"}>
                <h1 className='text-cyan-100 text-xl text-center'>Rick and Morty Character App</h1>
            </Link>
        </div>
    )
}

export default Header
