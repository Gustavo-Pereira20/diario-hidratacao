import { StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../Constants/colors';

export default function WaterProgress({consumido, meta}) {
    const porcentagem = () => {
        let valor = Math.round((consumido / meta ) * 100) 
        return valor + '%'
    }

    return(
        <View style = {styles.container}>
            <Text>
                Você bebeu {consumido}mL de água hoje.
            </Text>
            <Text>
                {consumido >= meta ? 'Você atingiu 100% da Meta.' : `Você atingiu ${porcentagem()} da Meta.`}
            </Text>
            <View style = {styles.barraExterna}>
                <View style = {[styles.barraInterna, {width: porcentagem()}]} />
            </View>
        </View>  
    );
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 24,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain
    },
    barraExterna: {
        borderWidth: 1,
        width: '90%',
        height: 30,
        marginTop: 5
    },
    barraInterna: {
        backgroundColor: '#277ef0',
        height: '100%',
        maxWidth: '100%'
    },
})