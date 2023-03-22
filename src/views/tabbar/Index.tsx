import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Tab = createBottomTabNavigator();
import {HomeScreen} from './Home';
import {SellScreen} from './Sell';
import {MessageScreen} from './Message';
import {MineScreen} from './Mine';
const tabbarList = [
  {
    name: '首页',
    component: HomeScreen,
    iconName:"home-minus"
  },
  {
    name: '市场',
    component: SellScreen,
    iconName:"google-circles-extended"
  },
  {
    name: '资讯',
    component: MessageScreen,
    iconName:"checkbook"
  },
  {
    name: '我的',
    component: MineScreen,
    iconName:"account-circle"
  },
];
export function TabbarIndex() {
  return (
    <Tab.Navigator initialRouteName={tabbarList[0].name}>
      {tabbarList.map((item: any, index: number) => (
        <Tab.Screen options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name={item.iconName} color={color} size={26} />
              ),
        }} key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
}
