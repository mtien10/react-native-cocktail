import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from "./ScreenHome";
import Product from './Product';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={ScreenHome}/>
        <Stack.Screen name="Product" component={Product}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
