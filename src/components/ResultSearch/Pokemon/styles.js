import styled from 'styled-components/native';

export const Container = styled.View`
  background: #e0e0e0;
  padding: 30px;
  margin: 0 auto;
  height: 240px;
  width: 100%;
  border-radius: 4px;
`;

export const GridPokemon = styled.View`
  margin: 0 auto;
  background: #fff;
  height: 180px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const BlankGrid = styled.View`
  height: 180px;
  width: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PhotoPokemon = styled.Image`
  height: 150px;
  width: 150px;
`;

export const NamePokemon = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-transform: capitalize;
  color: red;
`;

export const DontHave = styled.Text``;
