import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import ListAll from '../../components/ListAll';

const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const getPokemons = await api.get('/pokemon');
      if (getPokemons) {
        setPokemons(getPokemons.data);
      }
    }
    getPokemons();
  }, []);

  return (
    <Container>
      <ListAll pokemons={pokemons} />
    </Container>
  );
};

export default ListPokemons;
