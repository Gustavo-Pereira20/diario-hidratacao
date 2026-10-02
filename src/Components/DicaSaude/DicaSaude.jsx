import { StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../Constants/colors';

export function DicaSaude() {
    return(
        <View style = {styles.container}>
            <Text style = {styles.emoji}>💡</Text>
            <View>
                <Text style = {styles.title}>Dica de Saúde</Text>
                <Text style = {styles.subtitle}>Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 24,
        flexDirection: 'row'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.textMain
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4
    },
    emoji: {
        fontSize: 32
    }
})