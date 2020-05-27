import React from 'react';

import {
  Container,
  GridPokemon,
  PhotoPokemon,
  NamePokemon,
  ListDescription,
  LabelItem,
  ResultItem,
} from './styles';

const AllOfPokemon = ({ route }) => {
  const pokemon = route.params.pokemon;

  return (
    <Container>
      <GridPokemon>
        <PhotoPokemon source={{ uri: pokemon.sprites.front_default }} />
        <NamePokemon>{pokemon.name}</NamePokemon>
        <ListDescription>
          <LabelItem>Habilidades</LabelItem>
          {pokemon.abilities.map(item => (
            <ResultItem>{item.ability.name}</ResultItem>
          ))}
        </ListDescription>
      </GridPokemon>
    </Container>
  );
};

export default AllOfPokemon;
