import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps, TouchableOpacityProps } from 'react-native';

interface TextInputType extends TextInputProps {
  isChangeBorderColor: boolean;
}

interface TouchableOpacityType extends TouchableOpacityProps {
  isChangeBackgroundColor: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: ${RFValue(173)}px;
  background-color: ${({ theme }) => theme.colors.gray_700};

  margin-bottom: 55px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  position: absolute;
  bottom: -27px;
  max-width: 327px;
  width: 100%;
  height: 54px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_300,
}))<TextInputType>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
  border: 1px solid ${({ theme, isChangeBorderColor }) => (
    isChangeBorderColor ? theme.colors.purple_dark : theme.colors.gray_700
  )};
  padding: 16px;
  margin-right: 4px;

  color: ${({ theme }) => theme.colors.gray_100};
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
`;

export const PlusButton = styled.TouchableOpacity<TouchableOpacityType>`
  width: 52px;
  height: 52px;
  padding: 18px;
  background-color: ${({ theme, isChangeBackgroundColor }) => (
    isChangeBackgroundColor ? theme.colors.blue : theme.colors.blue_dark
  )};
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;
