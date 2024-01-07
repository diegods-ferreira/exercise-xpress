import { RFValue } from 'react-native-responsive-fontsize';

import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { css } from 'styled-components';
import styled from 'styled-components/native';

import logoImg from '@/assets/images/logo.png';
import { Panel } from '@/components/elements';

export const Container = styled.View(
  ({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `,
);

export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const BackgroundImageMask = styled(LinearGradient)(
  ({ theme }) => css`
    flex: 1;
    padding: 0px ${theme.measures.lg}px;

    align-items: center;
    gap: ${theme.measures.lg}px;
  `,
);

export const LogoImageWrapper = styled(BlurView)`
  ${({ theme }) => css`
    width: 100%;
    border-radius: ${theme.measures.lg}px;
    overflow: hidden;
  `}
`;

export const LogoImage = styled(Image).attrs({
  source: logoImg,
  alt: 'ExerciseXpress logo',
  contentFit: 'contain',
})`
  width: 100%;
  height: ${RFValue(80)}px;
`;

export const WelcomeContainer = styled(Panel)(
  ({ theme }) => css`
    margin-top: -${theme.measures.xl}px;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-width: 0;

    gap: ${theme.measures.xl}px;
  `,
);

export const PrivacyPolicyLinkWrapper = styled.View(
  ({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${theme.measures.xs}px;
  `,
);

export const ToggleThemeButton = styled.View`
  align-self: flex-end;
`;
