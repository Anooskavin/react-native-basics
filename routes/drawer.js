import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import About from '../screens/about';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import Header from '../shared/header';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" options={{ headerTitle: () => <Header title={"Review"} /> }} component={HomeStack}  />
                <Drawer.Screen name="About" options={{ headerTitle: () => <Header title={"About"} /> }}  component={AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}