import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
export const GridPokemon = styled.View`
  margin: 0 auto;
  height: 180px;
  width: 300px;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 4px;
`;

export const PhotoPokemon = styled.Image`
  height: 150px;
  width: 150px;
`;

export const NamePokemon = styled.Text`
  font-weight: bold;
  font-size: 30px;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: red;
`;

export const ListDescription = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LabelItem = styled.Text`
  font-family: 'Arial, Helvetica, sans-serif';
  font-weight: bold;
  color: #000;
  font-size: 18px;
`;
export const ResultItem = styled.Text`
  margin-top: 10px;
  font-size: 16px;
`;
