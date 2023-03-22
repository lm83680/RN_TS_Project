import { useState } from 'react';
import {ImageBackground,TextInput} from 'react-native';
import {Text, View} from '../../components/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export function HomeScreen() {
  const [inputdata,SetInputData] = useState("")
  const getChange = (event:any) =>{
    SetInputData(event.nativeEvent.text);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground source={require('../../static/image/image2.jpg')} style={{height:"100%",width:"100%"}} >
          <Text>输入中文内容{inputdata}</Text>
          <MaterialCommunityIcons name="home" color="red" size={26} />
        <TextInput onChange={getChange}></TextInput>
      </ImageBackground>
    </View>
  );
}
