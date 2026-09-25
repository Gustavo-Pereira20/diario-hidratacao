import { StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../Constants/colors';

export default function Header( {meta} ) {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>
                💧 Diário de Hidratação
            </Text>
            <Text style = {styles.subtitle}>
                Meta Diária: {meta}mL
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4
    }
})