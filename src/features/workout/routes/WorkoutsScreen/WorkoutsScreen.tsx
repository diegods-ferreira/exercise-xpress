import { ScrollView, View } from 'react-native';

import { Image } from 'expo-image';

import { Button, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';
import { WorkoutsScreenRouteProps } from '@/types';

import pilatesImg from '../../assets/images/Pilates-amico.png';
import { workoutsScreenStyles } from './WorkoutsScreen.styles';

export function WorkoutsScreen({
  navigation,
  route,
}: WorkoutsScreenRouteProps) {
  const { styles, theme } = useStyles(workoutsScreenStyles);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Typography variant="h2">Treinamentos</Typography>

      <View style={styles.emptyFeedbackWrapper}>
        <Image
          source={pilatesImg}
          alt="Pilates"
          style={styles.emptyFeedbackImage}
        />

        <Typography variant="h2" style={styles.emptyFeedbackText}>
          Nenhum treinamento cadastrado
        </Typography>

        <Typography variant="subtitle2" style={styles.emptyFeedbackText}>
          Para facilitar o seu acompanhamento durante os treinos, cadastre seus
          treinamentos aqui.
        </Typography>

        <Button title="Adicionar treinamento" variant="secondary" />
      </View>
    </ScrollView>
  );
}
