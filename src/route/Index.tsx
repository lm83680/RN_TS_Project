import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabbarIndex} from '../views/tabbar/Index';
import {LoginScreen} from '../views/routes/Login';
import {SettingScreen} from '../views/routes/Setting';

const Stack = createNativeStackNavigator();

const routeList = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Setting',
    component: SettingScreen,
  },
];

export default function Route() {
  return (
    <Stack.Navigator initialRouteName="TabbarIndex">
      <Stack.Screen
        options={{headerShown: false}}
        name="TabbarIndex"
        component={TabbarIndex}
      />
      {routeList.map((item: any, index: number) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
}
