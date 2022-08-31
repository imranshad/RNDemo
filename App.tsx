import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {HomeScreen} from './src/screens'

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <HomeScreen />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {}
});
