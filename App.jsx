import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Components/Header/Header';
import WaterProgress from './src/Components/WaterProgress/WaterProgress';
import ActionButtons from './src/Components/ActionButtons/ActionButtons';

export default function App() {

  
  return (
    <SafeAreaProvider>

      <SafeAreaView>
        <StatusBar />
        <View>
          <Header meta = {2000} />
          <WaterProgress consumido = {1800} meta = {2000}/>
          <ActionButtons />
        </View>

      </SafeAreaView>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});



