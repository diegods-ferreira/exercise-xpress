import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { Typography } from '@/components/elements';
import { themes } from '@/config/styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <View
        style={[
          styles.container,
          { backgroundColor: themes.dark.colors.background },
        ]}
      >
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>

        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="subtitle3">Subtitle 3</Typography>

        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="caption">Caption Text</Typography>

        <StatusBar
          style="light"
          backgroundColor={themes.dark.colors.background}
          translucent
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});
