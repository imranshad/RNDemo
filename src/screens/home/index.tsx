import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#F9F8FF"
  }
});
