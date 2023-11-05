import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

export const Container = styled(LinearGradient)(
  ({ theme }) => css`
    padding: ${theme.measures.xl}px;
    border-radius: ${theme.measures['2xl']}px;
    border: 1px solid rgba(255, 255, 255, 0.15);
  `,
);
