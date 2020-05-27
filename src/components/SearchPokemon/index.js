import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, FormInput, SubmitButton, InputSearch } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

const SearchPokemon = ({
  setSearch,
  search,
  setPokemon,
  loading,
  setLoading,
}) => {
  const handleButton = async () => {
    setLoading(true);
    const resultSearch = search;
    const hasPokemon = await api.get(`/pokemon/${resultSearch}`);

    if (hasPokemon) {
      setTimeout(() => {
        setLoading(false);
        return setPokemon(hasPokemon.data);
      }, 300);
    }
  };

  return (
    <Container>
      <FormInput>
        <InputSearch
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Pesquise um pokemon"
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <SubmitButton loading={loading} onPress={() => handleButton()}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="search" size={20} color="#fff" />
          )}
        </SubmitButton>
      </FormInput>
    </Container>
  );
};

export default SearchPokemon;
