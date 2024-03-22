import { ScrollView } from 'react-native';

import { Typography } from '@/components/elements';
import { NoDataFeedback } from '@/components/feedbacks';
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

      <NoDataFeedback
        imageSrc={pilatesImg}
        imageAlt="Pilates"
        title="Nenhum treinamento cadastrado"
        message="Para facilitar o seu acompanhamento durante os treinos, cadastre seus treinamentos aqui."
        actionBtnTitle="Adicionar treinamento"
        actionBtnOnPress={() => {}}
      />
    </ScrollView>
  );
}
