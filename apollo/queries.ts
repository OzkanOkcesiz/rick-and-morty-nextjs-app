import { gql } from "@apollo/client"

const GET_CHARACTERS: any = gql`
      query Characters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
          results {
            id
            name
            gender
            status
            image
          }
        }
      }
`

const GET_PAGE_INFO = gql`
    query Character {
        characters {
            info {
                pages
            }
        }
    }
`

export { GET_CHARACTERS, GET_PAGE_INFO }