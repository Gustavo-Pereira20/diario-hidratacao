import { StyleSheet, Text, View, Pressable} from 'react-native';
import { COLORS } from '../../Constants/colors';

export function Mensagem({meta, consumido}) {

    return(
        <View>
            <Text style = {consumido > meta ? styles.percentageTextSuc : styles.percentageText}>
                {consumido > meta ? 'Parabéns, você atingiu sua meta diária' : `Continue bebendo água para atingir a sua meta. Faltam ${meta - consumido}ml`}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
    textAlign: 'center'

  },
  percentageTextSuc: {
    fontSize: 14,
    color: 'green',
    marginBottom: 16,
  },
})