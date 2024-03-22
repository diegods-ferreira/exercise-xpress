import { View } from 'react-native';

import { Image, ImageProps } from 'expo-image';

import { Button, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';

import { noDataFeedbackStyles } from './NoDataFeedback.styles';

type NoDataFeedbackProps = {
  imageSrc: ImageProps['source'];
  imageAlt: ImageProps['alt'];
  title: string;
  message: string;
  actionBtnTitle: string;
  actionBtnOnPress: () => void;
};

export function NoDataFeedback({
  imageSrc,
  imageAlt,
  title,
  message,
  actionBtnTitle,
  actionBtnOnPress,
}: NoDataFeedbackProps) {
  const { styles } = useStyles(noDataFeedbackStyles);

  return (
    <View style={styles.container}>
      <Image source={imageSrc} alt={imageAlt} style={styles.image} />

      <Typography variant="h2" style={styles.text}>
        {title}
      </Typography>

      <Typography variant="subtitle2" style={styles.text}>
        {message}
      </Typography>

      <Button
        variant="secondary"
        title={actionBtnTitle}
        onPress={actionBtnOnPress}
      />
    </View>
  );
}
