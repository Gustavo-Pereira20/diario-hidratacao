import { StyleSheet, Text, View, Pressable} from 'react-native';
import { COLORS } from '../../Constants/colors';

export function MetaDiaria({meta, funcao}) {

    return(
        <View style = {styles.card}>
            <Pressable style = {styles.button} onPress={() => {
                (meta == 500 ? meta = 500 : funcao(-250))
            }}>
                <Text style = {styles.buttonText}>-250mL</Text>
            </Pressable>
            <View>
                <Text>Ajustar meta diária:</Text>
                <Text style = {styles.text}>{meta}</Text>
            </View>
            <Pressable style = {styles.button} onPress={() => {
                funcao(250)
            }}>
                <Text style = {styles.buttonText}>+250mL</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBG,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#A3E5FF',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#31A7E1',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.textMain,
    alignSelf: 'center',
  },
});
