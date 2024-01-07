import { PropsWithChildren } from 'react';

import { LinearGradientProps } from 'expo-linear-gradient';

import * as S from './Panel.styles';

type PanelProps = Omit<LinearGradientProps, 'colors'>;

export function Panel({ children, ...rest }: PropsWithChildren<PanelProps>) {
  return <S.Container {...rest}>{children}</S.Container>;
}
