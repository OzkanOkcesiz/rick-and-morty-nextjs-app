import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Page = () => {
    const router = useRouter()
    const page = Number(router.query.page) || 1
    const filter = router.query.filterName


    return (
        <div className='text-center mb-4'>
            {page > 1 && (
                <Link href={filter ? {
                    pathname: `/${page - 1}`,
                    query: {
                        filterName: filter
                    }
                } : {
                    pathname: `/${page - 1}`,
                }} passHref>
                    <button className='text-cyan-100 m-2'>Previous Page</button>
                </Link>
            )}

            <Link href={filter ? {
                pathname: `/${page + 1}`,
                query: {
                    filterName: filter
                }
            } : {
                pathname: `/${page + 1}`,
            }} passHref>
                <button className='text-cyan-100 m-2'>Next Page</button>
            </Link>
        </div>
    )
}

export default Page
