import client from '@/apollo/apolloConfig'
import { GET_CHARACTERS, GET_PAGE_INFO } from '@/apollo/queries'
import Characters from '@/components/Characters'
import Search from '@/components/Search'
import { useRouter } from 'next/router'
import React from 'react'

const Page = ({ characters }: any) => {
  return (
    <>
      <Characters characters={characters} />
    </>
  )
}

// ES2015 öncesi için
// export const getStaticPaths = async () => {
//     const { data } = await client.query({ query: GET_PAGE_INFO })

//     function* generatePages(numberOfPages: number): IterableIterator<number> {
//         let page = 0;
//         while (page < numberOfPages) {
//           yield page++;
//         }
//       }

//       const numberOfPages = data?.characters.info.pages + 1;

//       const paths = Array.from(generatePages(numberOfPages)).map((page) => ({
//         params: { page: `${page}` },
//       }));


//     return {
//       paths,
//       fallback: false,
//     }
//   }


// export const getStaticPaths = async () => {
//   const { data } = await client.query({ query: GET_PAGE_INFO })

//   const numberOfPages = data?.characters.info.pages + 1;

//   const arrayOfPages = [...Array(numberOfPages).keys()];

//   const paths = arrayOfPages.map((page) => ({
//     params: { page: `${page}` },
//   }));


//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async ({ params }: any) => {

//   const { page } = params;
//   const { filter } = params

//   console.log(filter);
//   console.log(page);
  
  
  
//   const { data } = await client.query({
//     query: GET_CHARACTERS,
//     variables: {
//       page: Number(page),
//       filter: filter?.name
//     },
//   })

//   return {
//     props: {
//       characters: data?.characters,
//     },
//   }
// }

export async function getServerSideProps(context: { query: any, params: any }) {
  const { query, params } = context;
  const { page } = query;
  const { filter } = query;


  // console.log(query.filterName);
  // console.log(context);
  // console.log(filter);
  // console.log(page);
  console.log(query);
  
  
  
  
  

  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: {
      page: Number(page),
      filter: {name:query.filterName}
    },
  })

  return {
    props: {
      characters: data?.characters,
    },
  }
}

export default Page
