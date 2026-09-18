import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/Components/Header/Header.jsx';
import WaterProgress from './src/Components/WaterProgress/WaterProgress.jsx';
import ActionButtons from './src/Components/ActionButtons/ActionButtons.jsx';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/Constants/colors.js';
import { useState } from 'react';

export default function App() {
  const GOAL = 2000;
  const [consumed, setConsumed] = useState(0);

  const handleAddWater = (amount) => {

  };

  const handleReset = () => {

  };

  return (
    <SafeAreaProvider>

      <SafeAreaView>
        <StatusBar />

        <View>
          <Header />
          <WaterProgress />
          <ActionButtons />
        </View>

      </SafeAreaView>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});


