import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  max-width: 327px;
  margin: 0 auto;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  margin-bottom: 20px;
`;

export const InfoContent = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Quantity = styled.Text`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.gray_400};
  color: ${({ theme }) => theme.colors.gray_200};

  margin-left: 8px;
  border-radius: 999px;
  padding: 2px 8px 2px 8px;
`;

export const ListEmpty = styled.View`
  padding: 48px 20px;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray_400};
  align-items: center;
`;

export const ListEmptyText = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_300};
  text-align: center;

  margin-top: 16px;
`