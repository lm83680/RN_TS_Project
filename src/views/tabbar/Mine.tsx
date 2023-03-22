import {Button} from 'react-native';
import {Text, View} from '../../components/Theme';
export function MineScreen({navigation}:any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Mine</Text>
      <Button title='To Login' onPress={()=>navigation.navigate('Login')}></Button>
    </View>
  );
}
