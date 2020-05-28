import React from 'react';
import {
  Container,
  GridPokemon,
  BlankGrid,
  PhotoPokemon,
  NamePokemon,
  DontHave,
} from './styles';

import { useNavigation } from '@react-navigation/native';

const Pokemon = ({ pokemon }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {pokemon.sprites ? (
        <GridPokemon>
          <PhotoPokemon source={{ uri: pokemon.sprites.front_default }} />
          <NamePokemon
            onPress={() =>
              navigation.navigate('Sobre', {
                screen: `Sobre`,
                params: { pokemon },
              })
            }
          >
            {pokemon.name}
          </NamePokemon>
        </GridPokemon>
      ) : (
        <BlankGrid>
          {!pokemon.sprites ? (
            <DontHave />
          ) : (
            <DontHave>Que pena este pokemon não existe.</DontHave>
          )}
        </BlankGrid>
      )}
    </Container>
  );
};

export default Pokemon;
