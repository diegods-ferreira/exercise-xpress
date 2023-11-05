import { ScrollView, View } from 'react-native';

import {
  AccessibilityIcon,
  ArrowLeftIcon,
  BombIcon,
  ClipboardSignatureIcon,
} from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { Button, IconButton, Typography } from '@/components/elements';

export default function App() {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
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

      <View style={{ flexDirection: 'row', gap: 8 }}>
        <IconButton icon={ArrowLeftIcon} />
        <IconButton icon={AccessibilityIcon} />
        <IconButton icon={BombIcon} isDisabled />
        <IconButton icon={ClipboardSignatureIcon} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Button title="Button" size="small" variant="secondary" fitContent />
        <Button title="Button" size="small" variant="secondary" fitContent />
        <Button title="Button" size="small" variant="secondary" fitContent />
      </View>

      <Button title="Button primary" />
      <Button
        isLoading
        loadingText="Carregando..."
        title="Button primary Disabled"
      />
      <Button isDisabled title="Button primary Disabled" />
      <Button size="small" title="Button primary small" />

      <Button variant="secondary" title="Button secondary" />
      <Button
        isLoading
        loadingText="Carregando..."
        variant="secondary"
        title="Button secondary"
      />
      <Button
        isDisabled
        variant="secondary"
        title="Button secondary Disabled"
      />
      <Button variant="secondary" size="small" title="Button secondary small" />
    </ScrollView>
  );
}
