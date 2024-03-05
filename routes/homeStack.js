import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Review from '../screens/review';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();




export default function HomeStack(){

    return(

    <Stack.Navigator 
        
         
      >
      <Stack.Screen  name="Home"  options={{headerShown: false}}  component={Home} />
      <Stack.Screen name="Review"  options={{headerShown: false}} component={Review} />
    

      
    </Stack.Navigator>



    )
}