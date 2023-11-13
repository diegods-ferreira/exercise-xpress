import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from 'expo-linear-gradient';
import { css } from 'styled-components';
import styled from 'styled-components/native';

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

export const BackgroundImageMask = styled(LinearGradient)`
  flex: 1;
`;

export const BackgroundImageSafeArea = styled(SafeAreaView)(
  ({ theme }) => css`
    flex: 1;
    padding-top: ${theme.measures['2xl']}px;

    align-items: center;
    gap: ${theme.measures.md}px;
  `,
);

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

export const ToggleThemeButton = styled.View(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.measures['2xl']}px;
    right: ${theme.measures['2xl']}px;
  `,
);
