import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppTabsParams = {
  Home: undefined;
  Workouts: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type AppRoutesParams = {
  HomeTabNavigator: NavigatorScreenParams<AppTabsParams>;
  Welcome: undefined;
};

export type HomeTabsScreenRouteProps = NativeStackScreenProps<
  AppRoutesParams,
  'HomeTabNavigator'
>;

export type WelcomeScreenRouteProps = NativeStackScreenProps<
  AppRoutesParams,
  'Welcome'
>;

export type HomeScreenRouteProps = CompositeScreenProps<
  BottomTabScreenProps<AppTabsParams, 'Home'>,
  NativeStackScreenProps<AppRoutesParams>
>;

export type WorkoutsScreenRouteProps = CompositeScreenProps<
  BottomTabScreenProps<AppTabsParams, 'Workouts'>,
  NativeStackScreenProps<AppRoutesParams>
>;

export type ProfileScreenRouteProps = CompositeScreenProps<
  BottomTabScreenProps<AppTabsParams, 'Profile'>,
  NativeStackScreenProps<AppRoutesParams>
>;

export type SettingsScreenRouteProps = CompositeScreenProps<
  BottomTabScreenProps<AppTabsParams, 'Settings'>,
  NativeStackScreenProps<AppRoutesParams>
>;
