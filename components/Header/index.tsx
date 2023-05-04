import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='mb-8'>
            <h1 className='text-cyan-100 text-xl text-center'>
                <Link href={"/"}>
                    Rick and Morty Character App
                </Link>
            </h1>
        </div>
    )
}

export default Header
