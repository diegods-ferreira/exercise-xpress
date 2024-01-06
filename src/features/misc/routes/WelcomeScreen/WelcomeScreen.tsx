import { SafeAreaView } from 'react-native-safe-area-context';

import { MoonIcon, SunIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import fitnessMontageImg from '@/assets/images/fitness-montage.png';
import { Button, IconButton, Typography } from '@/components/elements';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { useI18nStore } from '@/stores/i18n';
import { useSettingsStore } from '@/stores/settings';
import { WelcomeScreenRouteProps } from '@/types';

import * as S from './WelcomeScreen.styles';

export function WelComeScreen({ navigation, route }: WelcomeScreenRouteProps) {
  const theme = useTheme();

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  const translate = useI18nStore((state) => state.translate);

  const updateSetting = useSettingsStore((state) => state.updateSetting);

  const onGetStartedPress = async () => {
    await updateSetting('showWelcomeScreen', false);
    navigation.replace('HomeTabNavigator');
  };

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
            <S.LogoImageWrapper
              intensity={25}
              tint={colorScheme === 'dark' ? 'light' : 'dark'}
            >
              <S.LogoImage />
            </S.LogoImageWrapper>

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
          <Typography variant="h1">{translate('landingPage.title')}</Typography>

          <Typography variant="subtitle1">
            {translate('landingPage.subtitle')}
          </Typography>

          <Button
            title={translate('landingPage.actionButton')}
            onPress={onGetStartedPress}
          />

          <S.PrivacyPolicyLinkWrapper>
            <Typography variant="subtitle2">
              {translate('landingPage.accessPrivacyPolicy')}
            </Typography>

            <Button
              title={translate('global.privacyPolicy')}
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
