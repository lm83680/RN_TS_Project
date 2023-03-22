# run 
```cmd
yarn start
```
 ## package json
   - "@react-native-async-storage/async-storage": "^1.17.12", //本地缓存
   - "@react-navigation/native": "^6.1.6", //路由 
   - "@react-navigation/native-stack": "^6.9.12", //路由
   - "react": "18.2.0",
   - "react-native": "0.71.4",
   - "react-native-safe-area-context": "^4.5.0",  //路由
   - "react-native-screens": "^3.20.0", //路由
   - "react-navigation": "^4.4.4" //路由

> 当前屏幕的宽度:Dimensions.get('window').width   
> 当前屏幕的高度:Dimensions.get('window').height   
> 当前屏幕的分辨率:Dimensions.get('window').scale    
> 当前运行的平台:Platform.OS 
```tsx
export class SettingsScreen extends React.Component {
    state = {
      num: 100,
    };
    render(): React.ReactNode {
      return (
        <Son color="rbule"></Son>
      );
    }
  }
  class Son extends React.Component<{color?: any}> {
    state = {
      num: 100,
    };
    render(): React.ReactNode {
      return (
        <Text>子组件{this.props.color}</Text>
      );
    }
  }
```
```tsx
options={{headerShown: false}}
```