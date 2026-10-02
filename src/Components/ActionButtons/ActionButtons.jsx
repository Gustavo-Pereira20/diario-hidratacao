import { StyleSheet, Text, View, Pressable} from 'react-native';
import { COLORS } from '../../Constants/colors';

export function ActionButtons({acrescimoAgua, aoResetar}) {

    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>Adicionar consumo:</Text>
            <View style = {styles.buttonRow}>
                <Pressable style = {styles.btn}>
                    <Text>+200 mL</Text>
                </Pressable>
                <Pressable style = {styles.btn}>
                    <Text>+350 mL</Text>
                </Pressable>
                <Pressable style = {styles.btn}>
                    <Text>+500 mL</Text>
                </Pressable>
            </View>
            <Pressable style = {styles.resetButton}>
                <Text>Redefinir Dia</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  resetButton: {
    backgroundColor: COLORS.danger,
    borderWidth: 1,
    borderColor: COLORS.danger,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: COLORS.cardBg,
    fontWeight: '600',
    fontSize: 13,
  },
});