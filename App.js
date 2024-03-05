import 'react-native-gesture-handler';

import React, { useState } from 'react'
import *  as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


import Home from './screens/home';
import Review from './screens/review';
import { globalStyles } from './styles/global';
import About from './screens/about';
import Navigator from './routes/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  })
}

const Drawer = createDrawerNavigator();


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }


  

  return (
<Navigator />
  // <NavigationContainer>
  //   <Drawer.Navigator initialRouteName="Home">
  //     <Drawer.Screen name="Home" component={Home} />
  //   </Drawer.Navigator>
  // </NavigationContainer>
  

  );

}

