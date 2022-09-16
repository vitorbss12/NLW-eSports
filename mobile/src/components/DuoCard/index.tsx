import { TouchableOpacity, View } from 'react-native';
import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  hoursStart: string;
  hoursEnd: string;
  useVoiceChat: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />
      <DuoInfo
        label="Tempo de Jogo"
        value={`${data.yearsPlaying} anos`}
      />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart}h às ${data.hoursEnd}h`}
      />
      <DuoInfo
        label="Chamada de audio"
        value={data.useVoiceChat ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChat ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button}>
        
      </TouchableOpacity>
    </View>
  );
}