import client from '@/apollo/apolloConfig'
import { GET_CHARACTERS, GET_PAGE_INFO } from '@/apollo/queries'
import Characters from '@/components/Characters'
import React from 'react'

const Page = ({characters}: any) => {
  return <Characters characters={characters} />
}


export const getStaticPaths = async () => {
    const { data } = await client.query({ query: GET_PAGE_INFO })
    
    function* generatePages(numberOfPages: number): IterableIterator<number> {
        let page = 0;
        while (page < numberOfPages) {
          yield page++;
        }
      }
      
      const numberOfPages = data?.characters.info.pages + 1;
      
      const paths = Array.from(generatePages(numberOfPages)).map((page) => ({
        params: { page: `${page}` },
      }));

  
    return {
      paths,
      fallback: false,
    }
  }

  export const getStaticProps = async ({ params: { page } } : { params: { page: string } }) => {
    const { data } = await client.query({
      query: GET_CHARACTERS,
      variables: { page: Number(page) },
    })
  
    return {
      props: {
        characters: data?.characters,
      },
    }
  }

export default Page
