import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DumbbellIcon, MoonIcon, SunIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import fitnessMontageImg from '@/assets/images/fitness-montage.png';
import { Button, IconButton, Typography } from '@/components/elements';
import { useColorSchemeStore } from '@/stores/color-scheme';

import * as S from './styles';

export default function App() {
  const theme = useTheme();

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  return (
    <S.Container>
      <S.BackgroundImage source={fitnessMontageImg}>
        <S.BackgroundImageMask
          colors={[
            theme.colors.background,
            'transparent',
            theme.colors.background,
          ]}
        >
          <S.BackgroundImageSafeArea>
            <DumbbellIcon color={theme.colors.primary} size={RFValue(32)} />

            <Typography variant="h2">Exercise Xpress</Typography>

            <S.ToggleThemeButton>
              <IconButton
                icon={colorScheme === 'dark' ? SunIcon : MoonIcon}
                onPress={toggleColorScheme}
              />
            </S.ToggleThemeButton>
          </S.BackgroundImageSafeArea>
        </S.BackgroundImageMask>
      </S.BackgroundImage>

      <SafeAreaView>
        <S.WelcomeContainer>
          <Typography variant="h1">
            Let&apos;s Start a Healthy Life Style
          </Typography>

          <Typography variant="subtitle1">
            Achieve your best lifestyle and goals with Exercise Xpress
          </Typography>

          <Button title="Get Started" />

          <S.PrivacyPolicyLinkWrapper>
            <Typography variant="subtitle2">Access our</Typography>

            <Button
              title="Privacy Policy"
              variant="link"
              size="small"
              fitContent
            />
          </S.PrivacyPolicyLinkWrapper>
        </S.WelcomeContainer>
      </SafeAreaView>
    </S.Container>
  );
}
