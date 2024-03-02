import { useTranslation } from 'react-i18next';
import { ImageBackground, View } from 'react-native';

import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { MoonIcon, SunIcon } from 'lucide-react-native';

import fitnessMontageImg from '@/assets/images/fitness-montage.png';
import logoImg from '@/assets/images/logo.png';
import { Button, IconButton, Panel, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';
import { useColorSchemeStore, useSettingsStore } from '@/stores';
import { WelcomeScreenRouteProps } from '@/types';

import * as S from './WelcomeScreen.styles';

export function WelComeScreen({ navigation }: WelcomeScreenRouteProps) {
  const { t } = useTranslation();

  const { styles, theme } = useStyles(S.welcomeScreenStyles);

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  const updateSetting = useSettingsStore((state) => state.updateSetting);

  const onGetStartedPress = async () => {
    updateSetting('showWelcomeScreen', false);
    navigation.replace('HomeTabNavigator');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={fitnessMontageImg}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={[
            theme.colors.background,
            'transparent',
            theme.colors.background,
          ]}
          style={styles.backgroundImageMask}
        >
          <View style={styles.toggleThemeButton}>
            <IconButton
              icon={colorScheme === 'dark' ? SunIcon : MoonIcon}
              onPress={toggleColorScheme}
            />
          </View>

          <BlurView
            intensity={25}
            tint={colorScheme}
            style={styles.logoWrapper}
          >
            <Image
              source={logoImg}
              alt="ExerciseXpress Logo"
              contentFit="contain"
              style={styles.logo}
            />
          </BlurView>
        </LinearGradient>
      </ImageBackground>

      <Panel style={styles.welcomeContainer}>
        <Typography variant="h1">{t('landingPage.title')}</Typography>

        <Typography variant="subtitle1">{t('landingPage.subtitle')}</Typography>

        <Button
          title={t('landingPage.actionButton')}
          onPress={onGetStartedPress}
        />

        <View style={styles.privacyPolicyLinkWrapper}>
          <Typography variant="subtitle2">
            {t('landingPage.accessPrivacyPolicy')}
          </Typography>

          <Button
            title={t('global.privacyPolicy')}
            variant="link"
            size="small"
            fitContent
            onPress={() => {}}
          />
        </View>
      </Panel>
    </View>
  );
}
