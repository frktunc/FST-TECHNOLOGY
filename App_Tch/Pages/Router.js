import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login/login';
import Register from './Register/register';
import Main from './Main/main';
import FlashMessage from 'react-native-flash-message'
import phone from './TechnologyProducts/Phone/phone';
import tv from './TechnologyProducts/TV/tv';
import computer from './TechnologyProducts/Computer/computer';
import Buy from './Buy/buy';

const Stack = createStackNavigator();

export default () => {







  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginPage' component={Login} />
       <Stack.Screen name='RegisterPage' component={Register} />
       <Stack.Screen name='MainPage' component={Main} />
       <Stack.Screen name='PhonePage' component={phone} />
       <Stack.Screen name='TvPage' component={tv} />
       <Stack.Screen name='ComputerPage' component={computer} />
       <Stack.Screen name='BuyPage' component={Buy}/>
      </Stack.Navigator>
      <FlashMessage position='top' />
    </NavigationContainer>
  )
}
