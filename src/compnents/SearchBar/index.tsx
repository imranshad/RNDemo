import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { StyleProps } from 'react-native-reanimated';
import { styles} from './styles'

interface SerchBarProps {
    onChangeText:(text:string)=>void,
    containerStyle?:StyleProps,
    textInputStyle?:StyleProps
}

const SerchBar = (props: SerchBarProps) => {
    const {onChangeText,containerStyle,textInputStyle} =props
  return (
    <View style={[styles.container,containerStyle]}>
      <TextInput style={[styles.input,textInputStyle]} placeholder='Enter text to search' onChangeText={onChangeText} />
    </View>
  );
};

export default SerchBar;