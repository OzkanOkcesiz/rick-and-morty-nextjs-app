import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
    const router = useRouter()
    const page = Number(router.query.page) || 1


    return (
        <footer>
            {page > 1 && (
                <Link href={`/${page - 1}`} passHref>
                    <button className='text-cyan-100'>Previous Page</button>
                </Link>
            )}

            <Link href={`/${page + 1}`} passHref>
                <button className='text-cyan-100'>Next Page</button>
            </Link>
        </footer>
    )
}

export default Footer
