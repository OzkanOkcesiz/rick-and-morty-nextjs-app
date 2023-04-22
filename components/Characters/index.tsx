import Head from 'next/head'
import React from 'react'
import Card from '../Card'
import Footer from '../Footer'
import Header from '../Header'

const Characters = ({ characters }: any) => {
 

  return (
    <div className='bg-cyan-950'>
      <Head>
        <title>Rick and Morty GraphQL | Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="grid grid-cols-5 justify-items-center">
          {characters?.results.map((character: any) => (
            <Card character={character} key={character.id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Characters