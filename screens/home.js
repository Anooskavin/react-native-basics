import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Go To Review Details' onPress={()=> navigation.navigate('Review')} /> */}
      <FlatList 
        data={reviews}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=> navigation.navigate('Review', item )}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key }      />
    </View>
  );
}

