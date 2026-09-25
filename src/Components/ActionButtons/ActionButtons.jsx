import { StyleSheet, Text, View, Pressable} from 'react-native';
import { COLORS } from '../../Constants/colors';

export default function ActionButtons({acrescimoAgua}) {

    return(
        <View>
            <Text>Adicionar consumo:</Text>
            <View style = {styles.container}>
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
            <Pressable>
                <Text>Redefinir Dia</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    },
    btn: {
        width: '20%',
        backgroundColor: COLORS.primary,
        padding: 10
    }

})