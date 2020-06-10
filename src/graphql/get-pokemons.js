import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      types
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          type
          damage
        }
        fast {
          name
          type
          damage
        }
      }
    }
  }
`;
