import * as React from 'react';
import { Text, View } from 'react-native';
import { dataType2 } from '../../Utils/constants';
import {styles} from './styles'

interface ItemProps {
    data:dataType2
}
const Item = (props: ItemProps) => {
    const {age,name,count}=props.data
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bulletPoints}>
        {'\u2B24'} Age:{age}{'\t'}
        {'\u2B24'} count:{count}{'\t'}
        </Text>
    </View>
  );
};

export default Item;
