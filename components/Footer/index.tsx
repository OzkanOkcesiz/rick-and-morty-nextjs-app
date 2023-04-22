import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
    const router = useRouter()
    const page = Number(router.query.page) || 1


    return (
        <footer className='text-center'>
            {page > 1 && (
                <Link href={`/${page - 1}`} passHref>
                    <button className='text-cyan-100 m-2'>Previous Page</button>
                </Link>
            )}

            <Link href={`/${page + 1}`} passHref>
                <button className='text-cyan-100 m-2'>Next Page</button>
            </Link>
        </footer>
    )
}

export default Footer
