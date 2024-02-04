import { EdgeInsets } from 'react-native-safe-area-context';

import { themes } from '@/config/styles/themes';

export type StylesFunctionParams = typeof themes.dark & {
  edgeInsets: EdgeInsets;
};
