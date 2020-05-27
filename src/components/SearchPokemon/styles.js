import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;
export const FormInput = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-color: #eee;
  width: 100%;
`;

export const InputSearch = styled.TextInput`
  height: 50px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #000;
  width: 300px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;
