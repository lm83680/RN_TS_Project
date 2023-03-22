import {Text, View} from '../../components/Theme';
import {Button} from 'react-native';
export function LoginScreen({navigation}:any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button title='To Sell' onPress={()=>navigation.navigate('Sell')}></Button>
    </View>
  );
}
