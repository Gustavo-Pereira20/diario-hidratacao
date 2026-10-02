import { StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../Constants/colors';

export function WaterProgress({consumido, meta}) {
    const porcentagem = () => {
        let valor = Math.round((consumido / meta ) * 100) 
        return valor + '%'
    }

    return(
        <View style = {styles.card}>
            <Text style = {styles.consumedText}>
                {consumido} mL
            </Text>
            <Text style = {consumido >= meta ? styles.percentageTextSuc : styles.percentageText}>
                {consumido >= meta ? 'Parabéns, você atingiu sua meta diária' : `Você atingiu ${porcentagem()} da Meta.`}
            </Text>
            <View style = {styles.progressBarBackground}>
                <View style = {[styles.progressBarFill, {width: porcentagem()}]} />
            </View>
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
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  percentageTextSuc: {
    fontSize: 14,
    color: 'green',
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
})