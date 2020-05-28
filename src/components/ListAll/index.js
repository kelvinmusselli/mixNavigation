import React from 'react';
import { Container, GridPokemon, NamePokemon, NameOfPokemon } from './styles';
import { useNavigation } from '@react-navigation/native';

const ListAll = ({ pokemons }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {pokemons.results &&
        pokemons.results.map((pokemon, index) => (
          <GridPokemon key={index}>
            <NamePokemon
              onPress={() =>
                navigation.navigate('Sobre', {
                  screen: `Sobre`,
                  params: { pokemon },
                })
              }
            >
              <NameOfPokemon>{pokemon.name}</NameOfPokemon>
            </NamePokemon>
          </GridPokemon>
        ))}
    </Container>
  );
};

export default ListAll;
