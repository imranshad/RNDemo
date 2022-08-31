import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import { Icons } from '../../assets';
import { HeightPercent, WidthPercent } from '../../Utils/Helpers';

interface SearchBarProps {}

const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={styles.container}>
        <Image source={Icons.search} resizeMode="contain" style={styles.icon}/>
        <TextInput placeholder='Search' style={styles.input} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor:"#D1D1D6",
    borderRadius:5,
    height:HeightPercent(45),
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:16,
    backgroundColor:"#FFF"
  },
  input: {
    fontWeight:"400",
    fontSize: 16,
    marginLeft: 10,
    flex:1
  },
  icon: {
    width:WidthPercent(20)
  }
});
