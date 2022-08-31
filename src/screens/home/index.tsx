import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Card, SearchBar } from '../../components';
import { HeightPercent, WidthPercent } from '../../Utils/Helpers';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
            <SearchBar />
            <View style={styles.feedContainer}>
                <FlatList
                    data={[]}
                    keyExtractor= {(item,index)=>"key"+index}
                    renderItem={({item,index})=><Card data={item} index={index}/>}
                />
            </View>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  container2: {
    flex: 1,
    backgroundColor:"#F9F8FF",
    paddingHorizontal: WidthPercent(20),
    paddingVertical: HeightPercent(20)
  },
  feedContainer: {
    flex:1,
    backgroundColor:"red"
  }
});
