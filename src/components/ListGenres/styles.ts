import styled, {css} from 'styled-components/native';

export const Container = styled.View``;

export const ContainerTitle = styled.View`
  padding: 40px 10px;
`;

export const Title = styled.Text`
  color: #fdf0e1;
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 10px;
  ${({selected}: {selected: any}) =>
    selected &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: white;
    `};
`;
