import client from '@/apollo/apolloConfig'
import { GET_CHARACTERS } from '@/apollo/queries';
import Characters from '@/components/Characters';


export default function Home({ characters }: any) {
  return <Characters characters={characters} />
}


export const getServerSideProps = async () => {
  const { data } = await client.query({ query: GET_CHARACTERS })

  return {
    props: {
      characters: data?.characters.results,
    },
  }
}
