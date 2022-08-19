import { TextProps } from 'react-native';
import styled from 'styled-components/native';

interface TextType extends TextProps {
  isCompleted: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 12px 8px 12px 12px;
  border-radius: 8px;

  margin-bottom: 8px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const CheckButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`

export const Text = styled.Text<TextType>`
  flex: 1;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme, isCompleted }) => isCompleted ? theme.colors.gray_300 : theme.colors.gray_100};
  text-decoration: ${({ isCompleted }) => isCompleted ? 'line-through' : ''};

  margin: 0 8px;
`;

export const TrashButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 4px; 
  align-items: center; 
  justify-content: center;

  color: ${({ theme }) => theme.colors.gray_300}
`;