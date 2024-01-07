import { PropsWithChildren } from 'react';

import { LinearGradientProps } from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';

import * as S from './Panel.styles';

type PanelProps = Omit<LinearGradientProps, 'colors'>;

export function Panel({ children, ...rest }: PropsWithChildren<PanelProps>) {
  const theme = useTheme();

  return (
    <S.Container
      colors={[theme.colors.bgOffset, theme.colors.bgOffsetDarker]}
      {...rest}
    >
      {children}
    </S.Container>
  );
}
