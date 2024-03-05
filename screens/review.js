import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Review({ route,navigation }) {
    const item = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>Review Screen</Text>
      <Text >{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rating}</Text>
    </View>
  );
}


