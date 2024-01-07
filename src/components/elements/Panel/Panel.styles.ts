import styled, { css } from 'styled-components/native';

export const Container = styled.View(
  ({ theme }) => css`
    padding: ${theme.measures.xl}px;
    background-color: ${theme.colors.bgOffset};
    border-radius: ${theme.measures.lg}px;
  `,
);
