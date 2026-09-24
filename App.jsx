import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Components/Header/Header';
import WaterProgress from './src/Components/WaterProgress/WaterProgress';

export default function App() {

  return (
    <SafeAreaProvider>

      <SafeAreaView>
        <StatusBar />
        <View>
          <Header meta = {2000} />
          <WaterProgress consumido = {2500} meta = {2000}/>
        </View>

      </SafeAreaView>
      
    </SafeAreaProvider>
  );
}



