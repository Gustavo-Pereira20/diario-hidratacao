
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Header} from './src/Components/Header/Header';
import {WaterProgress} from './src/Components/WaterProgress/WaterProgress';
import {ActionButtons} from './src/Components/ActionButtons/ActionButtons';
import { useState } from 'react';
import { COLORS } from './src/Constants/colors.js';
import { MetaDiaria } from './src/Components/MetaDiaria/MetaDiaria.jsx';
import { DicaSaude } from './src/Components/DicaSaude/DicaSaude.jsx';

export default function App() {
  const [meta, setMeta] = useState(2000)
  
  const [consumido, setConsumido] = useState(0)
  
  function addAgua(aguaAcres) {
    setConsumido(consumido + aguaAcres)
  }

  function redefinirAgua() {
    setConsumido(0)
  }

  function mudarMeta(agua) {
    (agua > 0 ? setMeta(meta + agua) : setMeta(meta + (agua)))
  }

  return (
    <SafeAreaProvider>

      <SafeAreaView style = {styles.container}>

        <StatusBar />
        <View style = {styles.content}>
          <Header meta = {meta}/>
          <MetaDiaria meta = {meta} funcao={mudarMeta}/>
          <WaterProgress consumido = {consumido} meta = {meta}/>
          <ActionButtons acrescimoAgua = {addAgua} redefinirAgua = {redefinirAgua}/>
          <DicaSaude/>
        </View>

      </SafeAreaView>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});
