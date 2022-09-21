import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, TextInput } from 'react-native';
import { API } from '../../services';
import { findPivotIndex } from '../../Utils';
import { dataType2, sampleData } from '../../Utils/constants';
import SerchBar from '../../compnents/SearchBar';
import Item from '../../compnents/Item';
import { styles } from './styles'

interface HomeScreenProps { }
const HomeScreen = (props: HomeScreenProps) => {
  const [apiData, setData] = React.useState<dataType2[]>([]);
  React.useEffect(() => {
    console.log("Pivot point", sampleData[findPivotIndex(sampleData)])
  }, [])
  const onChangeText = async (text: string) => {
    if (text.length > 0) {
      API.searchText(text)
        .then((response: dataType2) => {
          setData([response])
        })
    } else {
      setData([])
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SerchBar onChangeText={onChangeText} />
        <FlatList
          data={apiData}
          renderItem={({ item, index }) => {
            return <Item data={item} />
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;