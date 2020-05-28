import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const GridPokemon = styled.View`
  margin: 0 auto;
  background: #fff;
  height: 100px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const BlankGrid = styled.View`
  height: 180px;
  width: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NamePokemon = styled(RectButton)``;

export const NameOfPokemon = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-transform: capitalize;
  color: red;
`;
