import React, { useState } from 'react';
import { Container } from './styles';

import SearchPokemon from '../../components/SearchPokemon';
import Pokemon from '../../components/ResultSearch/Pokemon';

const Home = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <SearchPokemon
        setSearch={setSearch}
        search={search}
        setPokemon={setPokemon}
        setLoading={setLoading}
        loading={loading}
      />
      <Pokemon pokemon={pokemon} />
    </Container>
  );
};

export default Home;
